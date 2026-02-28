/* ═══════════════════════════════════════════════════════
   ConnectionsEngine — E7
   Self-contained ES module. No HTML/CSS dependencies.
   Constructor: new ConnectionsEngine(mountEl, config)

   mountEl must contain the following child elements
   resolved via mountEl.querySelector:
     #tileGrid       — grid container where tile divs are rendered
     #solvedGroups   — container where solved group cards are appended
     #winPanel       — element shown (class "show" added) on win
     #winText        — element whose textContent receives winMessage
     #submitBtn      — submit button whose .disabled is toggled
     #selCount       — status text element
     #life-0 … #life-3 — life-indicator dots (class "lost" toggled)
═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   CONFIG 0: Easy · Grade 3-4
   Concrete categories, clear connections
───────────────────────────────────────── */
const CONN_CONFIG_EASY = {
  id:       "conn_easy_budhipur_w1",
  title:    "Things of Budhipur",
  grade:    "3-4",
  category: "4.3",
  storyBeat: "Chatur was cataloguing the objects of Budhipur for the Archive. 'Everything belongs somewhere,' she said, arranging sixteen objects on the table. 'Find the four families. One object will try to fool you — it always does.'",
  hint:     "'Look for the group that surprises you. The one where you think: that can't be right. That's the group to find first — because the obvious groupings are usually correct.'",
  winMessage: "The catalogue was complete. Chatur added one note at the bottom: 'Every object knows where it belongs. The puzzle is always in the asking.'",
  groups: [
    {
      id: "g1", color: "#3a7d44",
      label: "Things that carry water",
      connection: "All are vessels that hold or move liquid",
      tiles: [
        { text: "Clay Pot",    icon: "🏺" },
        { text: "River Boat",  icon: "⛵" },
        { text: "Bamboo Pipe", icon: "🎋" },
        { text: "Rain Cloud",  icon: "🌧️" }
      ]
    },
    {
      id: "g2", color: "#2d3a8c",
      label: "Things Chatur carries",
      connection: "Found in Chatur's satchel in every story",
      tiles: [
        { text: "Notebook",  icon: "📒" },
        { text: "Ink Pen",   icon: "🖊️" },
        { text: "Magnifier", icon: "🔍" },
        { text: "String",    icon: "🧵" }
      ]
    },
    {
      id: "g3", color: "#c8720a",
      label: "Things in the Bazaar",
      connection: "Sold or found at the Budhipur market",
      tiles: [
        { text: "Saffron",    icon: "🌼" },
        { text: "Silk Roll",  icon: "🎁" },
        { text: "Brass Bell", icon: "🔔" },
        { text: "Mango",      icon: "🥭" }
      ]
    },
    {
      id: "g4", color: "#b83232",
      label: "Things with hidden messages",
      connection: "Each conceals information in Budhipur lore",
      tiles: [
        { text: "Old Map",     icon: "🗺️" },
        { text: "Carved Key",  icon: "🗝️" },
        { text: "Torn Letter", icon: "✉️" },
        { text: "Stone Seal",  icon: "💠" }
      ]
    }
  ]
};

/* ─────────────────────────────────────────
   CONFIG 1: Medium · Grade 5-6
   More abstract connections, one trap tile
───────────────────────────────────────── */
const CONN_CONFIG_MEDIUM = {
  id:       "conn_med_w1",
  title:    "Words of the Market",
  grade:    "5-6",
  category: "4.3",
  storyBeat: "The Night Market vendor dealt in words as much as numbers. Sixteen words, four hidden families. 'What they share,' said Chatur, 'is never what it first appears to be.'",
  hint:     "'One group is connected by what the words literally contain — look at the letters inside each word, not the meaning. Another group is connected by a category you won't name until you've found all four.'",
  winMessage: "The vendor nodded. 'You see the hidden structure,' he said. Chatur shrugged. 'The structure was never hidden. You just had to stop looking at the surface.'",
  groups: [
    {
      id: "g1", color: "#3a7d44",
      label: "Words containing a number",
      connection: "Each word has a number hidden inside its letters",
      tiles: [
        { text: "STONE",   icon: "🪨" },
        { text: "EIGHT",   icon: "8️⃣" },
        { text: "OFTEN",   icon: "⏱️" },
        { text: "FORTUNE", icon: "🌟" }
      ]
    },
    {
      id: "g2", color: "#2d3a8c",
      label: "Ways to move water",
      connection: "Verbs describing how water travels",
      tiles: [
        { text: "FLOW",    icon: "💧" },
        { text: "TRICKLE", icon: "🌊" },
        { text: "SEEP",    icon: "🔩" },
        { text: "CASCADE", icon: "🌈" }
      ]
    },
    {
      id: "g3", color: "#c8720a",
      label: "___ market (compound words)",
      connection: "Each can follow the word 'market'",
      tiles: [
        { text: "SUPER", icon: "🏪" },
        { text: "STOCK", icon: "📈" },
        { text: "NIGHT", icon: "🌙" },
        { text: "FLEA",  icon: "🐜" }
      ]
    },
    {
      id: "g4", color: "#b83232",
      label: "Things Chatur would call 'obvious'",
      connection: "Things a detective finds trivially easy to deduce",
      tiles: [
        { text: "MOTIVE",  icon: "🎯" },
        { text: "ALIBI",   icon: "🧾" },
        { text: "CLUE",    icon: "🔎" },
        { text: "SUSPECT", icon: "👤" }
      ]
    }
  ]
};

