/**
 * E2 — DragSpatialEngine
 * Rush Hour–style sliding block puzzle.
 * Config: { gridSize, blocks: [{id, color, row, col, length, orientation:'h'|'v', isTarget?}], exitRow, exitSide:'right' }
 */
class DragSpatialEngine {
  constructor(mountEl, config) {
    this.mount = mountEl;
    this.config = null;
    this.blocks = [];
    this.dragging = null;
    this.moves = 0;
    this.solved = false;
    this.onSolve = null;
    this.onProgress = null;
    this._cellSize = 0;
    this._offsetX = 0;
    this._offsetY = 0;
    if (config) this.loadConfig(config);
  }

  loadConfig(cfg) {
    this.config = cfg;
    this.blocks = cfg.blocks.map(b => ({ ...b }));
    this.moves = 0;
    this.solved = false;
    this.dragging = null;
    this.render();
  }

  reset() {
    if (!this.config) return;
    this.blocks = this.config.blocks.map(b => ({ ...b }));
    this.moves = 0;
    this.solved = false;
    this.dragging = null;
    this.render();
  }

  getState() {
    return { solved: this.solved, moves: this.moves };
  }

  render() {
    this.mount.innerHTML = '';
    if (!this.config) return;

    const { gridSize } = this.config;

    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:100%;max-width:480px;margin:0 auto;user-select:none;';

    // Calculate cell size responsively
    const arenaW = this.mount.closest('.puzzle-mount')?.offsetWidth || this.mount.offsetWidth || 340;
    const available = Math.min(arenaW - 16, 400);
    this._cellSize = Math.floor(available / gridSize);
    const boardPx = this._cellSize * gridSize;

    // Board container (relative positioning for absolute blocks)
    const boardWrap = document.createElement('div');
    boardWrap.style.cssText = `position:relative;width:${boardPx}px;height:${boardPx}px;margin:0 auto;`;

    // Grid background
    const canvas = document.createElement('canvas');
    canvas.width = boardPx;
    canvas.height = boardPx;
    canvas.style.cssText = `position:absolute;top:0;left:0;border-radius:8px;`;
    this._drawGrid(canvas, gridSize, this._cellSize);
    boardWrap.appendChild(canvas);

    // Draw exit indicator
    const exitEl = document.createElement('div');
    const exitSide = this.config.exitSide || 'right';
    const exitRow = this.config.exitRow ?? 0;
    const cs = this._cellSize;
    if (exitSide === 'right') {
      exitEl.style.cssText = `
        position:absolute;right:-20px;top:${exitRow * cs + cs * 0.15}px;
        width:20px;height:${cs * 0.7}px;
        background:var(--color-rose,#b83232);border-radius:0 4px 4px 0;
        display:flex;align-items:center;justify-content:center;
      `;
      exitEl.innerHTML = '→';
      exitEl.style.color = '#fff';
      exitEl.style.fontSize = '12px';
      exitEl.style.fontWeight = '700';
    }
    boardWrap.appendChild(exitEl);

    // Render blocks
    this.blocks.forEach(block => {
      const el = document.createElement('div');
      const isH = block.orientation === 'h';
      const w = isH ? block.length * cs - 4 : cs - 4;
      const h = isH ? cs - 4 : block.length * cs - 4;
      el.style.cssText = `
        position:absolute;
        left:${block.col * cs + 2}px;top:${block.row * cs + 2}px;
        width:${w}px;height:${h}px;
        background:${block.isTarget ? 'var(--color-rose,#b83232)' : block.color};
        border-radius:6px;cursor:grab;
        box-shadow:0 2px 6px rgba(0,0,0,0.2);
        display:flex;align-items:center;justify-content:center;
        transition:box-shadow 0.1s;
        border:2px solid rgba(0,0,0,0.1);
      `;
      if (block.isTarget) {
        const arrow = document.createElement('div');
        arrow.style.cssText = 'color:#fff;font-size:1.2rem;font-weight:700;pointer-events:none;';
        arrow.textContent = isH ? '→' : '↓';
        el.appendChild(arrow);
      }
      el.dataset.blockId = block.id;

      // Drag events (mouse + touch)
      el.addEventListener('mousedown', (e) => this._startDrag(e, block, el));
      el.addEventListener('touchstart', (e) => this._startDrag(e, block, el), { passive: false });

      boardWrap.appendChild(el);
    });

    wrap.appendChild(boardWrap);

    // Moves counter
    const statsEl = document.createElement('div');
    statsEl.style.cssText = `
      text-align:center;margin-top:12px;font-size:0.85rem;
      color:var(--color-muted,#6b5a3e);font-family:var(--font-sans,sans-serif);
    `;
    statsEl.textContent = this.moves === 0 ? 'Slide the red block to the exit →' : `Moves: ${this.moves}`;
    wrap.appendChild(statsEl);

    if (this.solved) {
      const winEl = document.createElement('div');
      winEl.style.cssText = `
        margin-top:12px;padding:12px;border-radius:10px;text-align:center;
        background:#f0fdf4;border:1px solid #86efac;color:#166534;font-weight:600;
      `;
      winEl.textContent = `✓ Cleared in ${this.moves} moves!`;
      wrap.appendChild(winEl);
    }

    this.mount.appendChild(wrap);

    // Attach global drag listeners
    this._boardEl = boardWrap;
  }

