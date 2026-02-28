/* ─────────────────────────────────────────────────────────
   DeductionEngine  ·  ES Module
   Extracted from engine-e3-deduction.html
   ─────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────
   CONFIG 0 · Easy · Grade 1-3
   2 categories × 2 items · 3 clues
───────────────────────────────────────── */
const DEDUCTION_CONFIG_EASY = {
  id:       "mystery_easy_w1",
  title:    "The Missing Morning Question",
  grade:    "1-3",
  category: "2.1",
  storyBeat: "Every morning, Budhipur’s school bell rang and a new question appeared on the board. One morning, it was gone. Two children had been near the board. One of them had been at two different spots. Chatur arrived. ‘Two suspects. Two places. One question.’ She opened her notebook.",
  hint:     "‘Read clue 2 carefully. It tells you exactly where one person was NOT. Once you mark that X, the rest follows like water downhill.’",
  winMessage: "Chatur closed her notebook. ‘Simple,’ she said, which meant she was pleased. The question was returned to the board before lunch.",

  categories: [
    {
      name: "Suspect", icon: "🧑",
      items: [
        { name: "Arjun",  icon: "👦" },
        { name: "Bela",   icon: "👧" }
      ]
    },
    {
      name: "Location", icon: "📍",
      items: [
        { name: "Schoolroom", icon: "🏫" },
        { name: "Bazaar",     icon: "🏪" }
      ]
    }
  ],

  clues: [
    { id:1, text: "The question was taken from the Schoolroom." },
    { id:2, text: "Bela was at the Bazaar when the question disappeared." },
    { id:3, text: "Only one person was in the Schoolroom that morning." }
  ],

  solution: {
    "Suspect":  "Arjun",
    "Location": "Schoolroom"
  }
};

/* ─────────────────────────────────────────
   CONFIG 1 · Medium · Grade 4-6
   3 categories × 3 items · 5 clues
───────────────────────────────────────── */
const DEDUCTION_CONFIG_MEDIUM = {
  id:       "mystery_med_w1",
  title:    "The Ferryman’s Lost Riddle",
  grade:    "4-6",
  category: "2.1",
  storyBeat: "Hari’s famous river riddle — forty years old, memorised by every child in Budhipur — was gone. Three suspects were near the river that evening. Each had been carrying something. Chatur looked at the three of them, then at the river, then at her notebook. ‘Someone here is lying,’ she said pleasantly.",
  hint:     "‘Clue 3 connects a specific object to a location. Clue 5 eliminates one person from one location. Together, they lock down one column entirely. Start there.’",
  winMessage: "Hari stared at Chatur’s notebook. ‘How?’ he said. ‘Logic,’ said Chatur. ‘And the fact that Dev doesn’t like boats.’",

  categories: [
    {
      name: "Suspect", icon: "🧑",
      items: [
        { name: "Chitra", icon: "👩" },
        { name: "Dev",    icon: "🧔" },
        { name: "Esha",   icon: "👩‍🦱" }
      ]
    },
    {
      name: "Location", icon: "📍",
      items: [
        { name: "River Bank",  icon: "🌊" },
        { name: "Ferry Boat",  icon: "⛵" },
        { name: "Old Bridge",  icon: "🌉" }
      ]
    },
    {
      name: "Object", icon: "📦",
      items: [
        { name: "Ink Pot",    icon: "🖋️" },
        { name: "Cloth Bag",  icon: "👜" },
        { name: "Wooden Box", icon: "📦" }
      ]
    }
  ],

  clues: [
    { id:1, text: "Chitra was not on the Ferry Boat." },
    { id:2, text: "The person who took the riddle used an Ink Pot." },
    { id:3, text: "The Ink Pot was found near the Old Bridge." },
    { id:4, text: "Esha was carrying the Wooden Box." },
    { id:5, text: "Dev does not know how to swim and avoids the River Bank." }
  ],

  solution: {
    "Suspect":  "Chitra",
    "Location": "Old Bridge",
    "Object":   "Ink Pot"
  }
};