/* ─────────────────────────────────────────
   CONFIG 2: Hard · Grade 7-9
   Highly abstract, traps, lateral thinking
───────────────────────────────────────── */
const CONN_CONFIG_HARD = {
  id:       "conn_hard_w1",
  title:    "The Archive's Four Families",
  grade:    "7-9",
  category: "4.3",
  storyBeat: "The Archive wall had sixteen symbols, four families — but the archivist had scrambled them on purpose. 'The families are invisible until you name the rule,' said Chatur, studying the wall. 'And the rules are not what you expect.'",
  hint:     "'One group is connected by something outside the words entirely — think about the shape of what they represent, not the words themselves. Start there, because it feels least likely.'",
  winMessage: "The archivist stared. 'How?' 'The fourth group,' said Chatur. 'Once I saw what they shared that had nothing to do with their meaning, the others followed like shadows.'",
  groups: [
    {
      id: "g1", color: "#3a7d44",
      label: "Things that go anticlockwise",
      connection: "All rotate or move counter-clockwise by convention or nature",
      tiles: [
        { text: "Drain",                 icon: "🌀" },
        { text: "Hurricane",             icon: "🌪️" },
        { text: "Sundial shadow (S hem)", icon: "☀️" },
        { text: "Retrograde planet",      icon: "🪐" }
      ]
    },
    {
      id: "g2", color: "#2d3a8c",
      label: "Types of logical reasoning",
      connection: "Formal modes of inference in logic",
      tiles: [
        { text: "Deduction", icon: "🔽" },
        { text: "Induction", icon: "🔼" },
        { text: "Abduction", icon: "↔️" },
        { text: "Analogy",   icon: "🔁" }
      ]
    },
    {
      id: "g3", color: "#c8720a",
      label: "Chatur ___ (can follow her name)",
      connection: "Each word can complete 'Chatur ___' as a phrase",
      tiles: [
        { text: "Deduced",   icon: "💡" },
        { text: "Arrived",   icon: "🚶" },
        { text: "Noted",     icon: "✍️" },
        { text: "Disagreed", icon: "🤨" }
      ]
    },
    {
      id: "g4", color: "#b83232",
      label: "Words that are their own antonym",
      connection: "Auto-antonyms — words that mean their opposite too",
      tiles: [
        { text: "Sanction",  icon: "⚖️" },
        { text: "Cleave",    icon: "🪓" },
        { text: "Oversight", icon: "👁️" },
        { text: "Left",      icon: "👈" }
      ]
    }
  ]
};

const ALL_CONFIGS  = [CONN_CONFIG_EASY, CONN_CONFIG_MEDIUM, CONN_CONFIG_HARD];
const GRADE_COLORS = { '3-4': '#3a7d44', '5-6': '#2d3a8c', '7-9': '#b83232' };

