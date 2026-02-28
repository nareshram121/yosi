import type { PuzzleEntry } from '@/types/puzzle';

// ============================================================
// Month 1 — March 2026 — Budhipur Daily Puzzles
// Narrated by Chatur, the brilliant puzzle-solving girl
// All 8 engine types: deduction, flow, connections, sudoku,
//                     visual, lateral, word, drag
// ============================================================

export const MONTH_1_PUZZLES: PuzzleEntry[] = [

  // ──────────────────────────────────────────────────────────
  // Day 1 · March 1, 2026 (Sunday) · DEDUCTION · Week 1
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-01",
    puzzle_date: "2026-03-01",
    engine_type: "deduction",
    day_of_week: 0,
    week_number: 1,
    grade_band: "1-3",
    config: {
      id: "deduction_20260301",
      title: "Mystery: The Missing Saffron",
      storyBeat: "The first morning of spring blew warm off the river, carrying the scent of jasmine and something missing. Old Mehta the spice-seller arrived at his stall to find his finest saffron gone — the threads he had been saving for the Vernal Festival. Chatur set her clay cup of chai on the step and narrowed her eyes. 'Someone was here before dawn,' she said. 'Let us ask the lane.'",
      hint: "Chatur whispers: 'One clue names who was *not* there. Another names where the saffron was *last* seen. Put them together.'",
      winMessage: "The saffron was found tucked beneath a jute sack at the Bazaar stall — and young Ramu confessed he had borrowed it meaning to return it before sunrise. Chatur smiled. 'Borrowed, yes. But the lane remembers everything.'",
      grade: "1-3",
      category: "2.1",
      categories: [
        {
          name: "Suspect",
          icon: "🧑",
          items: [
            { name: "Ramu", icon: "👦" },
            { name: "Priya", icon: "👧" }
          ]
        },
        {
          name: "Location",
          icon: "📍",
          items: [
            { name: "Bazaar", icon: "🏪" },
            { name: "River Ghat", icon: "⛵" }
          ]
        }
      ],
      clues: [
        { id: 1, text: "Priya was seen at the River Ghat fetching water well before the stall opened — she never came near the Bazaar." },
        { id: 2, text: "The missing saffron jar was last spotted at the Bazaar stall, not at any riverside location." }
      ],
      solution: { "Suspect": "Ramu", "Location": "Bazaar" }
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 2 · March 2, 2026 (Monday) · FLOW · Week 1
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-02",
    puzzle_date: "2026-03-02",
    engine_type: "flow",
    day_of_week: 1,
    week_number: 1,
    grade_band: "2-3",
    config: {
      id: "flow_20260302",
      title: "Threads of the Morning Market",
      storyBeat: "Chatur loved the way the Bazaar woke up — bolt by bolt, stall by stall, each color unfurling like a flag claiming its corner of the lane. The cloth-merchants laid out their wares in careful order: crimson beside blue, gold beside green, each roll needing to find its matching bale across the crowded square. 'Everything in Budhipur,' Chatur said to Hari, 'finds its way home if you let it follow the path.'",
      hint: "Chatur says: 'Start from a corner and see which color has the clearest road — then let the others follow.'",
      winMessage: "Every bolt of cloth found its matching bale, and the lane shimmered like a festival banner. The merchants clapped and Chatur bowed, already thinking about breakfast.",
      grade: "2-3",
      category: "1.2",
      grid: 4,
      pairs: [
        { id: "R", color: "#e05050", start: [0, 0], end: [3, 3] },
        { id: "B", color: "#4a90d9", start: [0, 3], end: [3, 0] },
        { id: "G", color: "#3a7d44", start: [0, 1], end: [2, 3] },
        { id: "Y", color: "#e8a820", start: [1, 0], end: [3, 2] }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 3 · March 3, 2026 (Tuesday) · VISUAL · Week 1
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-03",
    puzzle_date: "2026-03-03",
    engine_type: "visual",
    day_of_week: 2,
    week_number: 1,
    grade_band: "1-3",
    config: {
      id: "visual_20260303",
      title: "The Odd One Out at Mehta's Stall",
      storyBeat: "Old Mehta had arranged four things in a row on his counter — the way he always did when he wanted Chatur to notice something. Chatur stopped, looked at the four items, and felt that pleasant click in her mind that meant a pattern had resolved itself. Three of these things belonged together. One did not.",
      hint: "Chatur says: 'Think about what each thing is used for at the spice stall. One of them has never been near a pot of cooking.'",
      winMessage: "Chatur pointed at the lotus leaf without hesitation. 'You buy this at the Ghat,' she told Mehta, 'not at the Spice Quarter.' Mehta laughed and kept it as decoration anyway.",
      grade: "1-3",
      category: "4.3",
      mode: "odd-one-out",
      items: [
        { text: "Turmeric", icon: "🟡" },
        { text: "Cardamom", icon: "🫘" },
        { text: "Saffron", icon: "🌸" },
        { text: "Lotus Leaf", icon: "🪷" }
      ],
      correctIndex: 3,
      explanation: "Turmeric, Cardamom, and Saffron are all spices sold at Mehta's stall in Budhipur's Spice Quarter. The Lotus Leaf is a river plant — beautiful, but not a spice. It belongs at the Ghat, not on the stall."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 4 · March 4, 2026 (Wednesday) · CONNECTIONS · Week 1
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-04",
    puzzle_date: "2026-03-04",
    engine_type: "connections",
    day_of_week: 3,
    week_number: 1,
    grade_band: "3-5",
    config: {
      id: "connections_20260304",
      title: "What the Bazaar Knows",
      storyBeat: "Chatur sat atop a sack of lentils at the edge of the Bazaar and watched the world sort itself. 'Everything belongs somewhere,' she told Hari. 'A mango is not a medicine, though it heals; a boat is not a basket, though it carries.' Hari rolled his eyes. 'You see puzzles in everything.' 'Yes,' said Chatur, 'and that is exactly the point.'",
      hint: "Chatur says: 'Think about what each thing *does* in Budhipur, not just what it *is*. One group will surprise you.'",
      winMessage: "Hari stared at the sorted piles with new eyes. 'I see it now,' he said. Chatur nodded. 'The Bazaar has been teaching us all along. We just needed to listen.'",
      grade: "3-5",
      category: "4.3",
      groups: [
        {
          id: "g1",
          color: "#3a7d44",
          label: "Things sold at the spice stalls",
          connection: "All are spices traded in Budhipur's Spice Quarter",
          tiles: [
            { text: "Saffron", icon: "🌸" },
            { text: "Turmeric", icon: "🟡" },
            { text: "Cardamom", icon: "🫘" },
            { text: "Cumin", icon: "🌿" }
          ]
        },
        {
          id: "g2",
          color: "#4a90d9",
          label: "Things that move on the river",
          connection: "All travel along Budhipur's great river",
          tiles: [
            { text: "Ferry", icon: "⛵" },
            { text: "Log Raft", icon: "🪵" },
            { text: "Coracle", icon: "🛶" },
            { text: "Lotus Boat", icon: "🪷" }
          ]
        },
        {
          id: "g3",
          color: "#e8a820",
          label: "Things kept in the Old Archive",
          connection: "All are stored in the Archivist's care",
          tiles: [
            { text: "Scroll", icon: "📜" },
            { text: "Wax Seal", icon: "🔴" },
            { text: "Copper Plate", icon: "🥉" },
            { text: "Reed Pen", icon: "✒️" }
          ]
        },
        {
          id: "g4",
          color: "#c060c0",
          label: "Things Chatur keeps in her satchel",
          connection: "All are found in Chatur's famous battered satchel",
          tiles: [
            { text: "Chalk Stick", icon: "🖍️" },
            { text: "String Loop", icon: "🪢" },
            { text: "Pebble", icon: "🪨" },
            { text: "Folded Map", icon: "🗺️" }
          ]
        }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 5 · March 5, 2026 (Thursday) · LATERAL · Week 1
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-05",
    puzzle_date: "2026-03-05",
    engine_type: "lateral",
    day_of_week: 4,
    week_number: 1,
    grade_band: "2-4",
    config: {
      id: "lateral_20260305",
      title: "Chatur's River Riddle",
      storyBeat: "Hari was feeling confident. He had been practising riddles all week, and he had one ready for Chatur. He cleared his throat importantly. Chatur did not put down her chai. She looked at him with the calm, steady gaze she reserved for things that were about to become obvious.",
      hint: "Chatur says: 'What is the one thing that grows when you share it, instead of shrinking?'",
      winMessage: "The merchant sells knowledge — recipes, remedies, farming wisdom, navigation by stars. The more he teaches, the more he knows. 'That is true of all the best things,' said Chatur, and finished her chai.",
      grade: "2-4",
      category: "2.3",
      prompt: "A merchant says: 'The more I sell, the more I have left.' What does this merchant sell?",
      options: [
        { text: "Saffron — it multiplies in cooking", icon: "🌸" },
        { text: "Knowledge — it grows when you share it", icon: "📚" },
        { text: "River water — the river never empties", icon: "🌊" },
        { text: "Festival stories from the Bazaar", icon: "📖" }
      ],
      correctIndex: 1,
      explanation: "Unlike physical goods, knowledge multiplies when shared. The more the merchant teaches — recipes, trade secrets, navigation wisdom — the more he learns in return. Saffron and river water are distractors; only knowledge truly grows the more you give it away."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 6 · March 6, 2026 (Friday) · SUDOKU · Week 1
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-06",
    puzzle_date: "2026-03-06",
    engine_type: "sudoku",
    day_of_week: 5,
    week_number: 1,
    grade_band: "2-3",
    config: {
      id: "sudoku_20260306",
      title: "The Archivist's Counting Squares",
      storyBeat: "Every Friday the Archivist tallied his shelves — four kinds of scrolls, four rows of cedar shelving, four columns of reed baskets. He had a system, a sacred one: no number repeated in any row, column, or quadrant. When young Chatur found his tally-sheet half-finished on the reading table, she sat down quietly and completed it for him. He found her there an hour later, perfectly satisfied.",
      hint: "Chatur says: 'Each row, each column, each square of four must hold every number exactly once. Begin with what is given and let the rest follow.'",
      winMessage: "The Archivist examined the completed grid and found not one error. He added a small star in the corner, his highest form of praise. Chatur accepted it with a modest nod and went back to reading.",
      grade: "2-3",
      category: "2.4",
      size: 4,
      digits: [1, 2, 3, 4],
      givens: [1, 0, 0, 4, 3, 0, 0, 2, 2, 0, 0, 3, 4, 0, 0, 1],
      solution: [1, 2, 3, 4, 3, 4, 1, 2, 2, 1, 4, 3, 4, 3, 2, 1],
      regions: [[0, 1, 4, 5], [2, 3, 6, 7], [8, 9, 12, 13], [10, 11, 14, 15]]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 7 · March 7, 2026 (Saturday) · WORD · Week 1
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-07",
    puzzle_date: "2026-03-07",
    engine_type: "word",
    day_of_week: 6,
    week_number: 1,
    grade_band: "3-5",
    config: {
      id: "word_20260307",
      title: "The Lamp-Lighter's Word Walk",
      storyBeat: "The lamp-lighter of Budhipur had a peculiar hobby. Each evening as he lit his lamps, he changed words — one letter at a time — until he had walked from one meaning to another. 'LAMP to SALE in three steps,' he said to Chatur one Saturday, holding out a folded piece of paper. Chatur unfolded it, read it, folded it back, and recited the path from memory.",
      hint: "Chatur says: 'The first step changes the last letter. The second changes the first letter. The third changes one more. Trust the sound of each word as it wants to become the next.'",
      winMessage: "LAMP → LAME → SAME → SALE. The lamp-lighter clapped. 'How did you see it so fast?' Chatur handed back the paper. 'I listened to how the word wanted to change,' she said.",
      grade: "3-5",
      category: "3.1",
      mode: "word-ladder",
      startWord: "LAMP",
      endWord: "SALE",
      validPath: ["LAME", "SAME"],
      wordLength: 4
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 8 · March 8, 2026 (Sunday) · SUDOKU · Week 2
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-08",
    puzzle_date: "2026-03-08",
    engine_type: "sudoku",
    day_of_week: 0,
    week_number: 2,
    grade_band: "2-4",
    config: {
      id: "sudoku_20260308",
      title: "The Merchant's Ledger Squares",
      storyBeat: "Merchant Vishnu kept his accounts in a grid — four goods across, four seasons down, never repeating a tally in any row or column. His apprentice had spilled ink on the ledger just as Sunday service bells rang, and Vishnu despaired. Chatur passed by the open window, glanced at the smudged numbers, and had it reconstructed before the bells finished their nine rings.",
      hint: "Chatur says: 'Look at each row and column for what is missing. The boxes of four are your second guide.'",
      winMessage: "Merchant Vishnu checked every number twice, then three times, then hired Chatur as a part-time auditor on the spot. She declined. She had more interesting things to do.",
      grade: "2-4",
      category: "2.4",
      size: 4,
      digits: [1, 2, 3, 4],
      givens: [0, 2, 0, 4, 0, 0, 1, 0, 0, 1, 0, 0, 4, 0, 2, 0],
      solution: [1, 2, 3, 4, 3, 4, 1, 2, 2, 1, 4, 3, 4, 3, 2, 1],
      regions: [[0, 1, 4, 5], [2, 3, 6, 7], [8, 9, 12, 13], [10, 11, 14, 15]]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 9 · March 9, 2026 (Monday) · FLOW · Week 2
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-09",
    puzzle_date: "2026-03-09",
    engine_type: "flow",
    day_of_week: 1,
    week_number: 2,
    grade_band: "4-6",
    config: {
      id: "flow_20260309",
      title: "The Lamp-Lighter's Routes",
      storyBeat: "Each evening before dusk, the lamp-lighter of Budhipur walked every lane to light the oil lamps. He had a strict rule: start at the lamp-store and end at each post, never backtracking, never leaving a lane dark. Chatur shadowed him one Monday evening with a piece of chalk, mapping his five routes on the courtyard flagstones to see how the paths could be drawn without a single crossing.",
      hint: "Chatur says: 'On a five-by-five grid the paths feel tight, but every cell must glow. The corners tend to help you begin.'",
      winMessage: "Every lamp blazed that evening, and not a single path had crossed another. The lamp-lighter tipped his cap to Chatur. She had already moved on, the chalk still warm in her fist.",
      grade: "4-6",
      category: "1.2",
      grid: 5,
      pairs: [
        { id: "R", color: "#e05050", start: [0, 0], end: [4, 4] },
        { id: "B", color: "#4a90d9", start: [0, 4], end: [4, 0] },
        { id: "G", color: "#3a7d44", start: [0, 2], end: [3, 2] },
        { id: "Y", color: "#e8a820", start: [1, 1], end: [4, 2] },
        { id: "P", color: "#9b59b6", start: [2, 0], end: [2, 4] }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 10 · March 10, 2026 (Tuesday) · DRAG · Week 2
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-10",
    puzzle_date: "2026-03-10",
    engine_type: "drag",
    day_of_week: 2,
    week_number: 2,
    grade_band: "2-4",
    config: {
      id: "drag_20260310",
      title: "Clear the Bazaar Lane",
      storyBeat: "The Festival cart — bright red, carrying Budhipur's ceremonial offerings — needed to reach the lane's exit before sundown. But a stall-owner had parked his cart of blue clay jars directly in the path. There was just enough room to manoeuvre, if you thought carefully about which cart moved where. Chatur arrived, looked at the lane for three seconds, and pointed.",
      hint: "Chatur says: 'The blue cart can only move one way. Move it far enough, and the red cart will have a clear road to the exit on the right.'",
      winMessage: "The red cart rolled free and reached the exit with minutes to spare. The stall-owner watched with impressed annoyance. 'You didn't even touch anything,' he said. 'I just showed you where to touch,' said Chatur.",
      grade: "2-4",
      category: "1.1",
      gridSize: 4,
      exitRow: 1,
      exitSide: "right",
      blocks: [
        { id: "T", color: "#e05050", row: 1, col: 0, length: 2, orientation: "h", isTarget: true },
        { id: "A", color: "#4a90d9", row: 0, col: 2, length: 2, orientation: "v" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 11 · March 11, 2026 (Wednesday) · CONNECTIONS · Week 2
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-11",
    puzzle_date: "2026-03-11",
    engine_type: "connections",
    day_of_week: 3,
    week_number: 2,
    grade_band: "4-6",
    config: {
      id: "connections_20260311",
      title: "Trades of Chatur's Lane",
      storyBeat: "Chatur's lane was short — barely forty steps end to end — but it held a whole economy. She could walk it blindfolded and name every trade by sound and smell: the tap of the cobbler's hammer, the scratch of the scribe's pen, the bright scent of the dyer's vat, the hiss of the weaver's shuttle. 'Sixteen things,' she told Hari one Wednesday. 'Sort them by who uses what, and you'll understand the whole lane.'",
      hint: "Chatur says: 'Think about the *craft*, not the material. A needle serves the tailor; thread also — but so does the weaver. Watch for the traps.'",
      winMessage: "Hari sorted every item perfectly — except he almost put 'Needle' with the cobbler. Chatur waited. He caught himself. 'Well done,' she said. 'Almost is still almost.'",
      grade: "4-6",
      category: "4.3",
      groups: [
        {
          id: "g1",
          color: "#3a7d44",
          label: "Tools of the scribe's trade",
          connection: "All are used by the scribe on Chatur's Lane",
          tiles: [
            { text: "Reed Pen", icon: "✒️" },
            { text: "Inkpot", icon: "🖋️" },
            { text: "Wax Stick", icon: "🕯️" },
            { text: "Parchment", icon: "📜" }
          ]
        },
        {
          id: "g2",
          color: "#4a90d9",
          label: "Tools of the dyer's craft",
          connection: "All are used by the dyer to colour cloth in Budhipur",
          tiles: [
            { text: "Indigo Cake", icon: "🟦" },
            { text: "Mordant Pot", icon: "🫙" },
            { text: "Drying Hook", icon: "🪝" },
            { text: "Teak Paddle", icon: "🏏" }
          ]
        },
        {
          id: "g3",
          color: "#e8a820",
          label: "Tools of the cobbler's workshop",
          connection: "All are found at the cobbler's bench on the lane",
          tiles: [
            { text: "Awl", icon: "🔧" },
            { text: "Leather Strip", icon: "🟫" },
            { text: "Wooden Last", icon: "🪵" },
            { text: "Cobbler's Wax", icon: "⬛" }
          ]
        },
        {
          id: "g4",
          color: "#c060c0",
          label: "Things the weaver passes through the loom",
          connection: "All travel through the weaver's loom to make cloth",
          tiles: [
            { text: "Warp Thread", icon: "🧵" },
            { text: "Weft Yarn", icon: "🪢" },
            { text: "Shuttle", icon: "🚀" },
            { text: "Heddle Rod", icon: "📏" }
          ]
        }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 12 · March 12, 2026 (Thursday) · VISUAL · Week 2
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-12",
    puzzle_date: "2026-03-12",
    engine_type: "visual",
    day_of_week: 4,
    week_number: 2,
    grade_band: "2-4",
    config: {
      id: "visual_20260312",
      title: "What Doesn't Belong on the River?",
      storyBeat: "The schoolmaster had a lesson every Thursday that he called River Knowledge. He would write four things on the board and ask the children to find the one that did not belong. Chatur always finished first. She said it was because she had spent so many mornings watching the river that she knew exactly what lived there and what did not.",
      hint: "Chatur says: 'Three of these four things travel on water. The fourth tells you what time it is.'",
      winMessage: "Chatur pointed at the Water Clock without hesitation. 'It uses water,' she told the schoolmaster, 'but it does not travel on it. The river carries boats. The clock stays still.' The schoolmaster wrote her answer on the board in large letters.",
      grade: "2-4",
      category: "4.3",
      mode: "odd-one-out",
      items: [
        { text: "Coracle", icon: "🛶" },
        { text: "Barge", icon: "⛴️" },
        { text: "Punt", icon: "🚣" },
        { text: "Water Clock", icon: "⏳" }
      ],
      correctIndex: 3,
      explanation: "A Coracle, Barge, and Punt are all boats that travel on Budhipur's great river. A Water Clock measures time using dripping water — it lives in the Archive or the observatory, not on the current."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 13 · March 13, 2026 (Friday) · SUDOKU · Week 2
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-13",
    puzzle_date: "2026-03-13",
    engine_type: "sudoku",
    day_of_week: 5,
    week_number: 2,
    grade_band: "2-4",
    config: {
      id: "sudoku_20260313",
      title: "Seeds in the Planting Square",
      storyBeat: "The school garden had four beds arranged in a square, and the gardener-teacher had a rule: plant each of the four seeds — neem, tulsi, jasmine, marigold — exactly once in every row and column of beds. The children labelled the seeds one through four, then promptly mixed them up. Chatur unscrambled the planting chart before the gardener even noticed the error.",
      hint: "Chatur says: 'Two numbers are already in the right place. Let each box of four show you which two are missing.'",
      winMessage: "The garden grew exactly as planned, and every bed bloomed with its appointed flower. The gardener never knew there had been a muddle. Chatur thought that was also correct.",
      grade: "2-4",
      category: "2.4",
      size: 4,
      digits: [1, 2, 3, 4],
      givens: [2, 0, 0, 3, 4, 0, 0, 1, 0, 2, 3, 0, 0, 4, 1, 0],
      solution: [2, 1, 4, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 4, 1, 2],
      regions: [[0, 1, 4, 5], [2, 3, 6, 7], [8, 9, 12, 13], [10, 11, 14, 15]]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 14 · March 14, 2026 (Saturday) · WORD · Week 2
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-14",
    puzzle_date: "2026-03-14",
    engine_type: "word",
    day_of_week: 6,
    week_number: 2,
    grade_band: "4-6",
    config: {
      id: "word_20260314",
      title: "The Archivist's Four-Step Path",
      storyBeat: "The Archivist had a game he played with words when the Archive was quiet. He would find a path from one meaning to another, changing only one letter at a time, never resting at a word that did not exist. 'COLD to MORE in three steps,' he told Chatur on a Saturday afternoon. She counted the steps on her fingers — not because she needed to, but to show she was being careful.",
      hint: "Chatur says: 'The path goes: change a letter in the middle, then change a letter at the end, then change the first letter. Listen to what the word is becoming.'",
      winMessage: "COLD → CORD → CORE → MORE. The Archivist nodded approvingly. 'You did not guess,' he said. 'No,' said Chatur. 'I followed.'",
      grade: "4-6",
      category: "3.1",
      mode: "word-ladder",
      startWord: "COLD",
      endWord: "MORE",
      validPath: ["CORD", "CORE"],
      wordLength: 4
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 15 · March 15, 2026 (Sunday) · DEDUCTION · Week 3
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-15",
    puzzle_date: "2026-03-15",
    engine_type: "deduction",
    day_of_week: 0,
    week_number: 3,
    grade_band: "4-6",
    config: {
      id: "deduction_20260315",
      title: "Mystery: The Stolen Festival Drum",
      storyBeat: "Three days before the Vernal Festival, the great ceremonial drum — the Dhol of Dhruv — went missing from the music-keeper's locked room. Without it, the procession could not begin. Three suspects had keys; three possible rooms in the Festival Hall held the right size hiding spot. Chatur asked to see the visitor's log, took one long look, and said: 'I know exactly where to find it.'",
      hint: "Chatur says: 'Cross out each suspect from every location they could not have visited. The last cell standing is your answer.'",
      winMessage: "The drum was found wrapped in a shawl in the Costume Room, moved there by the Costume-Keeper, who feared it would be dirtied by the paint-pots next door. She had meant to leave a note. The drum played at dawn and the whole city danced. The Costume-Keeper was forgiven.",
      grade: "4-6",
      category: "2.1",
      categories: [
        {
          name: "Suspect",
          icon: "🧑",
          items: [
            { name: "Music-Keeper", icon: "🎵" },
            { name: "Costume-Keeper", icon: "👘" },
            { name: "Gate-Warden", icon: "🚪" }
          ]
        },
        {
          name: "Room",
          icon: "🏛️",
          items: [
            { name: "Costume Room", icon: "👗" },
            { name: "Lamp Store", icon: "🪔" },
            { name: "Roof Terrace", icon: "🏠" }
          ]
        }
      ],
      clues: [
        { id: 1, text: "The Music-Keeper's own room was locked from outside all night — the lock-smith confirms this — so the Music-Keeper could not have moved the drum elsewhere." },
        { id: 2, text: "The Gate-Warden was stationed at the main gate from sunset to sunrise and never once entered the building interior." },
        { id: 3, text: "The drum is too heavy to carry up the external staircase to the Roof Terrace — that location is impossible for any single person." }
      ],
      solution: { "Suspect": "Costume-Keeper", "Room": "Costume Room" }
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 16 · March 16, 2026 (Monday) · FLOW · Week 3
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-16",
    puzzle_date: "2026-03-16",
    engine_type: "flow",
    day_of_week: 1,
    week_number: 3,
    grade_band: "4-6",
    config: {
      id: "flow_20260316",
      title: "Messenger Birds and Their Roosts",
      storyBeat: "The Archive kept six messenger pigeons, each banded with a different colour, each flying a dedicated route between Budhipur's quarters. The bird-keeper's map showed where each pigeon was released and where it must land, the routes threading through the city's airways without crossing. Chatur said the sky was simply a grid you couldn't see, and she traced all six routes without lifting her chalk.",
      hint: "Chatur says: 'On a six-by-six sky, the wingtips must never touch. Let the bird farthest from home fly first.'",
      winMessage: "Every pigeon found its roost before the evening bell. The bird-keeper called it a miracle. Chatur called it geometry.",
      grade: "4-6",
      category: "1.2",
      grid: 6,
      pairs: [
        { id: "R", color: "#e05050", start: [0, 0], end: [5, 5] },
        { id: "B", color: "#4a90d9", start: [0, 5], end: [5, 0] },
        { id: "G", color: "#3a7d44", start: [0, 2], end: [4, 3] },
        { id: "Y", color: "#e8a820", start: [1, 0], end: [5, 3] },
        { id: "P", color: "#9b59b6", start: [2, 5], end: [3, 1] },
        { id: "O", color: "#e8803a", start: [1, 3], end: [4, 0] }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 17 · March 17, 2026 (Tuesday) · LATERAL · Week 3
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-17",
    puzzle_date: "2026-03-17",
    engine_type: "lateral",
    day_of_week: 2,
    week_number: 3,
    grade_band: "3-6",
    config: {
      id: "lateral_20260317",
      title: "Chatur's Shortcut Problem",
      storyBeat: "On Tuesday mornings, the schoolchildren raced to be first at the gate. One girl walked to school in twenty minutes. One day she decided to run — and she ran twice as fast as she walked. Hari bet Chatur that nobody could work out how long the run took without a water clock. Chatur had the answer before Hari finished explaining the problem.",
      hint: "Chatur says: 'If you travel twice as fast, how does your journey time change? Speed and time always move in opposite directions.'",
      winMessage: "Ten minutes. Speed doubles, time halves. Chatur said: 'Simple. Speed and time are always trading places — they are two sides of the same coin, and the distance between school and home never changes.' Hari paid his bet of a mango.",
      grade: "3-6",
      category: "2.3",
      prompt: "A child walks to school in 20 minutes. One day she runs twice as fast as she walks. How long does running take?",
      options: [
        { text: "10 minutes", icon: "⏱️" },
        { text: "20 minutes", icon: "⏰" },
        { text: "40 minutes", icon: "🕐" },
        { text: "15 minutes", icon: "⚡" }
      ],
      correctIndex: 0,
      explanation: "If the child walks at speed W and takes 20 minutes, then at speed 2W (twice as fast), the time is 20 ÷ 2 = 10 minutes. When speed doubles, time halves — because distance stays constant. Chatur solved this before Hari finished explaining it."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 18 · March 18, 2026 (Wednesday) · CONNECTIONS · Week 3
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-18",
    puzzle_date: "2026-03-18",
    engine_type: "connections",
    day_of_week: 3,
    week_number: 3,
    grade_band: "5-7",
    config: {
      id: "connections_20260318",
      title: "The Archivist's Vocabulary",
      storyBeat: "The Archivist believed that every word in the city had a secret twin — a word that sounded friendly but belonged to a completely different family. 'Language is a Connections puzzle,' he told Chatur, handing her a list of sixteen words from the Archive's oldest lexicon. 'Sort them as I would, and I will show you the room with no lock.'",
      hint: "Chatur says: 'The Archivist is testing your knowledge of what things *are used for*, not what they are made of. One group is entirely metaphorical.'",
      winMessage: "Chatur sorted the sixteen words without hesitation, except for one moment — she paused over 'Silver Needle' before placing it correctly with the physicians. The Archivist showed her the room with no lock. It was full of more puzzles.",
      grade: "5-7",
      category: "4.3",
      groups: [
        {
          id: "g1",
          color: "#3a7d44",
          label: "Things used to measure in Budhipur",
          connection: "All are measuring instruments or units in the city",
          tiles: [
            { text: "Cubit Rod", icon: "📏" },
            { text: "Balance Stone", icon: "⚖️" },
            { text: "Water Clock", icon: "⏳" },
            { text: "Shadow Pole", icon: "🪧" }
          ]
        },
        {
          id: "g2",
          color: "#4a90d9",
          label: "Things a physician carries",
          connection: "All are found in a Budhipur physician's bag",
          tiles: [
            { text: "Silver Needle", icon: "🪡" },
            { text: "Neem Paste", icon: "🟢" },
            { text: "Copper Cup", icon: "🥤" },
            { text: "Dried Ginger", icon: "🫚" }
          ]
        },
        {
          id: "g3",
          color: "#e8a820",
          label: "Words for kinds of silence in Budhipur",
          connection: "All are types of silence the city recognises and names",
          tiles: [
            { text: "Archive Quiet", icon: "🤫" },
            { text: "Midday Hush", icon: "☀️" },
            { text: "River Lull", icon: "🌊" },
            { text: "Festival Pause", icon: "🎉" }
          ]
        },
        {
          id: "g4",
          color: "#c060c0",
          label: "Things that mark a boundary in the city",
          connection: "All are used to mark where one quarter of Budhipur ends and another begins",
          tiles: [
            { text: "Painted Stone", icon: "🟠" },
            { text: "Neem Post", icon: "🌳" },
            { text: "Iron Chain", icon: "⛓️" },
            { text: "Oil Lamp Row", icon: "🪔" }
          ]
        }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 19 · March 19, 2026 (Thursday) · DRAG · Week 3
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-19",
    puzzle_date: "2026-03-19",
    engine_type: "drag",
    day_of_week: 4,
    week_number: 3,
    grade_band: "4-6",
    config: {
      id: "drag_20260319",
      title: "The Festival Corridor",
      storyBeat: "The Festival procession's lead cart — painted red with marigold trim — was blocked in a stone corridor near the Silk Quarter. Two heavy supply carts had been parked across the exit: one carrying blue silk bales, one carrying green spice boxes. Both could be shifted, but only in the direction their runners allowed. Chatur mapped the moves in her mind before anyone had finished explaining the problem.",
      hint: "Chatur says: 'Both blocking carts can move upward along the corridor. Move each one up far enough, and the red cart will find its path to the right.'",
      winMessage: "The procession cart rolled free into the Silk Quarter lane to great cheering. The supply cart owners shook their heads in admiration. Chatur was already three lanes ahead, looking for the next bottleneck.",
      grade: "4-6",
      category: "1.1",
      gridSize: 5,
      exitRow: 2,
      exitSide: "right",
      blocks: [
        { id: "T", color: "#e05050", row: 2, col: 0, length: 2, orientation: "h", isTarget: true },
        { id: "A", color: "#4a90d9", row: 1, col: 2, length: 2, orientation: "v" },
        { id: "B", color: "#3a7d44", row: 1, col: 3, length: 2, orientation: "v" },
        { id: "C", color: "#9b59b6", row: 4, col: 0, length: 2, orientation: "h" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 20 · March 20, 2026 (Friday) · SUDOKU · Week 3
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-20",
    puzzle_date: "2026-03-20",
    engine_type: "sudoku",
    day_of_week: 5,
    week_number: 3,
    grade_band: "4-6",
    config: {
      id: "sudoku_20260320",
      title: "The School's Seating Puzzle",
      storyBeat: "The School of Questions had a new master who insisted that no two students from the same village sit in the same row, column, or quadrant of the four-seat classroom. The villages were coded one through four, and the master's seating chart had been partially completed when a monsoon gust blew it half off the board. Chatur reconstructed it from the remaining numbers before the first bell rang.",
      hint: "Chatur says: 'Fewer given numbers means you must use the grid's own logic harder. Trust each row and column to tell the truth.'",
      winMessage: "Every student from every village was properly seated, and the master's new system worked beautifully for a whole week before the students started swapping without telling him. Chatur did not report this. She liked disorder in small doses.",
      grade: "4-6",
      category: "2.4",
      size: 4,
      digits: [1, 2, 3, 4],
      givens: [0, 1, 0, 0, 0, 3, 0, 1, 1, 0, 0, 4, 0, 0, 1, 0],
      solution: [2, 1, 4, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 4, 1, 2],
      regions: [[0, 1, 4, 5], [2, 3, 6, 7], [8, 9, 12, 13], [10, 11, 14, 15]]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 21 · March 21, 2026 (Saturday) · LATERAL · Week 3
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-21",
    puzzle_date: "2026-03-21",
    engine_type: "lateral",
    day_of_week: 6,
    week_number: 3,
    grade_band: "3-6",
    config: {
      id: "lateral_20260321",
      title: "Hari's Tricky Family Question",
      storyBeat: "Hari had been reading a book of logic puzzles from the Archive, and he had found one that he was absolutely certain would stump Chatur. He read it aloud with maximum drama. Chatur had answered it before he finished the sentence. Hari said that was cheating. Chatur said that knowing the answer quickly was the whole point.",
      hint: "Chatur says: 'Read the question very carefully. Who is the one brother that all three sisters share?'",
      winMessage: "Hari has zero brothers. Each of his three sisters has exactly one brother — and that brother is Hari himself. Hari stared at the answer for a long time. Chatur was very patient about it. Eventually he said: 'Oh.' She said: 'Yes.'",
      grade: "3-6",
      category: "2.3",
      prompt: "Hari has 3 sisters. Each sister has 1 brother. How many brothers does Hari have?",
      options: [
        { text: "3 brothers", icon: "3️⃣" },
        { text: "0 brothers", icon: "0️⃣" },
        { text: "1 brother", icon: "1️⃣" },
        { text: "Cannot be determined", icon: "❓" }
      ],
      correctIndex: 1,
      explanation: "Each of Hari's three sisters has exactly one brother — and that brother is Hari himself. So Hari has zero brothers. The question is designed to make you count wrongly. Chatur said: 'The question already gave you the answer. You just had to trust it.'"
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 22 · March 22, 2026 (Sunday) · DEDUCTION · Week 4
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-22",
    puzzle_date: "2026-03-22",
    engine_type: "deduction",
    day_of_week: 0,
    week_number: 4,
    grade_band: "7-10",
    config: {
      id: "deduction_20260322",
      title: "Mystery: The Night of Four Accusations",
      storyBeat: "On the night of the festival's grand finale, four things went missing from four different corners of Budhipur: a copper lamp from the Ghat, the Archivist's best seal from the Archive, a bolt of silk from the Silk Quarter, and the headmaster's bell from the School. Four suspects had been seen moving through the city that night. Chatur sat in the dark of Hari's rooftop and worked through it methodically, the festival fireworks painting her face in colours as she thought.",
      hint: "Chatur says: 'This one requires you to track four suspects across four stolen items. Build a grid in your mind — cross out what cannot be, and the four truths will remain.'",
      winMessage: "All four culprits were found, all four items returned before dawn. None of them had meant harm — the festival had simply loosened everyone's sense of boundaries. Chatur declared the whole affair the most interesting night of the year, and went home to sleep for fourteen hours.",
      grade: "7-10",
      category: "2.1",
      categories: [
        {
          name: "Suspect",
          icon: "🧑",
          items: [
            { name: "Hari", icon: "👦" },
            { name: "Nandan", icon: "👨" },
            { name: "Lakshmi", icon: "👩" },
            { name: "Scholar Anita", icon: "👩‍🎓" }
          ]
        },
        {
          name: "Stolen Item",
          icon: "📦",
          items: [
            { name: "Copper Lamp", icon: "🪔" },
            { name: "Archivist's Seal", icon: "🔴" },
            { name: "Bolt of Silk", icon: "🧣" },
            { name: "Headmaster's Bell", icon: "🔔" }
          ]
        }
      ],
      clues: [
        { id: 1, text: "Hari cannot read the Archivist's old script, so he would not have known which seal was valuable — the seal was not taken by Hari." },
        { id: 2, text: "Nandan is a cloth trader and has an eye for quality silk — witnesses saw him lingering near the Silk Quarter stalls that evening." },
        { id: 3, text: "Lakshmi needed light at the fish-stall that ran past midnight; she was seen carrying something lamp-shaped toward the Ghat area." },
        { id: 4, text: "Scholar Anita had argued with the headmaster that morning about the school's bell schedule, and was overheard saying she wished it would 'simply disappear'." },
        { id: 5, text: "The Archivist's seal requires knowledge of where it is kept — only a regular Archive visitor would know its location." }
      ],
      solution: {
        "Suspect": "Scholar Anita",
        "Stolen Item": "Archivist's Seal"
      }
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 23 · March 23, 2026 (Monday) · FLOW · Week 4
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-23",
    puzzle_date: "2026-03-23",
    engine_type: "flow",
    day_of_week: 1,
    week_number: 4,
    grade_band: "7-9",
    config: {
      id: "flow_20260323",
      title: "The Cartographer's Proof",
      storyBeat: "The old cartographer of Budhipur had drawn the city's secret water-veins — underground channels that fed every well in every quarter. His final map showed six veins, each starting at the river and ending at a different well, each carving its own path through the earth without crossing another. He left it uncoloured on his death-bed. Chatur finished it before the city council arrived to collect it.",
      hint: "Chatur says: 'Underground, there is no up or sideways — only which way is wet. Fill every cell, and let no channel cross another. The hardest route is the one you must plan last of all.'",
      winMessage: "The council framed the completed map and hung it in the Archive. The cartographer's daughter, seeing the coloured veins, began to weep — not from grief, she said, but from recognition. It was exactly how her father would have done it.",
      grade: "7-9",
      category: "1.2",
      grid: 6,
      pairs: [
        { id: "R", color: "#e05050", start: [0, 0], end: [5, 2] },
        { id: "B", color: "#4a90d9", start: [0, 5], end: [5, 3] },
        { id: "G", color: "#3a7d44", start: [1, 0], end: [4, 5] },
        { id: "Y", color: "#e8a820", start: [0, 3], end: [5, 0] },
        { id: "P", color: "#9b59b6", start: [2, 1], end: [3, 4] },
        { id: "O", color: "#e8803a", start: [0, 2], end: [5, 5] }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 24 · March 24, 2026 (Tuesday) · VISUAL · Week 4
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-24",
    puzzle_date: "2026-03-24",
    engine_type: "visual",
    day_of_week: 2,
    week_number: 4,
    grade_band: "2-5",
    config: {
      id: "visual_20260324",
      title: "What Doesn't Belong on the Offering Plate?",
      storyBeat: "The festival puja was three hours away, and the temple helper had set four things on the offering plate by mistake. Chatur passed the temple doorway, glanced at the plate, and said one word quietly to herself. The temple helper asked what she had said. 'One of these,' said Chatur, 'does not belong.'",
      hint: "Chatur says: 'Three of these four things are placed on the offering plate during the festival ritual. The fourth belongs in a different kind of exchange entirely.'",
      winMessage: "Chatur pointed at the copper coin. 'That belongs in the merchant's purse,' she said. 'The offering plate takes flowers, incense, and colour — not currency.' The temple helper moved the coin quickly, as though it had always known it was in the wrong place.",
      grade: "2-5",
      category: "4.3",
      mode: "odd-one-out",
      items: [
        { text: "Marigold", icon: "🌼" },
        { text: "Agarbatti", icon: "🕯️" },
        { text: "Kumkum", icon: "🔴" },
        { text: "Copper Coin", icon: "🪙" }
      ],
      correctIndex: 3,
      explanation: "Marigold, Agarbatti (incense sticks), and Kumkum (red powder) are all traditionally placed on a puja thali during Budhipur's festival rituals. A Copper Coin is currency — it belongs in a merchant's purse, not on the offering plate."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 25 · March 25, 2026 (Wednesday) · CONNECTIONS · Week 4
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-25",
    puzzle_date: "2026-03-25",
    engine_type: "connections",
    day_of_week: 3,
    week_number: 4,
    grade_band: "6-9",
    config: {
      id: "connections_20260325",
      title: "Things the City Keeps Secret",
      storyBeat: "The Archivist told Chatur once that Budhipur kept its truths the way a mango keeps its stone: protected, central, unseen from the outside, but the source of everything that grows. 'The deepest connections,' he said, 'are the ones that look like nothing at all.' He gave her sixteen words from the city's oldest guild-records and told her to find the four secret families. She was quiet for a very long time.",
      hint: "Chatur says: 'Do not trust your first instinct on this one. The word that looks most alone belongs to the hardest group. The word that looks most obvious is a trap.'",
      winMessage: "Chatur placed the last tile and looked up. The Archivist was asleep in his chair. She covered him with the Archive's oldest shawl and let herself out. Some puzzles solve themselves into silence.",
      grade: "6-9",
      category: "4.3",
      groups: [
        {
          id: "g1",
          color: "#3a7d44",
          label: "Ancient guilds of Budhipur",
          connection: "All are names of the city's oldest professional guilds from the founding records",
          tiles: [
            { text: "The Weighers", icon: "⚖️" },
            { text: "The Flamekeepers", icon: "🔥" },
            { text: "The Seedmen", icon: "🌱" },
            { text: "The Bridge-Walkers", icon: "🌉" }
          ]
        },
        {
          id: "g2",
          color: "#4a90d9",
          label: "Hidden rooms in the Old Archive",
          connection: "All are secret rooms the Archivist has shown only to Chatur",
          tiles: [
            { text: "The Doubt Room", icon: "❓" },
            { text: "The Listening Hall", icon: "👂" },
            { text: "The Smell Vault", icon: "👃" },
            { text: "The Forgetting Chamber", icon: "🌫️" }
          ]
        },
        {
          id: "g3",
          color: "#e8a820",
          label: "Things Budhipur does at exactly noon",
          connection: "All are rituals or events the whole city performs at midday",
          tiles: [
            { text: "Bell-Silence", icon: "🔕" },
            { text: "Shadow-Read", icon: "🌑" },
            { text: "Water-Pour", icon: "💧" },
            { text: "Dust-Sweep", icon: "🧹" }
          ]
        },
        {
          id: "g4",
          color: "#c060c0",
          label: "Words Chatur has never spoken aloud",
          connection: "All are words Chatur carries in her notebook but never says",
          tiles: [
            { text: "Loneliness", icon: "🫥" },
            { text: "Enough", icon: "✋" },
            { text: "Home", icon: "🏠" },
            { text: "Finished", icon: "🏁" }
          ]
        }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 26 · March 26, 2026 (Thursday) · DRAG · Week 4
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-26",
    puzzle_date: "2026-03-26",
    engine_type: "drag",
    day_of_week: 4,
    week_number: 4,
    grade_band: "6-9",
    config: {
      id: "drag_20260326",
      title: "The Bazaar's Grand Bottleneck",
      storyBeat: "The main festival cart was trapped in the widest alley of the Bazaar, the six-lane passage that merchants called the Grand Corridor. Three supply carts had parked in a row across it — a blue one, a green one, and a purple one. Two horizontal barricades had been erected above them by mistake, blocking each supply cart from moving upward. Chatur stared at the corridor for a full minute. Then she smiled.",
      hint: "Chatur says: 'The three carts blocking the path cannot move upward — the barricades prevent it. They must go downward. Move each one down far enough, and the festival cart will have its road.'",
      winMessage: "Three carts moved down, and the festival cart rolled free through the Grand Corridor to enormous cheering. The merchants argued afterward about who had thought of the solution first. None of them had. Chatur had already gone home.",
      grade: "6-9",
      category: "1.1",
      gridSize: 6,
      exitRow: 2,
      exitSide: "right",
      blocks: [
        { id: "T", color: "#e05050", row: 2, col: 0, length: 2, orientation: "h", isTarget: true },
        { id: "A", color: "#4a90d9", row: 1, col: 2, length: 2, orientation: "v" },
        { id: "B", color: "#3a7d44", row: 1, col: 3, length: 2, orientation: "v" },
        { id: "C", color: "#9b59b6", row: 1, col: 4, length: 2, orientation: "v" },
        { id: "D", color: "#e8a820", row: 0, col: 1, length: 2, orientation: "h" },
        { id: "E", color: "#c060c0", row: 0, col: 3, length: 2, orientation: "h" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 27 · March 27, 2026 (Friday) · SUDOKU · Week 4
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-27",
    puzzle_date: "2026-03-27",
    engine_type: "sudoku",
    day_of_week: 5,
    week_number: 4,
    grade_band: "5-8",
    config: {
      id: "sudoku_20260327",
      title: "The Star-Chart of the River Observatory",
      storyBeat: "Budhipur's river observatory tracked six stars above the six bends of the great river. The astronomer had mapped them into a six-by-six grid of sky-squares, each numbered, each unique in its row and column and banded region. When the monsoon clouds erased half the chart one Friday, Chatur climbed the observatory steps, studied the remaining numbers in the dim lamplight, and filled in what the clouds had taken.",
      hint: "Chatur says: 'The six-by-six grid has more breathing room but demands more patience. Start where the numbers cluster most densely — that corner will unlock the rest.'",
      winMessage: "By the time the astronomer returned from his dinner, the chart was complete and Chatur was reading his star-notes with evident interest. He asked how she had done it. She said: 'The stars do not lie in their columns. Neither do numbers.'",
      grade: "5-8",
      category: "2.4",
      size: 6,
      digits: [1, 2, 3, 4, 5, 6],
      givens: [1, 0, 3, 0, 5, 0, 0, 5, 0, 1, 0, 3, 2, 0, 0, 5, 0, 4, 0, 6, 0, 2, 0, 1, 3, 0, 2, 0, 1, 0, 0, 1, 0, 3, 0, 2],
      solution: [1, 2, 3, 4, 5, 6, 4, 5, 6, 1, 2, 3, 2, 3, 1, 5, 6, 4, 5, 6, 4, 2, 3, 1, 3, 4, 2, 6, 1, 5, 6, 1, 5, 3, 4, 2],
      regions: [
        [0, 1, 2, 6, 7, 8],
        [3, 4, 5, 9, 10, 11],
        [12, 13, 14, 18, 19, 20],
        [15, 16, 17, 21, 22, 23],
        [24, 25, 26, 30, 31, 32],
        [27, 28, 29, 33, 34, 35]
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 28 · March 28, 2026 (Saturday) · WORD · Week 4
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-28",
    puzzle_date: "2026-03-28",
    engine_type: "word",
    day_of_week: 6,
    week_number: 4,
    grade_band: "5-8",
    config: {
      id: "word_20260328",
      title: "From Fire to Bale",
      storyBeat: "The cloth-merchant's son had a challenge for Chatur on the last Saturday before the Festival: walk a word from FIRE to BALE, one letter at a time, through four careful steps. The merchant's son had been trying for three days. Chatur solved it in the time it took him to read the challenge aloud. She wrote the path on the back of his hand with chalk, which he considered unusual but satisfying.",
      hint: "Chatur says: 'Start by changing the first letter. Then change the second. Then the first again. Then the third. Each step must land on a real word — listen for when the word clicks into place.'",
      winMessage: "FIRE → HIRE → HARE → BARE → BALE. The merchant's son read the path slowly, checking each word. 'They're all real,' he said, surprised. Chatur said: 'They were always real. You just had to find the path between them.'",
      grade: "5-8",
      category: "3.1",
      mode: "word-ladder",
      startWord: "FIRE",
      endWord: "BALE",
      validPath: ["HIRE", "HARE", "BARE"],
      wordLength: 4
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 29 · March 29, 2026 (Sunday) · DEDUCTION · Week 5
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-29",
    puzzle_date: "2026-03-29",
    engine_type: "deduction",
    day_of_week: 0,
    week_number: 5,
    grade_band: "7-10",
    config: {
      id: "deduction_20260329",
      title: "Mystery: The Five Missing Tokens of the Bazaar Council",
      storyBeat: "The Bazaar Council used five brass tokens — each stamped with a quarter's symbol — to open the city's great locked gate on festival mornings. The night before the closing ceremony, all five tokens vanished. Five councillors, five quarters of the city, five possible hiding places. Chatur was roused from sleep at midnight. She arrived with her satchel and her chalk, and did not go home until sunrise.",
      hint: "Chatur says: 'Match each councillor to the quarter they secretly favour, then match the quarter to where they would hide something familiar. Four clues eliminate, the fifth confirms.'",
      winMessage: "By dawn all five tokens were recovered and the gate opened exactly on time. The Council offered Chatur a seat on the next gathering. She declined. 'I work better,' she said, 'from outside the room.'",
      grade: "7-10",
      category: "2.1",
      categories: [
        {
          name: "Councillor",
          icon: "👤",
          items: [
            { name: "Head Councillor Devi", icon: "👩‍⚖️" },
            { name: "Councillor Basu", icon: "🧔" },
            { name: "Councillor Rani", icon: "👸" },
            { name: "Councillor Mohan", icon: "🧑‍🌾" }
          ]
        },
        {
          name: "Hiding Place",
          icon: "🗺️",
          items: [
            { name: "River Ghat Steps", icon: "🪜" },
            { name: "Archive Roof", icon: "🏛️" },
            { name: "School Bell Tower", icon: "🔔" },
            { name: "Spice Vault", icon: "🌶️" }
          ]
        }
      ],
      clues: [
        { id: 1, text: "Head Councillor Devi is afraid of heights — she would never climb to the Archive Roof or the School Bell Tower." },
        { id: 2, text: "Councillor Basu's family has stored things at the Spice Vault for three generations — it is his instinctive hiding place." },
        { id: 3, text: "Councillor Rani was seen near the Archive at midnight, and the Archive Roof is accessible only through the Archive itself." },
        { id: 4, text: "Councillor Mohan grew up as a river-child and still goes to the Ghat every Sunday morning before dawn." },
        { id: 5, text: "The token hidden at the River Ghat Steps was left under the third step from the water — a place only someone who visits regularly would know." }
      ],
      solution: { "Councillor": "Councillor Rani", "Hiding Place": "Archive Roof" }
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 30 · March 30, 2026 (Monday) · FLOW · Week 5
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-30",
    puzzle_date: "2026-03-30",
    engine_type: "flow",
    day_of_week: 1,
    week_number: 5,
    grade_band: "7-9",
    config: {
      id: "flow_20260330",
      title: "Chatur's Last Chalk Line",
      storyBeat: "On the last Monday of March, Chatur sat alone in the school courtyard with a piece of chalk, drawing the month's final puzzle for herself — not for anyone else, not for practice, but for the pleasure of it. Six colours, six destinations, thirty-six squares of flagstone that all needed a line through them. She drew slowly, with great care, making small sounds of satisfaction as each path locked into place. The schoolmaster watched from the window and said nothing. He knew better.",
      hint: "Chatur says: 'When the puzzle is for yourself, you are the most honest solver. No guessing — only knowing, one step at a time.'",
      winMessage: "The courtyard was covered in chalk lines, beautiful and exact, every square touched, every colour matched. The rain came at noon and washed it all away. Chatur watched from the doorway, perfectly content. She had the solution in her head, which was the only place it had ever needed to be.",
      grade: "7-9",
      category: "1.2",
      grid: 6,
      pairs: [
        { id: "R", color: "#e05050", start: [0, 0], end: [5, 4] },
        { id: "B", color: "#4a90d9", start: [0, 3], end: [5, 0] },
        { id: "G", color: "#3a7d44", start: [0, 5], end: [4, 1] },
        { id: "Y", color: "#e8a820", start: [1, 2], end: [5, 5] },
        { id: "P", color: "#9b59b6", start: [2, 4], end: [4, 0] },
        { id: "O", color: "#e8803a", start: [1, 0], end: [3, 5] }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Day 31 · March 31, 2026 (Tuesday) · CONNECTIONS · Week 5
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-03-31",
    puzzle_date: "2026-03-31",
    engine_type: "connections",
    day_of_week: 2,
    week_number: 5,
    grade_band: "7-9",
    config: {
      id: "connections_20260331",
      title: "Everything Chatur Learned in March",
      storyBeat: "On the last day of March, Chatur sat on the steps of the Old Archive and opened her notebook. She had filled it in one month — thirty-one puzzles, thirty-one mornings, thirty-one versions of Budhipur revealing itself one step at a time. The Archivist sat beside her and looked at the pages without touching them. 'You have learned the city's vocabulary,' he said quietly. 'Next month you will learn its grammar.' Chatur closed the notebook and looked at the river. 'Sixteen words remain,' she said. 'Let me sort them one last time.'",
      hint: "Chatur says: 'This final puzzle holds everything the month taught you. The last group is the hardest because it sounds like the easiest. Don't be fooled — you've come too far for that.'",
      winMessage: "Chatur sorted the last tile and closed her notebook. The Archivist said: 'Same time next month?' She was already walking toward the Bazaar. She raised one hand without turning. That meant yes.",
      grade: "7-9",
      category: "4.3",
      groups: [
        {
          id: "g1",
          color: "#3a7d44",
          label: "Things Budhipur does at the end of each month",
          connection: "All are rituals or customs performed on the last day of the month in Budhipur",
          tiles: [
            { text: "Account-Settling", icon: "📒" },
            { text: "River-Greeting", icon: "🙏" },
            { text: "Lamp-Counting", icon: "🪔" },
            { text: "Archive-Sealing", icon: "🔒" }
          ]
        },
        {
          id: "g2",
          color: "#4a90d9",
          label: "Things that begin again each new month",
          connection: "All are things in Budhipur that reset, renew, or restart with the new month",
          tiles: [
            { text: "Market Quota", icon: "📦" },
            { text: "Ferryman's Log", icon: "📓" },
            { text: "School Timetable", icon: "📅" },
            { text: "Bridge Toll", icon: "💰" }
          ]
        },
        {
          id: "g3",
          color: "#e8a820",
          label: "Things Chatur solved in March",
          connection: "All are mysteries Chatur untangled over the course of the month",
          tiles: [
            { text: "The Missing Saffron", icon: "🌸" },
            { text: "The Vanished Scroll", icon: "📜" },
            { text: "The Festival Drum", icon: "🥁" },
            { text: "The Forged Seal", icon: "🔴" }
          ]
        },
        {
          id: "g4",
          color: "#c060c0",
          label: "Things that are both endings and beginnings",
          connection: "All are moments in Budhipur that are simultaneously a conclusion and a new start — the deepest kind of thing",
          tiles: [
            { text: "Dawn", icon: "🌅" },
            { text: "Empty Notebook", icon: "📔" },
            { text: "Last Step Home", icon: "👣" },
            { text: "First Question", icon: "❓" }
          ]
        }
      ]
    }
  }

];
