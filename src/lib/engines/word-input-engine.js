/**
 * E6 — WordInputEngine
 * Word Ladder puzzle: change one letter at a time from startWord to endWord.
 * Config: { mode: 'word-ladder', startWord, endWord, validPath, wordLength }
 */
class WordInputEngine {
  constructor(mountEl, config) {
    this.mount = mountEl;
    this.config = config;
    this.steps = [config.startWord.toUpperCase()];
    this.currentInput = '';
    this.solved = false;
    this.errorMsg = '';
    this.onSolve = null;
    this.onProgress = null;
    this.render();
  }

  loadConfig(cfg) {
    this.config = cfg;
    this.steps = [cfg.startWord.toUpperCase()];
    this.currentInput = '';
    this.solved = false;
    this.errorMsg = '';
    this.render();
  }

  reset() {
    this.steps = [this.config.startWord.toUpperCase()];
    this.currentInput = '';
    this.solved = false;
    this.errorMsg = '';
    this.render();
  }

  getState() {
    return {
      solved: this.solved,
      moves: this.steps.length - 1,
    };
  }

  render() {
    this.mount.innerHTML = '';
    const { startWord, endWord, wordLength } = this.config;
    const N = wordLength || startWord.length;

    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:100%;max-width:480px;margin:0 auto;font-family:var(--font-sans,sans-serif);';

    // Start → End header
    const header = document.createElement('div');
    header.style.cssText = `
      display:flex;align-items:center;justify-content:center;gap:12px;
      margin-bottom:20px;padding:12px;border-radius:10px;
      background:var(--color-parch,#f5e8c8);border:1px solid var(--color-border,#d4b896);
    `;
    const startBadge = this._wordBadge(startWord.toUpperCase(), 'var(--color-teal,#1a6b6b)', '#fff');
    const arrow = document.createElement('span');
    arrow.style.cssText = 'color:var(--color-muted,#6b5a3e);font-size:1.2rem;';
    arrow.textContent = '→';
    const endBadge = this._wordBadge(endWord.toUpperCase(), 'var(--color-jade,#3a7d44)', '#fff');
    header.appendChild(startBadge);
    header.appendChild(arrow);
    header.appendChild(endBadge);
    wrap.appendChild(header);

    // Steps so far
    const stepsList = document.createElement('div');
    stepsList.style.cssText = 'display:flex;flex-direction:column;gap:6px;margin-bottom:16px;';

    this.steps.forEach((word, i) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:8px;';

      const badge = this._wordBadge(word, i === 0 ? 'var(--color-teal,#1a6b6b)' : 'var(--color-muted,#6b5a3e)', '#fff');
      row.appendChild(badge);

      if (i > 0 && i < this.steps.length) {
        const diffEl = document.createElement('span');
        diffEl.style.cssText = 'font-size:0.8rem;color:var(--color-muted,#6b5a3e);';
        const diffs = this._diffLetters(this.steps[i - 1], word);
        diffEl.textContent = `changed: ${diffs.join(', ')}`;
        row.appendChild(diffEl);
      }

      stepsList.appendChild(row);
    });

    // Final solved step
    if (this.solved) {
      const finalRow = document.createElement('div');
      finalRow.style.cssText = 'display:flex;align-items:center;gap:8px;';
      finalRow.appendChild(this._wordBadge(endWord.toUpperCase(), 'var(--color-jade,#3a7d44)', '#fff'));
      const check = document.createElement('span');
      check.style.cssText = 'color:#166534;font-weight:700;';
      check.textContent = '✓ Reached!';
      finalRow.appendChild(check);
      stepsList.appendChild(finalRow);
    }

    wrap.appendChild(stepsList);