/* ─────────────────────────────────────────
   CONFIG 2 · Hard · Grade 7-10
   4 categories × 4 items · 7 clues
───────────────────────────────────────── */
const DEDUCTION_CONFIG_HARD = {
  id:       "mystery_hard_w1",
  title:    "The Night Market Theft",
  grade:    "7-10",
  category: "2.1",
  storyBeat: "The Night Market’s most prized puzzle — a sequence of numbers that had stumped the town for a decade — was lifted from the vendor’s board. Four suspects. Four corners of the market. Four objects used in the taking. Chatur arrived late and entirely unbothered. ‘Seven clues,’ she said. ‘That’s generous.’",
  hint:     "‘Clue 4 is a negative chain — it eliminates one person from both a location AND an object in one step. Draw out what it implies before marking. The rest of the puzzle will contract around it.’",
  winMessage: "The vendor looked at Chatur. ‘How did you know it was the tray?’ ‘Because,’ said Chatur, ‘everyone else was carrying something they’d need to put down.’ She left before he could ask another question.",

  categories: [
    {
      name: "Suspect", icon: "🧑",
      items: [
        { name: "Farida",  icon: "👩‍🦳" },
        { name: "Gopal",   icon: "👴" },
        { name: "Hamid",   icon: "🧔" },
        { name: "Irene",   icon: "👩‍🦰" }
      ]
    },
    {
      name: "Location", icon: "📍",
      items: [
        { name: "North Stall",  icon: "🔝" },
        { name: "South Gate",   icon: "🔚" },
        { name: "Lantern Row",  icon: "🏮" },
        { name: "Water Wheel",  icon: "⚙️" }
      ]
    },
    {
      name: "Object", icon: "📦",
      items: [
        { name: "Brass Tray",    icon: "🥮" },
        { name: "Silk Pouch",    icon: "👛" },
        { name: "Wicker Basket", icon: "🧺" },
        { name: "Clay Pot",      icon: "🏺" }
      ]
    },
    {
      name: "Motive", icon: "💭",
      items: [
        { name: "Rivalry",    icon: "⚔️" },
        { name: "Curiosity",  icon: "🔎" },
        { name: "Debt",       icon: "💰" },
        { name: "Loyalty",    icon: "🤝" }
      ]
    }
  ],

  clues: [
    { id:1, text: "Farida was at the Water Wheel all evening — three witnesses confirm this." },
    { id:2, text: "The thief’s motive was Curiosity." },
    { id:3, text: "Gopal had a Silk Pouch with him, and only a Silk Pouch." },
    { id:4, text: "The person at Lantern Row was not motivated by Debt or Loyalty." },
    { id:5, text: "Irene has never visited the South Gate — she considers it unlucky." },
    { id:6, text: "The Brass Tray was used at the North Stall." },
    { id:7, text: "Hamid was seen near the South Gate shortly before midnight." }
  ],

  solution: {
    "Suspect":  "Hamid",
    "Location": "South Gate",
    "Object":   "Wicker Basket",
    "Motive":   "Curiosity"
  }
};

const ALL_CONFIGS = [DEDUCTION_CONFIG_EASY, DEDUCTION_CONFIG_MEDIUM, DEDUCTION_CONFIG_HARD];

/* ═══════════════════════════════════════════════════════
   DEDUCTION ENGINE CLASS

   mountEl must be a container element that already contains
   child elements marked with data-de attributes for the
   engine to populate.  All DOM queries are scoped to
   this.mount so multiple instances can coexist on a page.

   Required children inside mountEl  (data-de="..."):
     mysteryBrief       — category/item brief section
     clueList           — clue cards list
     gridWrapper        — deduction grid table
     accusationSelects  — accusation dropdowns
     verdictCard        — verdict display card
     verdictTitle       — verdict heading element
     verdictText        — verdict body text element
═══════════════════════════════════════════════════════ */
class DeductionEngine {
  constructor(mountEl, config) {
    this.mount  = mountEl;
    this.config = null;
    // gridState[key]  key = `${rowCatIdx}:${colCatIdx}`
    // value: 2-D array of  'blank' | 'x' | 'o'
    this.gridState    = {};
    this.onSolve      = null;
    this.onWrongGuess = null;
    if (config) this.loadConfig(config);
  }

  /* ── PRIVATE: DOM HELPER ── */
  _el(name) {
    return this.mount.querySelector(`[data-de="${name}"]`);
  }

  /* ── PUBLIC ── */
  loadConfig(cfg) {
    this.config = cfg;
    this._initState();
    this.render();
    this._updateAccusationPanel();
    const verdictCard = this._el('verdictCard');
    if (verdictCard) verdictCard.style.display = 'none';
  }

  reset() {
    this._initState();
    this._rebuildGrid();
    const verdictCard = this._el('verdictCard');
    if (verdictCard) verdictCard.style.display = 'none';
  }

