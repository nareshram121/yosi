/**
 * E5 — VisualPatternEngine
 * Odd-one-out / sequence completion puzzle with icons and text.
 * Config: { mode: 'odd-one-out'|'sequence', items: [{text, icon}], correctIndex, explanation }
 */
class VisualPatternEngine {
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
    };
  }

  render() {
    const { mode, items } = this.config;
    this.mount.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:100%;max-width:480px;margin:0 auto;font-family:var(--font-sans,sans-serif);';

    // Instruction
    const instr = document.createElement('div');
    instr.style.cssText = `
      font-size:0.85rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;
      color:var(--color-muted,#6b5a3e);margin-bottom:12px;font-family:var(--font-caps,'Bebas Neue',sans-serif);
    `;
    instr.textContent = mode === 'odd-one-out' ? 'Which one does not belong?' : 'What comes next?';
    wrap.appendChild(instr);

    // Items grid
    const grid = document.createElement('div');
    // Use a 2-column grid for up to 6 items
    const cols = items.length <= 4 ? 2 : Math.ceil(items.length / 2);
    grid.style.cssText = `
      display:grid;grid-template-columns:repeat(${Math.min(cols, 3)},1fr);
      gap:10px;margin-bottom:16px;
    `;

    items.forEach((item, i) => {
      const card = document.createElement('button');
      let borderColor = 'var(--color-border,#d4b896)';
      let bgColor = '#fff';
      let textColor = 'var(--color-ink,#1c1408)';

      if (this.submitted) {
        if (i === this.config.correctIndex) {
          bgColor = '#f0fdf4'; borderColor = '#22c55e'; textColor = '#166534';
        } else if (i === this.selected) {
          bgColor = '#fef2f2'; borderColor = 'var(--color-rose,#b83232)'; textColor = 'var(--color-rose,#b83232)';
        } else {
          bgColor = '#fafafa'; textColor = 'var(--color-muted,#6b5a3e)';
        }
      } else if (i === this.selected) {
        bgColor = 'var(--color-parch,#f5e8c8)'; borderColor = 'var(--color-teal,#1a6b6b)';
      }

      card.style.cssText = `
        padding:16px 8px;border-radius:10px;cursor:pointer;
        border:2px solid ${borderColor};background:${bgColor};
        color:${textColor};display:flex;flex-direction:column;
        align-items:center;gap:6px;transition:all 0.15s;
        font-family:var(--font-sans,sans-serif);
      `;

      if (item.icon) {
        const iconEl = document.createElement('div');
        iconEl.style.cssText = 'font-size:2rem;line-height:1;';
        iconEl.textContent = item.icon;
        card.appendChild(iconEl);
      }

      const textEl = document.createElement('div');
      textEl.style.cssText = 'font-size:0.8rem;font-weight:500;text-align:center;';
      textEl.textContent = item.text;
      card.appendChild(textEl);

      if (this.submitted) {
        if (i === this.config.correctIndex) {
          const badge = document.createElement('div');
          badge.style.cssText = 'font-size:0.75rem;font-weight:700;color:#166534;';
          badge.textContent = '✓';
          card.appendChild(badge);
        }
        card.disabled = true;
        card.style.cursor = 'default';
      } else {
        card.addEventListener('click', () => {
          this.selected = i;
          this.render();
        });
        card.addEventListener('mouseenter', () => {
          if (i !== this.selected) card.style.background = 'var(--color-parch,#f5e8c8)';
        });
        card.addEventListener('mouseleave', () => {
          if (i !== this.selected) card.style.background = '#fff';
        });
      }

      grid.appendChild(card);
    });

    wrap.appendChild(grid);

    // Submit button
    if (!this.submitted) {
      const submitBtn = document.createElement('button');
      submitBtn.style.cssText = `
        width:100%;padding:12px;border-radius:10px;
        background:var(--color-teal,#1a6b6b);color:#fff;font-weight:600;
        font-size:0.95rem;cursor:pointer;border:none;
        opacity:${this.selected === null ? 0.5 : 1};transition:opacity 0.15s;
      `;
      submitBtn.textContent = 'Submit';
      submitBtn.disabled = this.selected === null;
      submitBtn.addEventListener('click', () => this._submit());
      wrap.appendChild(submitBtn);
    }

    // Explanation
    if (this.submitted) {
      const isCorrect = this.selected === this.config.correctIndex;
      const expEl = document.createElement('div');
      expEl.style.cssText = `
        margin-top:14px;padding:14px;border-radius:10px;
        background:${isCorrect ? '#f0fdf4' : '#fef9ec'};
        border:1px solid ${isCorrect ? '#86efac' : 'var(--color-gold,#e8a820)'};
        font-size:0.9rem;font-family:var(--font-serif,Georgia,serif);
        font-style:italic;line-height:1.6;color:var(--color-ink,#1c1408);
      `;
      expEl.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong><br>${this.config.explanation}`;
      wrap.appendChild(expEl);
    }

    this.mount.appendChild(wrap);
  }

  _submit() {
    if (this.selected === null || this.submitted) return;
    this.submitted = true;
    const isCorrect = this.selected === this.config.correctIndex;
    this.render();
    if (isCorrect) this.onSolve?.({ solved: true });
    else this.onWrongGuess?.({ selected: this.selected });
  }
}

export { VisualPatternEngine };