/* ═══════════════════════════════════════════════════════
   CONNECTIONS ENGINE CLASS
═══════════════════════════════════════════════════════ */
class ConnectionsEngine {
  /**
   * @param {Element} mountEl  - Root element containing all engine child nodes
   * @param {object}  config   - Puzzle config (e.g. CONN_CONFIG_EASY)
   *
   * Required child elements resolved via mountEl.querySelector:
   *   #tileGrid       — grid container where tile divs are rendered
   *   #solvedGroups   — container where solved group cards are appended
   *   #winPanel       — element that receives class "show" on win
   *   #winText        — element whose textContent receives winMessage
   *   #submitBtn      — submit button whose .disabled is toggled
   *   #selCount       — status text element
   *   #life-0 … #life-3 — life-indicator dots (class "lost" toggled)
   */
  constructor(mountEl, config) {
    this.mount       = mountEl;
    this.config      = null;
    this.tiles       = [];       // shuffled flat list of all tiles
    this.selected    = new Set();
    this.foundGroups = [];
    this.lives       = 4;
    this.onSolve     = null;     // callback(state) — fired on full solve
    this.onMistake   = null;     // callback({attempt, oneAway}) — fired on wrong guess
    if (config) this.loadConfig(config);
  }

  /* Private helper: querySelector scoped to mountEl */
  _q(selector) {
    return this.mount.querySelector(selector);
  }

  /* ─── PUBLIC API ─────────────────────────────────── */

  /** Load (or reload) a config and reset the board. */
  loadConfig(cfg) {
    this.config = cfg;
    this.reset();
  }

  /** Reset the current config to its initial state. */
  reset() {
    this.foundGroups = [];
    this.lives       = 4;
    this.selected.clear();
    this._buildTiles();
    this._shuffle();
    this._render();
    this._updateLives();
    this._updateSelCount();
    const solvedGroups = this._q('#solvedGroups');
    if (solvedGroups) solvedGroups.innerHTML = '';
    const winPanel = this._q('#winPanel');
    if (winPanel) winPanel.classList.remove('show');
  }

  /** Re-shuffle the unsolved tiles. */
  shuffle() {
    this._shuffle();
    this._renderTiles();
  }

  /** Deselect all currently selected tiles. */
  deselectAll() {
    this.selected.clear();
    this._renderTiles();
    this._updateSelCount();
  }

  /** Submit the current 4-tile selection for evaluation. */
  submit() {
    if (this.selected.size !== 4) return;
    const selectedIds = [...this.selected];
    const result      = this._checkGroup(selectedIds);
    if (result.correct) {
      this._revealGroup(result.group);
    } else {
      this.lives--;
      this._updateLives();
      this._flashWrong(selectedIds, result.oneAway);
      if (this.onMistake) this.onMistake({ attempt: selectedIds, oneAway: result.oneAway });
      if (this.lives <= 0) setTimeout(() => this._gameOver(), 800);
    }
  }

  /** Return a snapshot of current game state. */
  getState() {
    return {
      solved: this.foundGroups.length === this.config.groups.length,
      lives:  this.lives,
      found:  this.foundGroups.map(g => g.id)
    };
  }

  /* ─── PRIVATE METHODS ────────────────────────────── */

  _buildTiles() {
    this.tiles = [];
    for (const group of this.config.groups) {
      for (const tile of group.tiles) {
        this.tiles.push({
          ...tile,
          groupId: group.id,
          id: `${group.id}_${tile.text}`
        });
      }
    }
  }

  _shuffle() {
    // Fisher-Yates — only shuffles unsolved tiles
    const remaining = this.tiles.filter(t =>
      !this.foundGroups.find(g => g.id === t.groupId)
    );
    for (let i = remaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const a = this.tiles.indexOf(remaining[i]);
      const b = this.tiles.indexOf(remaining[j]);
      [this.tiles[a], this.tiles[b]] = [this.tiles[b], this.tiles[a]];
    }
  }

  _render() {
    this._renderTiles();
  }