  getState() {
    return {
      solved:    this._checkSolved(),
      gridState: this.gridState
    };
  }

  accuse() {
    const selects    = this.mount.querySelectorAll('.ap-select');
    const accusation = {};
    for (const s of selects) {
      accusation[s.dataset.cat] = s.value;
    }
    const sol     = this.config.solution;
    const correct = Object.keys(sol).every(k => accusation[k] === sol[k]);
    this._showVerdict(correct, accusation);
    if (correct  && this.onSolve)      this.onSolve({ accusation });
    if (!correct && this.onWrongGuess) this.onWrongGuess(accusation);
  }

  /* ── PRIVATE: STATE ── */
  _initState() {
    const cats = this.config.categories;
    this.gridState = {};
    for (let r = 1; r < cats.length; r++) {
      for (let c = 0; c < r; c++) {
        const key = `${r}:${c}`;
        this.gridState[key] = Array.from(
          { length: cats[r].items.length },
          () => Array(cats[c].items.length).fill('blank')
        );
      }
    }
  }

  /* ── PRIVATE: RENDER ── */
  render() {
    this._buildMysteryBrief();
    this._buildClueList();
    this._rebuildGrid();
  }

  _buildMysteryBrief() {
    const el = this._el('mysteryBrief');
    if (!el) return;
    el.innerHTML = '';
    for (const cat of this.config.categories) {
      const sec = document.createElement('div');
      sec.className = 'mb-section';
      sec.innerHTML = `<div class="mb-label">${cat.icon} ${cat.name}s</div>
        <div class="mb-items">${cat.items.map(it =>
          `<div class="mb-chip"><span class="chip-icon">${it.icon}</span>${it.name}</div>`
        ).join('')}</div>`;
      el.appendChild(sec);
    }
  }

  _buildClueList() {
    const el = this._el('clueList');
    if (!el) return;
    el.innerHTML = `<div class="da-label" style="margin-bottom:8px">Clues</div>`;
    for (const clue of this.config.clues) {
      const card = document.createElement('div');
      card.className = 'clue-card';
      card.innerHTML = `<div class="clue-num">${clue.id}</div>
        <div class="clue-text">${clue.text}</div>`;
      el.appendChild(card);
    }
  }