    // Input area
    if (!this.solved) {
      const inputWrap = document.createElement('div');
      inputWrap.style.cssText = 'display:flex;gap:8px;align-items:center;';

      const input = document.createElement('input');
      input.type = 'text';
      input.maxLength = N;
      input.value = this.currentInput;
      input.placeholder = `Enter a ${N}-letter word`;
      input.style.cssText = `
        flex:1;padding:10px 14px;border-radius:8px;font-size:1rem;
        border:2px solid var(--color-border,#d4b896);background:#fff;
        color:var(--color-ink,#1c1408);font-family:var(--font-mono,'DM Mono',monospace);
        text-transform:uppercase;letter-spacing:0.1em;outline:none;
      `;
      input.addEventListener('input', (e) => {
        this.currentInput = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
        this.errorMsg = '';
        // Update input value without full re-render
        e.target.value = this.currentInput;
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this._tryWord();
      });

      const goBtn = document.createElement('button');
      goBtn.style.cssText = `
        padding:10px 18px;border-radius:8px;border:none;cursor:pointer;font-weight:600;
        background:var(--color-teal,#1a6b6b);color:#fff;font-size:0.95rem;
        transition:opacity 0.15s;
      `;
      goBtn.textContent = 'Go';
      goBtn.addEventListener('click', () => this._tryWord());

      inputWrap.appendChild(input);
      inputWrap.appendChild(goBtn);
      wrap.appendChild(inputWrap);

      // Error
      if (this.errorMsg) {
        const errEl = document.createElement('div');
        errEl.style.cssText = `
          margin-top:8px;padding:8px 12px;border-radius:8px;font-size:0.85rem;
          background:#fef2f2;border:1px solid #fecaca;color:var(--color-rose,#b83232);
        `;
        errEl.textContent = this.errorMsg;
        wrap.appendChild(errEl);
      }

      // Progress hint: how many letters match target
      const current = this.steps[this.steps.length - 1];
      const matchCount = [...current].filter((c, i) => c === endWord.toUpperCase()[i]).length;
      const progressEl = document.createElement('div');
      progressEl.style.cssText = 'margin-top:10px;font-size:0.8rem;color:var(--color-muted,#6b5a3e);text-align:center;';
      progressEl.textContent = `${matchCount} of ${N} letters match the target`;
      wrap.appendChild(progressEl);
    }

    this.mount.appendChild(wrap);

    // Focus input
    if (!this.solved) {
      setTimeout(() => {
        const inp = wrap.querySelector('input');
        if (inp) inp.focus();
      }, 50);
    }
  }

  _tryWord() {
    const word = this.currentInput.toUpperCase();
    const { endWord, wordLength } = this.config;
    const N = wordLength || endWord.length;
    const prev = this.steps[this.steps.length - 1];

    if (word.length !== N) {
      this.errorMsg = `Word must be ${N} letters.`;
      this.render();
      return;
    }

    // Check exactly one letter different from previous
    const diffs = this._diffCount(prev, word);
    if (diffs === 0) {
      this.errorMsg = 'Same as the previous word!';
      this.render();
      return;
    }
    if (diffs > 1) {
      this.errorMsg = `Change only one letter at a time (you changed ${diffs}).`;
      this.render();
      return;
    }

    // Check not already used
    if (this.steps.includes(word)) {
      this.errorMsg = `You already used "${word}".`;
      this.render();
      return;
    }

    // Accept the word
    this.steps.push(word);
    this.currentInput = '';
    this.errorMsg = '';

    this.onProgress?.(Math.round((this.steps.length / (this.config.validPath?.length || 5)) * 100));

    // Check if reached end
    if (word === endWord.toUpperCase()) {
      this.solved = true;
      this.render();
      this.onSolve?.({ solved: true, moves: this.steps.length - 1 });
    } else {
      this.render();
    }
  }

  _diffCount(a, b) {
    let count = 0;
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if ((a[i] || '') !== (b[i] || '')) count++;
    }
    return count;
  }

  _diffLetters(a, b) {
    const diffs = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diffs.push(`pos ${i + 1}: ${a[i]}→${b[i]}`);
    }
    return diffs;
  }

  _wordBadge(word, bg, color) {
    const el = document.createElement('div');
    el.style.cssText = `
      display:inline-flex;align-items:center;justify-content:center;
      padding:8px 14px;border-radius:8px;font-weight:700;font-size:1.1rem;
      letter-spacing:0.12em;background:${bg};color:${color};
      font-family:var(--font-mono,'DM Mono',monospace);min-width:80px;text-align:center;
    `;
    el.textContent = word;
    return el;
  }
}

export { WordInputEngine };
