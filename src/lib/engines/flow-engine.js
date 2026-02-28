class FlowEngine {
  constructor(mountEl, config) {
    this.mount      = mountEl;
    this.config     = null;
    this.svg        = null;
    this.canvas     = null;
    this.cellSz     = 0;
    this.N          = 0;

    this.paths      = {};
    this.cellOwner  = [];
    this.drawing    = false;
    this.activePair = null;
    this.moves      = 0;

    this.onSolve    = null;
    this.onProgress = null;
    this.onStats    = null;
    this.onWin      = null;

    if (config) this.loadConfig(config);
  }

  loadConfig(config) {
    this.config = config;
    this.N = config.grid;
    this._initState();
    this.render();
  }

  reset() {
    this._initState();
    this._redrawAll();
    this._updateStats();
  }

  getState() {
    const total          = this.N * this.N;
    const filled         = this._countFilled();
    const pairsConnected = this._countConnectedPairs();
    return {
      solved: this._checkSolved(),
      moves:  this.moves,
      pct:    Math.round(filled / total * 100),
      pairsConnected,
      totalPairs: this.config.pairs.length,
    };
  }

  render() {
    this.mount.innerHTML = '';

    const arenaW    = this.mount.offsetWidth || 340;
    const available = Math.min(arenaW - 16, 420);
    this.cellSz     = Math.floor(available / this.N);
    const total     = this.cellSz * this.N;

    const wrap = document.createElement('div');
    wrap.style.cssText = `position:relative;width:${total}px;height:${total}px;margin:0 auto;touch-action:none;`;

    this.canvas           = document.createElement('canvas');
    this.canvas.width     = total;
    this.canvas.height    = total;
    this.canvas.style.cssText = `position:absolute;top:0;left:0;width:${total}px;height:${total}px;`;
    wrap.appendChild(this.canvas);

    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('width', total);
    this.svg.setAttribute('height', total);
    this.svg.setAttribute('viewBox', `0 0 ${total} ${total}`);
    this.svg.style.cssText = `position:absolute;top:0;left:0;pointer-events:none;`;
    wrap.appendChild(this.svg);

    this.mount.appendChild(wrap);
    this._boardEl = wrap;

    this._drawGrid();
    this._drawEndpoints();
    this._attachEvents();
    this._updateStats();
  }

  _initState() {
    this.paths     = {};
    this.cellOwner = Array.from({ length: this.N }, () => Array(this.N).fill(null));
    this.drawing   = false;
    this.activePair = null;
    this.moves     = 0;
    for (const p of this.config.pairs) {
      this.paths[p.id] = [];
      const [sr, sc] = p.start;
      const [er, ec] = p.end;
      this.cellOwner[sr][sc] = p.id;
      this.cellOwner[er][ec] = p.id;
    }
  }

  _drawGrid() {
    const ctx = this.canvas.getContext('2d');
    const C = this.cellSz, N = this.N, W = C * N;
    ctx.fillStyle = '#f5e8c8';
    ctx.fillRect(0, 0, W, W);
    ctx.strokeStyle = 'rgba(0,0,0,.12)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= N; i++) {
      ctx.beginPath();
      ctx.moveTo(i * C, 0); ctx.lineTo(i * C, W);
      ctx.moveTo(0, i * C); ctx.lineTo(W, i * C);
      ctx.stroke();
    }
    // Border
    ctx.strokeStyle = '#b89878';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, W - 2, W - 2);
  }

  _drawEndpoints() {
    this.svg.innerHTML = '';
    const C = this.cellSz;
    const r = Math.round(C * 0.3);
    for (const p of this.config.pairs) {
      for (const [row, col] of [p.start, p.end]) {
        const cx = col * C + C / 2;
        const cy = row * C + C / 2;
        const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        ring.setAttribute('cx', cx); ring.setAttribute('cy', cy);
        ring.setAttribute('r', r + 3); ring.setAttribute('fill', 'none');
        ring.setAttribute('stroke', p.color); ring.setAttribute('stroke-width', '3');
        ring.setAttribute('opacity', '0.4');
        this.svg.appendChild(ring);
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', cx); dot.setAttribute('cy', cy);
        dot.setAttribute('r', r); dot.setAttribute('fill', p.color);
        dot.setAttribute('stroke', 'white'); dot.setAttribute('stroke-width', '2');
        this.svg.appendChild(dot);
      }
    }
  }

  _redrawAll() {
    this._drawGrid();
    for (const p of this.config.pairs) {
      if (this.paths[p.id]?.length > 1) {
        this._drawPath(p.id, this.paths[p.id], p.color, false);
      }
    }
    this._drawEndpoints();
  }

  _drawPath(id, cells, color, isPreview) {
    if (cells.length < 2) return;
    const ctx = this.canvas.getContext('2d');
    const C = this.cellSz;
    ctx.save();
    ctx.globalAlpha = isPreview ? 0.6 : 1.0;
    ctx.strokeStyle = color;
    ctx.lineWidth   = Math.round(C * 0.45);
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.beginPath();
    ctx.moveTo(cells[0][1] * C + C / 2, cells[0][0] * C + C / 2);
    for (let i = 1; i < cells.length; i++) {
      ctx.lineTo(cells[i][1] * C + C / 2, cells[i][0] * C + C / 2);
    }
    ctx.stroke();
    ctx.restore();
  }

  _attachEvents() {
    const el = this.canvas;
    el.addEventListener('mousedown',  e => this._onDown(e));
    el.addEventListener('mousemove',  e => this._onMove(e));
    el.addEventListener('mouseup',    () => this._onUp());
    el.addEventListener('mouseleave', () => this._onUp());
    el.addEventListener('touchstart', e => { e.preventDefault(); this._onDown(e.touches[0]); },      { passive: false });
    el.addEventListener('touchmove',  e => { e.preventDefault(); this._onMove(e.touches[0]); },      { passive: false });
    el.addEventListener('touchend',   e => { e.preventDefault(); this._onUp(); },                     { passive: false });
  }

  _getCell(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (this.canvas.width  / rect.width);
    const y = (e.clientY - rect.top)  * (this.canvas.height / rect.height);
    const col = Math.floor(x / this.cellSz);
    const row = Math.floor(y / this.cellSz);
    if (row < 0 || row >= this.N || col < 0 || col >= this.N) return null;
    return [row, col];
  }

  _onDown(e) {
    const cell = this._getCell(e);
    if (!cell) return;
    const [r, c] = cell;
    const pairId = this.cellOwner[r][c];
    if (!pairId) return;

    const path = this.paths[pairId];
    const idx = path.findIndex(([pr, pc]) => pr === r && pc === c);
    if (idx >= 0 && idx < path.length - 1) {
      const pair = this.config.pairs.find(p => p.id === pairId);
      for (let i = idx + 1; i < path.length; i++) {
        const [tr, tc] = path[i];
        const isEnd = (tr === pair.end[0] && tc === pair.end[1]) || (tr === pair.start[0] && tc === pair.start[1]);
        if (!isEnd) this.cellOwner[tr][tc] = null;
      }
      path.splice(idx + 1);
    }

    this.drawing    = true;
    this.activePair = pairId;
    if (path.length === 0) path.push([r, c]);
    this._redrawAll();
  }

  _onMove(e) {
    if (!this.drawing || !this.activePair) return;
    const cell = this._getCell(e);
    if (!cell) return;
    const [r, c] = cell;
    const id   = this.activePair;
    const path = this.paths[id];
    const pair = this.config.pairs.find(p => p.id === id);
    if (!path.length) return;

    const [lr, lc] = path[path.length - 1];
    if (Math.abs(r - lr) + Math.abs(c - lc) !== 1) return;

    // Backtrack
    if (path.length >= 2) {
      const [pr2, pc2] = path[path.length - 2];
      if (r === pr2 && c === pc2) {
        const [remR, remC] = path.pop();
        const isEnd = (remR === pair.end[0] && remC === pair.end[1]) || (remR === pair.start[0] && remC === pair.start[1]);
        if (!isEnd) this.cellOwner[remR][remC] = null;
        this._redrawAll();
        return;
      }
    }

    const owner = this.cellOwner[r][c];
    if (owner && owner !== id) return;

    const isEnd = (r === pair.end[0] && c === pair.end[1]) || (r === pair.start[0] && c === pair.start[1]);
    if (owner === id && !isEnd) return;

    path.push([r, c]);
    this.cellOwner[r][c] = id;
    this.moves++;
    this._redrawAll();
    this._updateStats();

    if (isEnd && path.length > 1) {
      const s = path[0], e2 = path[path.length - 1];
      const validEnds =
        (s[0] === pair.start[0] && s[1] === pair.start[1] && e2[0] === pair.end[0] && e2[1] === pair.end[1]) ||
        (s[0] === pair.end[0]   && s[1] === pair.end[1]   && e2[0] === pair.start[0] && e2[1] === pair.start[1]);
      if (validEnds) {
        this.drawing    = false;
        this.activePair = null;
        if (this._checkSolved()) this._triggerWin();
      }
    }
  }

  _onUp() {
    this.drawing    = false;
    this.activePair = null;
    this._updateStats();
  }

  _countFilled() {
    let n = 0;
    for (let r = 0; r < this.N; r++)
      for (let c = 0; c < this.N; c++)
        if (this.cellOwner[r][c]) n++;
    return n;
  }

  _countConnectedPairs() {
    let n = 0;
    for (const p of this.config.pairs) {
      const path = this.paths[p.id];
      if (!path || path.length < 2) continue;
      const s = path[0], e = path[path.length - 1];
      const validEnds =
        (s[0] === p.start[0] && s[1] === p.start[1] && e[0] === p.end[0] && e[1] === p.end[1]) ||
        (s[0] === p.end[0]   && s[1] === p.end[1]   && e[0] === p.start[0] && e[1] === p.start[1]);
      if (validEnds) n++;
    }
    return n;
  }

  _checkSolved() {
    return this._countFilled() >= this.N * this.N &&
           this._countConnectedPairs() >= this.config.pairs.length;
  }

  _updateStats() {
    const total     = this.N * this.N;
    const filled    = this._countFilled();
    const pct       = Math.round(filled / total * 100);
    const connected = this._countConnectedPairs();
    if (this.onStats) this.onStats({ moves: this.moves, pct, connected, total: this.config.pairs.length });
    if (this.onProgress) this.onProgress(pct);
  }

  _triggerWin() {
    if (this.onWin)   this.onWin(this.config.winMessage);
    if (this.onSolve) this.onSolve(this.getState());
    this._celebratePaths();
  }

  _celebratePaths() {
    let step = 0;
    const tick = () => {
      if (step > 6) return;
      this._redrawAll();
      const ctx = this.canvas.getContext('2d');
      ctx.save();
      ctx.globalAlpha = 0.08 * (6 - step);
      ctx.fillStyle   = '#fff';
      ctx.fillRect(0, 0, this.cellSz * this.N, this.cellSz * this.N);
      ctx.restore();
      step++;
      setTimeout(tick, 80);
    };
    tick();
  }
}

export { FlowEngine };
