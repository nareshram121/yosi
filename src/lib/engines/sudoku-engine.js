class SudokuEngine {
  constructor(mountEl, config) {
    this.mount      = mountEl;
    this.config     = null;
    this.userGrid   = [];
    this.pencil     = [];
    this.selected   = null;
    this.mode       = 'normal';
    this.moves      = 0;
    this.errors     = 0;
    this.isActive   = true;

    this.onSolve       = null;
    this.onError       = null;
    this.onStatsUpdate = null;
    this.onWin         = null;
    this.onConfigLoad  = null;
    this.numpadEl      = null;

    if (config) this.loadConfig(config);
    this._attachKeyboard();
  }

  loadConfig(cfg) {
    this.config   = cfg;
    this.userGrid = [...cfg.givens];
    this.pencil   = Array.from({ length: cfg.size * cfg.size }, () => new Set());
    this.selected = null;
    this.moves    = 0;
    this.errors   = 0;
    this.render();
    if (this.numpadEl) this._buildNumpad();
    this._updateStats();
    if (this.onConfigLoad) this.onConfigLoad(cfg);
  }

  reset() {
    this.userGrid = [...this.config.givens];
    this.pencil   = Array.from({ length: this.config.size * this.config.size }, () => new Set());
    this.selected = null;
    this.moves    = 0;
    this.errors   = 0;
    this.render();
    this._updateStats();
  }

  render() {
    this._buildTable();
  }

  setMode(m) {
    this.mode = m;
  }

  getState() {
    const emptyCells = this.userGrid.filter(v => v === 0).length;
    return {
      solved:     emptyCells === 0 && this._isCorrect(),
      moves:      this.moves,
      errors:     this.errors,
      emptyCells,
    };
  }

  enterDigit(d) {
    if (this.selected === null) return;
    const cfg = this.config;
    const idx = this.selected;
    if (cfg.givens[idx] !== 0) return;

    if (d === 0) {
      this.userGrid[idx] = 0;
      this.pencil[idx].clear();
    } else if (this.mode === 'pencil') {
      if (this.userGrid[idx] !== 0) return;
      if (this.pencil[idx].has(d)) this.pencil[idx].delete(d);
      else this.pencil[idx].add(d);
    } else {
      this.userGrid[idx] = d;
      this.pencil[idx].clear();
      this.moves++;
      if (cfg.solution[idx] !== d) {
        this.errors++;
        if (this.onError) this.onError(idx, d);
      }
      this._removePencilFromPeers(idx, d);
    }

    this._buildTable();
    this._updateStats();

    if (this._isCorrect() && this.userGrid.every(v => v !== 0)) {
      setTimeout(() => this._triggerWin(), 300);
    }
  }

  reveal() {
    const cfg     = this.config;
    const empties = [];
    for (let i = 0; i < this.userGrid.length; i++) {
      if (this.userGrid[i] === 0) empties.push(i);
    }
    if (empties.length === 0) return;
    const idx = empties[Math.floor(Math.random() * empties.length)];
    this.userGrid[idx] = cfg.solution[idx];
    this.pencil[idx].clear();
    this._removePencilFromPeers(idx, cfg.solution[idx]);
    this._buildTable();
    this._updateStats();
    if (this._isCorrect() && this.userGrid.every(v => v !== 0)) {
      setTimeout(() => this._triggerWin(), 300);
    }
  }

  _buildTable() {
    const table = this.mount;
    table.innerHTML = '';
    const cfg   = this.config;
    const N     = cfg.size;
    const cellPx = this._cellSize();
    const borders = this._computeRegionBorders(cfg.regions, N);

    // Inject styles once
    if (!document.getElementById('sudoku-engine-styles')) {
      const style = document.createElement('style');
      style.id = 'sudoku-engine-styles';
      style.textContent = `
        .sudoku-table { border-collapse: collapse; }
        .sudoku-table td {
          text-align: center; vertical-align: middle; cursor: pointer;
          background: #fff; border: 1px solid #d4b896; position: relative;
          transition: background 0.1s;
        }
        .sudoku-table td.given { background: var(--color-parch, #f5e8c8); }
        .sudoku-table td.selected { background: #d1f0ee !important; }
        .sudoku-table td.peer { background: #f0f9f8; }
        .sudoku-table td.same-digit { background: #e8f5e9; }
        .sudoku-table td.error { background: #fff0f0; }
        .sudoku-table td.box-top    { border-top:    2px solid #1a6b6b !important; }
        .sudoku-table td.box-bottom { border-bottom: 2px solid #1a6b6b !important; }
        .sudoku-table td.box-left   { border-left:   2px solid #1a6b6b !important; }
        .sudoku-table td.box-right  { border-right:  2px solid #1a6b6b !important; }
        .cell-val { font-weight: 600; }
        .given-val { color: var(--color-ink, #1c1408); }
        .user-val  { color: var(--color-teal, #1a6b6b); }
        .error-val { color: var(--color-rose, #b83232); }
        .pencil-grid {
          display: grid; width: 100%; height: 100%;
          position: absolute; top: 0; left: 0;
        }
        .pm-digit {
          display: flex; align-items: center; justify-content: center;
          color: var(--color-muted, #6b5a3e); line-height: 1;
        }
        .sudoku-numpad {
          display: flex; flex-wrap: wrap; gap: 8px;
          justify-content: center; margin-top: 16px;
        }
        .num-btn {
          width: 44px; height: 44px; border-radius: 8px; font-size: 1.1rem;
          font-weight: 700; cursor: pointer; border: 2px solid var(--color-border, #d4b896);
          background: #fff; color: var(--color-ink, #1c1408);
          font-family: var(--font-serif, Georgia, serif);
          transition: background 0.1s;
        }
        .num-btn:hover { background: var(--color-parch, #f5e8c8); }
        .num-btn.erase { font-size: 1.3rem; color: var(--color-rose, #b83232); }
      `;
      document.head.appendChild(style);
    }

    table.className = 'sudoku-table';

    for (let r = 0; r < N; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < N; c++) {
        const idx    = r * N + c;
        const td     = document.createElement('td');
        td.style.width  = cellPx + 'px';
        td.style.height = cellPx + 'px';
        td.style.fontSize = Math.round(cellPx * 0.45) + 'px';

        const isGiven = cfg.givens[idx] !== 0;
        td.className = isGiven ? 'given' : 'user';

        if (this.selected !== null) {
          if (idx === this.selected) td.classList.add('selected');
          else if (this._isPeer(idx, this.selected)) td.classList.add('peer');
          else if (this.userGrid[idx] !== 0 && this.userGrid[idx] === this.userGrid[this.selected])
            td.classList.add('same-digit');
        }

        if (!isGiven && this.userGrid[idx] !== 0 && this.userGrid[idx] !== cfg.solution[idx])
          td.classList.add('error');

        const b = borders[idx];
        if (b.top)    td.classList.add('box-top');
        if (b.bottom) td.classList.add('box-bottom');
        if (b.left)   td.classList.add('box-left');
        if (b.right)  td.classList.add('box-right');

        const val = this.userGrid[idx];
        if (val !== 0) {
          const span = document.createElement('span');
          span.className = 'cell-val ' + (isGiven ? 'given-val' : this.userGrid[idx] !== cfg.solution[idx] ? 'error-val' : 'user-val');
          span.textContent = val;
          td.appendChild(span);
        } else if (this.pencil[idx].size > 0) {
          this._renderPencil(td, idx, cellPx);
        }

        td.addEventListener('click', () => this._selectCell(idx));
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    // Render numpad inline if no external numpadEl
    if (!this.numpadEl) {
      const existingPad = this.mount.parentElement?.querySelector('.sudoku-numpad');
      if (!existingPad) {
        const pad = document.createElement('div');
        pad.className = 'sudoku-numpad';
        this.numpadEl = pad;
        this._buildNumpad();
        this.mount.parentElement?.appendChild(pad);
      }
    }
  }

  _renderPencil(td, idx, cellPx) {
    const cfg   = this.config;
    const N     = cfg.size;
    const pCols = N <= 4 ? 2 : 3;
    const pRows = Math.ceil(N / pCols);
    const pmGrid = document.createElement('div');
    pmGrid.className = 'pencil-grid';
    pmGrid.style.gridTemplateColumns = `repeat(${pCols},1fr)`;
    pmGrid.style.gridTemplateRows    = `repeat(${pRows},1fr)`;
    for (const d of cfg.digits) {
      const pm = document.createElement('div');
      pm.className = 'pm-digit';
      pm.style.fontSize = Math.round(cellPx / (N <= 4 ? 3 : 4)) + 'px';
      pm.textContent = this.pencil[idx].has(d) ? d : '';
      pmGrid.appendChild(pm);
    }
    td.appendChild(pmGrid);
  }

  _cellSize() {
    const arena     = this.mount.closest('.puzzle-mount') || this.mount.parentElement;
    const available = (arena?.offsetWidth || 320) - 28;
    return Math.floor(Math.min(available / this.config.size, 72));
  }

  _computeRegionBorders(regions, N) {
    const cellRegion = new Array(N * N).fill(-1);
    regions.forEach((reg, ri) => reg.forEach(ci => (cellRegion[ci] = ri)));
    return Array.from({ length: N * N }, (_, idx) => {
      const r = Math.floor(idx / N), c = idx % N;
      const reg = cellRegion[idx];
      return {
        top:    r === 0   || cellRegion[(r-1)*N+c] !== reg,
        bottom: r === N-1 || cellRegion[(r+1)*N+c] !== reg,
        left:   c === 0   || cellRegion[r*N+(c-1)] !== reg,
        right:  c === N-1 || cellRegion[r*N+(c+1)] !== reg,
      };
    });
  }

  _isPeer(a, b) {
    const N  = this.config.size;
    const ra = Math.floor(a/N), ca = a%N;
    const rb = Math.floor(b/N), cb = b%N;
    if (ra === rb || ca === cb) return true;
    for (const reg of this.config.regions) {
      if (reg.includes(a) && reg.includes(b)) return true;
    }
    return false;
  }

  _removePencilFromPeers(idx, d) {
    const total = this.config.size * this.config.size;
    for (let i = 0; i < total; i++) {
      if (i !== idx && this._isPeer(i, idx)) this.pencil[i].delete(d);
    }
  }

  _selectCell(idx) {
    this.selected = this.selected === idx ? null : idx;
    this._buildTable();
  }

  _attachKeyboard() {
    document.addEventListener('keydown', e => {
      if (!this.isActive || !this.config) return;
      const d = parseInt(e.key);
      if (!isNaN(d) && d >= 0 && d <= 9) {
        if (this.config.digits.includes(d) || d === 0) this.enterDigit(d);
      }
      if (e.key === 'Backspace' || e.key === 'Delete') this.enterDigit(0);
      if (this.selected !== null && ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
        const N = this.config.size;
        const r = Math.floor(this.selected/N), c = this.selected%N;
        let nr = r, nc = c;
        if (e.key === 'ArrowUp')    nr = Math.max(0,   r-1);
        if (e.key === 'ArrowDown')  nr = Math.min(N-1, r+1);
        if (e.key === 'ArrowLeft')  nc = Math.max(0,   c-1);
        if (e.key === 'ArrowRight') nc = Math.min(N-1, c+1);
        this.selected = nr*N + nc;
        this._buildTable();
        e.preventDefault();
      }
    });
  }

  _buildNumpad() {
    const pad = this.numpadEl;
    if (!pad) return;
    pad.innerHTML = '';
    for (const d of this.config.digits) {
      const btn = document.createElement('button');
      btn.className   = 'num-btn';
      btn.textContent = d;
      btn.addEventListener('click', () => this.enterDigit(d));
      pad.appendChild(btn);
    }
    const erase = document.createElement('button');
    erase.className   = 'num-btn erase';
    erase.textContent = '⌫';
    erase.addEventListener('click', () => this.enterDigit(0));
    pad.appendChild(erase);
  }

  _isCorrect() {
    const cfg = this.config;
    for (let i = 0; i < cfg.solution.length; i++) {
      if (this.userGrid[i] !== 0 && this.userGrid[i] !== cfg.solution[i]) return false;
    }
    return true;
  }

  _updateStats() {
    if (this.onStatsUpdate) {
      this.onStatsUpdate({
        moves:      this.moves,
        errors:     this.errors,
        emptyCells: this.userGrid.filter(v => v === 0).length,
      });
    }
  }

  _triggerWin() {
    const state = this.getState();
    if (this.onWin)   this.onWin(this.config.winMessage, state);
    if (this.onSolve) this.onSolve(state);
  }
}

export { SudokuEngine };