  _renderTiles() {
    const grid = this._q('#tileGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const foundIds = new Set(this.foundGroups.map(g => g.id));
    const visible  = this.tiles.filter(t => !foundIds.has(t.groupId));

    for (const tile of visible) {
      const el      = document.createElement('div');
      el.className  = 'tile';
      el.dataset.id = tile.id;
      el.innerHTML  = `<span class="tile-icon">${tile.icon}</span><span class="tile-text">${tile.text}</span>`;
      if (this.selected.has(tile.id)) el.classList.add('selected');
      el.addEventListener('click', () => this._toggleTile(tile.id, el));
      grid.appendChild(el);
    }

    const submitBtn = this._q('#submitBtn');
    if (submitBtn) submitBtn.disabled = this.selected.size !== 4;
  }

  _toggleTile(id, el) {
    if (this.lives <= 0) return;
    if (this.selected.has(id)) {
      this.selected.delete(id);
      el.classList.remove('selected');
    } else {
      if (this.selected.size >= 4) return;
      this.selected.add(id);
      el.classList.add('selected');
    }
    this._updateSelCount();
    const submitBtn = this._q('#submitBtn');
    if (submitBtn) submitBtn.disabled = this.selected.size !== 4;
  }

  _checkGroup(ids) {
    const groups = this.config.groups;
    for (const group of groups) {
      if (this.foundGroups.find(g => g.id === group.id)) continue;
      const groupTileIds = group.tiles.map(t => `${group.id}_${t.text}`);
      if (ids.every(id => groupTileIds.includes(id))) return { correct: true, group };
    }
    // Check one-away
    for (const group of groups) {
      if (this.foundGroups.find(g => g.id === group.id)) continue;
      const groupTileIds = group.tiles.map(t => `${group.id}_${t.text}`);
      if (ids.filter(id => groupTileIds.includes(id)).length === 3) {
        return { correct: false, oneAway: true };
      }
    }
    return { correct: false, oneAway: false };
  }

  _revealGroup(group) {
    this.foundGroups.push(group);
    this.selected.clear();

    const container = this._q('#solvedGroups');
    if (container) {
      const card            = document.createElement('div');
      card.className        = 'solved-group';
      card.style.background = group.color;
      card.innerHTML = `
        <div class="sg-label">
          <span>${group.label.toUpperCase()}</span>
          <span>✓</span>
        </div>
        <div class="sg-items">
          ${group.tiles.map(t => `<div class="sg-item">${t.icon} ${t.text}</div>`).join('')}
        </div>
        <div class="sg-connection">${group.connection}</div>`;
      container.appendChild(card);
    }

    this._renderTiles();
    this._updateSelCount();

    if (this.foundGroups.length === this.config.groups.length) {
      setTimeout(() => this._triggerWin(), 400);
    }
  }

  _flashWrong(ids, oneAway) {
    const tiles = this.mount.querySelectorAll('.tile.selected');
    tiles.forEach(t => {
      t.classList.add('wrong');
      setTimeout(() => t.classList.remove('wrong'), 400);
    });
    if (oneAway) setTimeout(() => this._showOneAway(), 450);
    this.selected.clear();
    setTimeout(() => {
      this._renderTiles();
      this._updateSelCount();
    }, 450);
  }

  _showOneAway() {
    const msg = this._q('#selCount');
    if (!msg) return;
    const orig           = msg.textContent;
    msg.style.color      = '#c8720a';
    msg.style.fontStyle  = 'italic';
    msg.textContent      = 'One away! Try again.';
    setTimeout(() => {
      msg.style.color     = '';
      msg.style.fontStyle = '';
      msg.textContent     = orig;
      this._updateSelCount();
    }, 2000);
  }

  _gameOver() {
    const msg = this._q('#selCount');
    if (!msg) return;
    msg.style.color = 'var(--rose)';
    msg.textContent = 'Out of lives. Reset to try again.';
  }

  _triggerWin() {
    const panel   = this._q('#winPanel');
    const winText = this._q('#winText');
    if (winText) winText.textContent = this.config.winMessage;
    if (panel) {
      panel.classList.add('show');
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    if (this.onSolve) this.onSolve(this.getState());
  }

  _updateLives() {
    for (let i = 0; i < 4; i++) {
      const dot = this._q(`#life-${i}`);
      if (dot) dot.classList.toggle('lost', i >= this.lives);
    }
  }

  _updateSelCount() {
    const n  = this.selected.size;
    const el = this._q('#selCount');
    if (!el) return;
    if (n === 0)    el.textContent = 'Select 4 tiles, then submit';
    else if (n < 4) el.textContent = `${n} selected — choose ${4 - n} more`;
    else            el.textContent = '4 selected — ready to submit!';
  }
}

export { ConnectionsEngine, ALL_CONFIGS, CONN_CONFIG_EASY, CONN_CONFIG_MEDIUM, CONN_CONFIG_HARD, GRADE_COLORS };