  _drawGrid(canvas, N, cs) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'var(--color-parch)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Try inline colors (CSS vars don't work in canvas)
    ctx.fillStyle = '#f5e8c8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#d4b896';
    ctx.lineWidth = 1;
    for (let i = 0; i <= N; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cs, 0);
      ctx.lineTo(i * cs, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * cs);
      ctx.lineTo(canvas.width, i * cs);
      ctx.stroke();
    }

    // Border
    ctx.strokeStyle = '#b89878';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
  }

  _startDrag(e, block, el) {
    if (this.solved) return;
    e.preventDefault();

    const isTouch = e.type === 'touchstart';
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;

    const boardRect = this._boardEl.getBoundingClientRect();
    const startBoardX = clientX - boardRect.left;
    const startBoardY = clientY - boardRect.top;

    const cs = this._cellSize;
    const origRow = block.row;
    const origCol = block.col;

    el.style.cursor = 'grabbing';
    el.style.zIndex = '10';
    el.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';

    const onMove = (moveE) => {
      const mc = moveE.type === 'touchmove' ? moveE.touches[0].clientX : moveE.clientX;
      const mr = moveE.type === 'touchmove' ? moveE.touches[0].clientY : moveE.clientY;
      const bx = mc - boardRect.left;
      const by = mr - boardRect.top;
      const dx = bx - startBoardX;
      const dy = by - startBoardY;

      const isH = block.orientation === 'h';
      let newCol = origCol;
      let newRow = origRow;

      if (isH) {
        const rawCol = origCol + dx / cs;
        newCol = Math.round(rawCol);
        newCol = Math.max(0, Math.min(this.config.gridSize - block.length, newCol));
        // Check collisions
        newCol = this._clampH(block, newCol);
      } else {
        const rawRow = origRow + dy / cs;
        newRow = Math.round(rawRow);
        newRow = Math.max(0, Math.min(this.config.gridSize - block.length, newRow));
        newRow = this._clampV(block, newRow);
      }

      el.style.left = `${newCol * cs + 2}px`;
      el.style.top = `${newRow * cs + 2}px`;
      block._previewCol = newCol;
      block._previewRow = newRow;
    };

    const onUp = () => {
      el.style.cursor = 'grab';
      el.style.zIndex = '';
      el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';

      const nc = block._previewCol ?? block.col;
      const nr = block._previewRow ?? block.row;
      const moved = nc !== block.col || nr !== block.row;

      block.col = nc ?? block.col;
      block.row = nr ?? block.row;
      delete block._previewCol;
      delete block._previewRow;

      if (moved) {
        this.moves++;
        this.onProgress?.(this.moves);
        this._checkSolved();
      }

      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);

      this.render();
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  }

  _clampH(movingBlock, desiredCol) {
    const row = movingBlock.row;
    const len = movingBlock.length;
    const id = movingBlock.id;

    let min = 0;
    let max = this.config.gridSize - len;

    for (const b of this.blocks) {
      if (b.id === id) continue;
      if (b.orientation === 'h' && b.row === row) {
        // Same row, horizontal — check overlap in col range
        if (desiredCol < b.col) {
          max = Math.min(max, b.col - len);
        } else if (desiredCol >= b.col) {
          min = Math.max(min, b.col + b.length);
        }
      } else if (b.orientation === 'v') {
        // Vertical block at cols [b.col] and rows [b.row..b.row+b.length-1]
        if (b.row <= row && row < b.row + b.length) {
          // This vertical block is in our row
          if (b.col < movingBlock.col) {
            min = Math.max(min, b.col + 1);
          } else {
            max = Math.min(max, b.col - len);
          }
        }
      }
    }

    return Math.max(min, Math.min(max, desiredCol));
  }

  _clampV(movingBlock, desiredRow) {
    const col = movingBlock.col;
    const len = movingBlock.length;
    const id = movingBlock.id;

    let min = 0;
    let max = this.config.gridSize - len;

    for (const b of this.blocks) {
      if (b.id === id) continue;
      if (b.orientation === 'v' && b.col === col) {
        if (desiredRow < b.row) {
          max = Math.min(max, b.row - len);
        } else {
          min = Math.max(min, b.row + b.length);
        }
      } else if (b.orientation === 'h') {
        if (b.col <= col && col < b.col + b.length) {
          if (b.row < movingBlock.row) {
            min = Math.max(min, b.row + 1);
          } else {
            max = Math.min(max, b.row - len);
          }
        }
      }
    }

    return Math.max(min, Math.min(max, desiredRow));
  }

  _checkSolved() {
    const target = this.blocks.find(b => b.isTarget);
    if (!target) return;

    const { exitSide, exitRow, gridSize } = this.config;
    if (exitSide === 'right' && target.row === exitRow && target.col + target.length === gridSize) {
      this.solved = true;
      this.onSolve?.({ solved: true, moves: this.moves });
    } else if (exitSide === 'left' && target.row === exitRow && target.col === 0) {
      this.solved = true;
      this.onSolve?.({ solved: true, moves: this.moves });
    }
  }
}

export { DragSpatialEngine };