  _rebuildGrid() {
    const wrapper = this._el('gridWrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';
    const table = document.createElement('table');
    table.className = 'd-grid';

    const cats = this.config.categories;
    // rows = items of categories [1 .. N-1]
    // cols = items of categories [0 .. N-2]

    // Header rows: one per column category
    for (let ci = 0; ci < cats.length - 1; ci++) {
      const colCat = cats[ci];
      const tr = document.createElement('tr');

      if (ci === 0) {
        const blank = document.createElement('th');
        blank.className = 'th-blank';
        blank.rowSpan   = cats.length - 1;
        tr.appendChild(blank);
      }

      const catTh = document.createElement('th');
      catTh.className   = 'th-cat section-left';
      catTh.colSpan     = colCat.items.length;
      catTh.textContent = `${colCat.icon} ${colCat.name}`;
      tr.appendChild(catTh);
      table.appendChild(tr);
    }

    // Item header row
    const itemRow = document.createElement('tr');
    const blankTh = document.createElement('th');
    blankTh.className = 'th-blank';
    itemRow.appendChild(blankTh);
    for (let ci = 0; ci < cats.length - 1; ci++) {
      for (let ii = 0; ii < cats[ci].items.length; ii++) {
        const th = document.createElement('th');
        th.className = 'th-item' + (ii === 0 ? ' section-left' : '');
        const item = cats[ci].items[ii];
        th.innerHTML = `<span class="item-icon">${item.icon}</span>${item.name}`;
        itemRow.appendChild(th);
      }
    }
    table.appendChild(itemRow);

    // Data rows — one group per row-category (index 1 .. N-1)
    for (let ri = 1; ri < cats.length; ri++) {
      const rowCat = cats[ri];
      for (let rii = 0; rii < rowCat.items.length; rii++) {
        const tr = document.createElement('tr');
        if (rii === 0 && ri > 1) tr.className = 'section-row';

        const th = document.createElement('th');
        th.className = 'th-row';
        const rItem = rowCat.items[rii];
        th.innerHTML = `<span class="row-icon">${rItem.icon}</span>${rItem.name}`;
        tr.appendChild(th);

        for (let ci = 0; ci < cats.length - 1; ci++) {
          for (let cii = 0; cii < cats[ci].items.length; cii++) {
            const td = document.createElement('td');
            td.className = 'd-cell' + (cii === 0 ? ' section-left' : '');
            td.dataset.rowCat  = ri;
            td.dataset.rowItem = rii;
            td.dataset.colCat  = ci;
            td.dataset.colItem = cii;

            const key   = `${ri}:${ci}`;
            const state = this.gridState[key]?.[rii]?.[cii] || 'blank';
            this._renderCell(td, state);

            td.addEventListener('click', () => this._cycleCell(td));
            tr.appendChild(td);
          }
        }
        table.appendChild(tr);
      }
    }

    wrapper.appendChild(table);
  }

  _renderCell(td, state) {
    td.classList.remove('state-x', 'state-o');
    if (state === 'x') {
      td.classList.add('state-x');
      td.innerHTML = '<span class="cell-mark">✗</span>';
    } else if (state === 'o') {
      td.classList.add('state-o');
      td.innerHTML = '<span class="cell-mark">✓</span>';
    } else {
      td.innerHTML = '<span class="cell-mark"></span>';
    }
  }

  _cycleCell(td) {
    const ri  = parseInt(td.dataset.rowCat);
    const rii = parseInt(td.dataset.rowItem);
    const ci  = parseInt(td.dataset.colCat);
    const cii = parseInt(td.dataset.colItem);
    const key = `${ri}:${ci}`;

    const cur  = this.gridState[key][rii][cii];
    const next = cur === 'blank' ? 'x' : cur === 'x' ? 'o' : 'blank';
    this.gridState[key][rii][cii] = next;

    // Confirming (o): mark all other cells in same row+col of this sub-grid as x
    if (next === 'o') {
      const cats = this.config.categories;
      for (let c = 0; c < cats[ci].items.length; c++) {
        if (c !== cii) this.gridState[key][rii][c] = 'x';
      }
      for (let r = 0; r < cats[ri].items.length; r++) {
        if (r !== rii) this.gridState[key][r][cii] = 'x';
      }
    }

    this._rebuildGrid();
  }

  _checkSolved() {
    // Grid-state check not implemented; solved state is determined via accuse().
    return false;
  }

  _updateAccusationPanel() {
    const panel = this._el('accusationSelects');
    if (!panel) return;
    panel.innerHTML = '';
    for (const cat of this.config.categories) {
      const wrap = document.createElement('div');
      wrap.className = 'ap-select-wrap';
      const label = document.createElement('div');
      label.className   = 'ap-cat-label';
      label.textContent = `${cat.icon} ${cat.name}`;
      const sel = document.createElement('select');
      sel.className   = 'ap-select';
      sel.dataset.cat = cat.name;
      const defaultOpt = document.createElement('option');
      defaultOpt.value       = '';
      defaultOpt.textContent = `Choose ${cat.name}...`;
      sel.appendChild(defaultOpt);
      for (const item of cat.items) {
        const opt = document.createElement('option');
        opt.value       = item.name;
        opt.textContent = `${item.icon} ${item.name}`;
        sel.appendChild(opt);
      }
      wrap.appendChild(label);
      wrap.appendChild(sel);
      panel.appendChild(wrap);
    }
  }

  _showVerdict(correct, accusation) {
    const card  = this._el('verdictCard');
    const title = this._el('verdictTitle');
    const text  = this._el('verdictText');
    if (!card) return;
    card.className     = 'verdict-card ' + (correct ? 'correct' : 'wrong');
    card.style.display = 'block';

    if (correct) {
      if (title) title.textContent = '✓ Accusation Confirmed.';
      if (text)  text.textContent  = this.config.winMessage;
    } else {
      if (title) title.textContent = '✗ Wrong. Think again.';
      const sol   = this.config.solution;
      const wrong = Object.keys(sol).filter(k => accusation[k] !== sol[k]);
      if (text) text.textContent =
        `Something’s off with your ${wrong.join(' and ')}. Re-read the clues — at least one of them directly eliminates your choice.`;
      card.style.animation = 'none';
      requestAnimationFrame(() => {
        card.style.animation = 'shake .3s ease';
      });
    }
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

export { DeductionEngine, DEDUCTION_CONFIG_EASY, DEDUCTION_CONFIG_MEDIUM, DEDUCTION_CONFIG_HARD, ALL_CONFIGS };
