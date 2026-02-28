/**
 * E8 — LateralChoiceEngine
 * Multiple-choice lateral thinking / number sequence puzzle.
 * Config: { prompt, options: [{text, icon?}], correctIndex, explanation, storyBeat, hint, winMessage }
 */
class LateralChoiceEngine {
  constructor(mountEl, config) {
    this.mount = mountEl;
    this.config = config;
    this.selected = null;
    this.submitted = false;
    this.onSolve = null;
    this.onWrongGuess = null;
    this.render();
  }

  loadConfig(cfg) {
    this.config = cfg;
    this.selected = null;
    this.submitted = false;
    this.render();
  }

  reset() {
    this.selected = null;
    this.submitted = false;
    this.render();
  }

  getState() {
    return {
      solved: this.submitted && this.selected === this.config.correctIndex,
      selected: this.selected,
    };
  }

  render() {
    const { prompt, options } = this.config;
    this.mount.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:100%;max-width:480px;margin:0 auto;font-family:var(--font-sans,sans-serif);';

    // Prompt card
    const promptEl = document.createElement('div');
    promptEl.style.cssText = `
      background:var(--color-parch,#f5e8c8);
      border:1px solid var(--color-border,#d4b896);
      border-radius:12px;padding:20px;margin-bottom:16px;
      font-size:1.1rem;font-weight:600;color:var(--color-ink,#1c1408);
      font-family:var(--font-serif,'Crimson Pro',Georgia,serif);
      line-height:1.5;
    `;
    promptEl.textContent = prompt;
    wrap.appendChild(promptEl);

    // Options
    const optWrap = document.createElement('div');
    optWrap.style.cssText = 'display:flex;flex-direction:column;gap:10px;';

    options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.dataset.idx = i;
      btn.style.cssText = `
        display:flex;align-items:center;gap:12px;
        padding:14px 16px;border-radius:10px;cursor:pointer;
        text-align:left;width:100%;font-size:0.95rem;
        transition:all 0.15s;border:2px solid var(--color-border,#d4b896);
        background:#fff;color:var(--color-ink,#1c1408);
        font-family:var(--font-sans,sans-serif);
      `;

      if (this.submitted) {
        if (i === this.config.correctIndex) {
          btn.style.background = '#f0fdf4';
          btn.style.borderColor = '#22c55e';
          btn.style.color = '#166534';
        } else if (i === this.selected && i !== this.config.correctIndex) {
          btn.style.background = '#fef2f2';
          btn.style.borderColor = 'var(--color-rose,#b83232)';
          btn.style.color = 'var(--color-rose,#b83232)';
        }
      } else if (i === this.selected) {
        btn.style.background = 'var(--color-parch,#f5e8c8)';
        btn.style.borderColor = 'var(--color-teal,#1a6b6b)';
      }

      if (opt.icon) {
        const iconEl = document.createElement('span');
        iconEl.style.cssText = 'font-size:1.4rem;flex-shrink:0;';
        iconEl.textContent = opt.icon;
        btn.appendChild(iconEl);
      }

      const letter = document.createElement('span');
      letter.style.cssText = `
        width:24px;height:24px;border-radius:50%;flex-shrink:0;
        display:flex;align-items:center;justify-content:center;
        font-size:0.75rem;font-weight:700;
        background:var(--color-border,#d4b896);color:var(--color-ink,#1c1408);
      `;
      letter.textContent = String.fromCharCode(65 + i);
      btn.insertBefore(letter, btn.firstChild);

      const text = document.createElement('span');
      text.textContent = opt.text;
      btn.appendChild(text);

      if (this.submitted) {
        if (i === this.config.correctIndex) {
          const checkEl = document.createElement('span');
          checkEl.style.cssText = 'margin-left:auto;font-size:1.1rem;';
          checkEl.textContent = '✓';
          btn.appendChild(checkEl);
        } else if (i === this.selected) {
          const xEl = document.createElement('span');
          xEl.style.cssText = 'margin-left:auto;font-size:1.1rem;';
          xEl.textContent = '✗';
          btn.appendChild(xEl);
        }
        btn.disabled = true;
        btn.style.cursor = 'default';
      } else {
        btn.addEventListener('click', () => this._select(i));
        btn.addEventListener('mouseenter', () => {
          if (i !== this.selected) btn.style.background = 'var(--color-parch,#f5e8c8)';
        });
        btn.addEventListener('mouseleave', () => {
          if (i !== this.selected) btn.style.background = '#fff';
        });
      }

      optWrap.appendChild(btn);
    });

    wrap.appendChild(optWrap);

    // Submit button
    if (!this.submitted) {
      const submitBtn = document.createElement('button');
      submitBtn.style.cssText = `
        margin-top:16px;width:100%;padding:12px;border-radius:10px;
        background:var(--color-teal,#1a6b6b);color:#fff;font-weight:600;
        font-size:0.95rem;cursor:pointer;border:none;
        opacity:${this.selected === null ? 0.5 : 1};
        transition:opacity 0.15s;
      `;
      submitBtn.textContent = 'Submit answer';
      submitBtn.disabled = this.selected === null;
      submitBtn.addEventListener('click', () => this._submit());
      this.submitBtn = submitBtn;
      wrap.appendChild(submitBtn);
    }

    // Explanation (after submit)
    if (this.submitted) {
      const isCorrect = this.selected === this.config.correctIndex;
      const expEl = document.createElement('div');
      expEl.style.cssText = `
        margin-top:16px;padding:14px 16px;border-radius:10px;
        background:${isCorrect ? '#f0fdf4' : '#fef9ec'};
        border:1px solid ${isCorrect ? '#86efac' : 'var(--color-gold,#e8a820)'};
        color:var(--color-ink,#1c1408);font-size:0.9rem;
        font-family:var(--font-serif,Georgia,serif);font-style:italic;
        line-height:1.6;
      `;
      expEl.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong><br>${this.config.explanation}`;
      wrap.appendChild(expEl);
    }

    this.mount.appendChild(wrap);
  }

  _select(idx) {
    if (this.submitted) return;
    this.selected = idx;
    this.render();
  }

  _submit() {
    if (this.selected === null || this.submitted) return;
    this.submitted = true;
    const isCorrect = this.selected === this.config.correctIndex;
    this.render();

    if (isCorrect) {
      this.onSolve?.({ solved: true, selected: this.selected });
    } else {
      this.onWrongGuess?.({ selected: this.selected });
    }
  }
}

export { LateralChoiceEngine };
