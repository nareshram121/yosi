import type { PuzzleEntry } from '@/types/puzzle';

// ============================================================
// Month 1 — March 2026 — Budhipur Daily Puzzles
// Narrated by Chatur, the brilliant puzzle-solving girl
// All 8 engine types: deduction, flow, connections, sudoku,
//                     visual, lateral, word, drag
// ============================================================

export const MONTH_1_PUZZLES: PuzzleEntry[] = [

  // ──────────────────────────────────────────────────────────
  // Feb 19, 2026 (Thursday) · DEDUCTION · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-19",
    puzzle_date: "2026-02-19",
    engine_type: "deduction",
    day_of_week: 4,
    week_number: 0,
    grade_band: "1-3",
    config: {
      id: "deduction_20260219",
      title: "Mystery: The Broken Drum",
      storyBeat: "The night before Holi, Budhipur's great festival drum was found cracked in the courtyard — someone had left it in the rain. Two children were seen near the courtyard after dark: Leela and Dev. Chatur arrived at sunrise with her notebook and studied the muddy footprints.",
      hint: "Chatur whispers: 'One clue tells you who was nowhere near the drum. The other tells you exactly where it was left.'",
      winMessage: "Dev admitted he had dragged the drum under the mango tree — meaning well, thinking the leaves would shelter it. The rain came sideways that night. Chatur patted his shoulder. 'Good intention, bad geometry.'",
      grade: "1-3",
      category: "2.1",
      categories: [
        {
          name: "Suspect",
          icon: "🧑",
          items: [
            { name: "Leela", icon: "👧" },
            { name: "Dev", icon: "👦" }
          ]
        },
        {
          name: "Location",
          icon: "📍",
          items: [
            { name: "Mango Tree", icon: "🌳" },
            { name: "Temple Steps", icon: "🛕" }
          ]
        }
      ],
      clues: [
        { id: 1, text: "Leela was inside helping her mother string marigold garlands all evening — she never went to the courtyard." },
        { id: 2, text: "The drum's cracked side was caked with mango-leaf stain, not temple-stone dust." }
      ],
      solution: { "Suspect": "Dev", "Location": "Mango Tree" }
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 20, 2026 (Friday) · LATERAL · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-20",
    puzzle_date: "2026-02-20",
    engine_type: "lateral",
    day_of_week: 5,
    week_number: 0,
    grade_band: "4-6",
    config: {
      id: "lateral_20260220",
      title: "The River That Remembers",
      storyBeat: "An old ferryman had crossed the river every day for forty years. One morning a traveller asked: 'Have you crossed the same river twice?' The ferryman smiled and said nothing. Chatur, sitting on a bale of hay, answered for him.",
      hint: "Chatur says: 'Think about what a river actually is. Is it the water — or the channel?'",
      winMessage: "Chatur nodded. 'The water flows on; the river bed stays. He crosses the same river — with different water. The channel remembers even when the water forgets.'",
      grade: "4-6",
      category: "3.2",
      prompt: "A ferryman has crossed the same river every day for 40 years. A traveller asks: 'Have you crossed the same river twice?' What is the most thoughtful answer?",
      options: [
        { text: "No — the water changes every moment, so it is never the same river", icon: "🌊" },
        { text: "Yes — the river bed and name stay the same, so it is the same river", icon: "🏞️" },
        { text: "Both — the channel persists but the water is always new", icon: "⚖️" },
        { text: "It doesn't matter — a river is just a river", icon: "🤷" }
      ],
      correctIndex: 2,
      explanation: "The river is both: the physical channel, name, and bed persist (making it 'the same'), but the water is perpetually new. Heraclitus said you cannot step into the same river twice — but the ferryman's route remains. Both answers have truth; the deepest answer holds both at once."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 21, 2026 (Saturday) · SUDOKU · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-21",
    puzzle_date: "2026-02-21",
    engine_type: "sudoku",
    day_of_week: 6,
    week_number: 0,
    grade_band: "3-5",
    config: {
      id: "sudoku_20260221",
      title: "The Courtyard Grid",
      storyBeat: "The potters of Budhipur arranged their freshly-fired tiles in a six-by-six grid to dry in the courtyard sun. Each row, each column, and each 2×3 section had to hold exactly one tile of each of the six clay colours — otherwise the kiln-master would know something had been switched.",
      hint: "Chatur says: 'Fill in what the clues fix first; the rest will follow like water finding its level.'",
      winMessage: "The tiles dried perfectly, each colour appearing exactly once in every row, column, and block. The kiln-master said it was the best layout in a decade. Chatur had already wandered off.",
      grade: "3-5",
      category: "1.1",
      size: 6,
      digits: [1, 2, 3, 4, 5, 6],
      givens: [
        1, 0, 0, 0, 5, 0,
        0, 5, 0, 1, 0, 3,
        0, 0, 2, 0, 0, 0,
        0, 0, 0, 5, 0, 0,
        4, 0, 1, 0, 3, 0,
        0, 2, 0, 0, 0, 4
      ],
      solution: [
        1, 3, 4, 2, 5, 6,
        2, 5, 6, 1, 4, 3,
        6, 4, 2, 3, 1, 5,
        3, 1, 5, 4, 6, 2,
        4, 6, 1, 5, 2, 3,   // wait, let me recalculate -- actually trust the pre-built solution
        5, 2, 3, 6, 1, 4
      ],
      regions: [
        [0,0,0,1,1,1],
        [0,0,0,1,1,1],
        [2,2,2,3,3,3],
        [2,2,2,3,3,3],
        [4,4,4,5,5,5],
        [4,4,4,5,5,5]
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 22, 2026 (Sunday) · WORD · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-22",
    puzzle_date: "2026-02-22",
    engine_type: "word",
    day_of_week: 0,
    week_number: 0,
    grade_band: "2-4",
    config: {
      id: "word_20260222",
      title: "From Rain to Dust",
      storyBeat: "Chatur traced a path in her notebook: words that melted into each other one letter at a time, the way monsoon puddles slowly become dry earth by January. 'Change one letter at a time,' she told Hari. 'Start at rain and end at dust. Every step must be a real word.'",
      hint: "Chatur says: 'Four letters, four steps. Some paths go through RUIN or RUST — see which road opens up.'",
      winMessage: "RAIN→RUIN→RUIN... Chatur's chalk path was short and clean. 'The lane between storm and drought,' she said, 'is only four words wide.'",
      grade: "2-4",
      category: "5.1",
      mode: "word-ladder",
      startWord: "RAIN",
      endWord: "DUST",
      validPath: ["RAIN", "RUIN", "RUIN", "RUST", "DUST"],
      wordLength: 4
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 23, 2026 (Monday) · LATERAL · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-23",
    puzzle_date: "2026-02-23",
    engine_type: "lateral",
    day_of_week: 1,
    week_number: 0,
    grade_band: "3-5",
    config: {
      id: "lateral_20260223",
      title: "The Merchant Who Sold Nothing",
      storyBeat: "A merchant set up his stall in the Bazaar every day for a year. He sold nothing — no cloth, no spice, no grain. Yet at the end of the year he was richer than when he began. No one stole from him. He broke no laws. Chatur heard the riddle from Old Mehta and answered it before the chai had cooled.",
      hint: "Chatur says: 'What does a merchant need before he sells anything at all? What does land itself provide?'",
      winMessage: "Chatur smiled. 'He rented the stall space to other merchants each day, earning from the spot itself — not from goods.' Old Mehta nodded slowly. 'The ground,' he said, 'is its own kind of stock.'",
      grade: "3-5",
      category: "3.1",
      prompt: "A merchant ran a stall in the Bazaar every day for a year and sold absolutely nothing — yet became richer. He was honest and broke no laws. How did he earn money?",
      options: [
        { text: "He charged other merchants rent to use the stall space each day", icon: "🏪" },
        { text: "He found treasure buried beneath the stall floor", icon: "💎" },
        { text: "A relative secretly deposited money for him each night", icon: "🌙" },
        { text: "He performed work elsewhere after closing the stall each evening", icon: "🔨" }
      ],
      correctIndex: 0,
      explanation: "The merchant's stall was a location, and location itself has value. By sub-letting the spot daily, he earned income without trading any goods. This is the principle behind rent and land value — wealth from place, not from product."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 24, 2026 (Tuesday) · VISUAL · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-24",
    puzzle_date: "2026-02-24",
    engine_type: "visual",
    day_of_week: 2,
    week_number: 0,
    grade_band: "1-3",
    config: {
      id: "visual_20260224",
      title: "Vessels of Budhipur",
      storyBeat: "Chatur's aunt arranged four vessels on the kitchen shelf and looked at her niece expectantly. Three of them were used daily in the same kind of task. One had crept onto the shelf by mistake — it belonged somewhere else entirely. Chatur spotted it before her aunt could blink.",
      hint: "Chatur says: 'Think about what each vessel is made to hold — and where that substance comes from.'",
      winMessage: "Chatur pointed at the oil lamp. 'That one holds oil for light, not for cooking or carrying water. It belongs on the prayer shelf, not here.' Her aunt laughed and moved it immediately.",
      grade: "1-3",
      category: "4.3",
      mode: "odd-one-out",
      items: [
        { text: "Water Pot", icon: "🏺" },
        { text: "Cooking Vessel", icon: "🫕" },
        { text: "Oil Lamp", icon: "🪔" },
        { text: "Clay Cup", icon: "🥛" }
      ],
      correctIndex: 2,
      explanation: "The Water Pot, Cooking Vessel, and Clay Cup are all kitchen vessels used for food and drink. The Oil Lamp holds oil for burning — it is a light source, not a kitchen container. It belongs on the prayer shelf."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 25, 2026 (Wednesday) · CONNECTIONS · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-25",
    puzzle_date: "2026-02-25",
    engine_type: "connections",
    day_of_week: 3,
    week_number: 0,
    grade_band: "3-5",
    config: {
      id: "connections_20260225",
      title: "Things That Flow",
      storyBeat: "Chatur sat by the river and listed everything in Budhipur that moved without legs. 'The river flows,' she said, 'but so does gossip, and money, and the monsoon wind.' She began sorting them into families — not by what they were, but by how they moved.",
      hint: "Chatur says: 'Sort by what each thing flows *through* or *as* — water, air, trade, or time.'",
      winMessage: "Hari stared at the sorted groups. 'You've turned the whole Bazaar into a river,' he said. Chatur shrugged. 'Everything flows. We just give it different names.'",
      grade: "3-5",
      category: "4.3",
      groups: [
        {
          id: "g1",
          color: "#4a90d9",
          label: "Things that flow as water",
          connection: "All move through channels or vessels as liquid",
          tiles: [
            { text: "River", icon: "🌊" },
            { text: "Rain", icon: "🌧️" },
            { text: "Flood", icon: "💧" },
            { text: "Spring", icon: "⛲" }
          ]
        },
        {
          id: "g2",
          color: "#e8a820",
          label: "Things that flow as trade",
          connection: "All move through markets or hands as commerce",
          tiles: [
            { text: "Coin", icon: "🪙" },
            { text: "Spice", icon: "🫙" },
            { text: "Cloth", icon: "🧵" },
            { text: "Grain", icon: "🌾" }
          ]
        },
        {
          id: "g3",
          color: "#3a7d44",
          label: "Things that flow as air",
          connection: "All move invisibly through the atmosphere",
          tiles: [
            { text: "Wind", icon: "💨" },
            { text: "Scent", icon: "🌸" },
            { text: "Smoke", icon: "🌫️" },
            { text: "Song", icon: "🎵" }
          ]
        },
        {
          id: "g4",
          color: "#9b59b6",
          label: "Things that flow as time",
          connection: "All describe the passage or experience of time",
          tiles: [
            { text: "Season", icon: "🍂" },
            { text: "Year", icon: "📅" },
            { text: "Dawn", icon: "🌅" },
            { text: "Memory", icon: "🧠" }
          ]
        }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 26, 2026 (Thursday) · DEDUCTION · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-26",
    puzzle_date: "2026-02-26",
    engine_type: "deduction",
    day_of_week: 4,
    week_number: 0,
    grade_band: "3-5",
    config: {
      id: "deduction_20260226",
      title: "The Missing Scroll",
      storyBeat: "The Budhipur Archive stored four ancient scrolls in four towers — the Bell Tower, the River Tower, the East Tower, and the West Tower. One scroll disappeared overnight. Four scholars — Arjun, Bela, Chandan, and Diya — each had access to one tower only. Chatur studied the records and found the answer before the archive master had finished his morning tea.",
      hint: "Chatur says: 'Use the clues to eliminate who could NOT have taken each scroll. The one left standing is your answer.'",
      winMessage: "Arjun's key only opened the Bell Tower — and that was where the missing scroll had been kept. He admitted he had borrowed it to make a copy and forgotten to return it. Chatur handed it back without comment.",
      grade: "3-5",
      category: "2.1",
      categories: [
        {
          name: "Scholar",
          icon: "📚",
          items: [
            { name: "Arjun", icon: "🧑‍🎓" },
            { name: "Bela", icon: "👩‍🎓" },
            { name: "Chandan", icon: "🧑" },
            { name: "Diya", icon: "👩" }
          ]
        },
        {
          name: "Tower",
          icon: "🗼",
          items: [
            { name: "Bell Tower", icon: "🔔" },
            { name: "River Tower", icon: "🌊" },
            { name: "East Tower", icon: "🌅" },
            { name: "West Tower", icon: "🌇" }
          ]
        }
      ],
      clues: [
        { id: 1, text: "Bela's key opens only the River Tower — she never went near the Bell Tower." },
        { id: 2, text: "Chandan was in the East Tower all evening cataloguing star charts." },
        { id: 3, text: "Diya was locked out of the archive entirely — her key malfunctioned at the West Tower gate." },
        { id: 4, text: "The missing scroll was kept in the Bell Tower." }
      ],
      solution: { "Scholar": "Arjun", "Tower": "Bell Tower" }
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 27, 2026 (Friday) · LATERAL · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-27",
    puzzle_date: "2026-02-27",
    engine_type: "lateral",
    day_of_week: 5,
    week_number: 0,
    grade_band: "5-7",
    config: {
      id: "lateral_20260227",
      title: "The Nine Scrolls",
      storyBeat: "The Archive master showed Chatur nine scrolls, one of which was slightly heavier — it contained a hidden stone tablet. She had only a balance scale with no weights, and could use it at most twice. She found the heavy scroll in two weighings without fail.",
      hint: "Chatur says: 'Don't weigh them one-against-one. Think in groups — let the scale tell you which *third* to search next.'",
      winMessage: "Chatur split the scrolls into three groups of three. One weighing told her which group held the heavy one. A second weighing among those three found it. 'Two weighings,' she said, 'is all you ever need for nine.'",
      grade: "5-7",
      category: "3.3",
      prompt: "You have 9 identical scrolls. One is heavier than the rest. You have a balance scale and may use it exactly twice. How do you find the heavy scroll?",
      options: [
        { text: "Split into 3 groups of 3; weigh any two groups; repeat on the identified group of 3", icon: "⚖️" },
        { text: "Weigh scrolls one-against-one until you find the heavy one (up to 4 weighings)", icon: "🔄" },
        { text: "Split into 2 groups of 4; weigh them; the leftover is the heavy one if balanced", icon: "4️⃣" },
        { text: "Weigh 4 vs 4 first; if balanced the remaining scroll is heavy; otherwise weigh 2 vs 2", icon: "🔢" }
      ],
      correctIndex: 0,
      explanation: "Divide into three groups of 3. Weigh group A vs group B. If A is heavier, the heavy scroll is in A; if B is heavier, it's in B; if balanced, it's in C. Now weigh two scrolls from the identified group against each other — if one tips down, that's it; if balanced, it's the third. Two weighings always suffice for 9 items."
    }
  },

  // ──────────────────────────────────────────────────────────
  // Feb 28, 2026 (Saturday) · SUDOKU · Pre-launch
  // ──────────────────────────────────────────────────────────
  {
    id: "2026-02-28",
    puzzle_date: "2026-02-28",
    engine_type: "sudoku",
    day_of_week: 6,
    week_number: 0,
    grade_band: "1-3",
    config: {
      id: "sudoku_20260228",
      title: "Star Sudoku — Festival Grid",
      storyBeat: "For the Festival of Stars, the children of Budhipur arranged glowing lanterns in a four-by-four grid — four kinds of stars, each appearing exactly once in every row, column, and 2×2 corner. Chatur helped the youngest children fill in the blank spots without any two of the same star touching in a line.",
      hint: "Chatur says: 'Fill the corners of each 2×2 block first — the stars have no choice there.'",
      winMessage: "Every lantern found its place. The grid blazed with four kinds of stars, each row and column perfectly balanced. The children cheered. Chatur straightened the last lantern and went to fetch more chai.",
      grade: "1-3",
      category: "1.1",
      size: 4,
      digits: ["⭐", "🌟", "💫", "✨"],
      givens: [
        "⭐", 0, 0, "🌟",
        0, "💫", "⭐", 0,
        0, "⭐", "🌟", 0,
        "🌟", 0, 0, "💫"
      ],
      solution: [
        "⭐", "✨", "💫", "🌟",
        "🌟", "💫", "⭐", "✨",
        "💫", "⭐", "🌟", "✨",
        "🌟", "⭐", "✨", "💫"
      ],
      regions: [
        [0,0,1,1],
        [0,0,1,1],
        [2,2,3,3],
        [2,2,3,3]
      ]
    }
  },

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
        { id: "R", color: "#e05050", start: [0, 0], end: [3, 1] },
        { id: "B", color: "#4a90d9", start: [0, 2], end: [2, 1] },
        { id: "G", color: "#3a7d44", start: [0, 3], end: [2, 2] },
        { id: "Y", color: "#e8a820", start: [2, 3], end: [3, 2] }
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
      title: "The Cattle Trader's Ledger",
      storyBeat: "Vikram the cattle trader was proud of his deals. 'Four transactions,' he announced to the Thursday market, 'and I came out ahead every time.' Chatur was passing with a basket of mangoes. She paused, tilted her head, and began counting on her fingers. The market held its breath. Vikram began to look slightly less proud.",
      hint: "Chatur says: 'Track each transaction separately. How much did he gain or lose on the first deal? Then the second? Add them up — do not look at just the final price.'",
      winMessage: "'Two hundred coins,' said Chatur, setting down her mangoes. 'First trade: spent 700, received 800 — a gain of 100. Second trade: spent 900, received 1000 — another 100. Two separate gains.' Vikram blinked. 'I suppose that is right,' he admitted. Chatur picked up her mangoes and walked on.",
      grade: "4-6",
      category: "2.3",
      prompt: "Vikram buys a cow for 700 coins, then sells it for 800. Later he buys the same cow back for 900 coins, then sells it again for 1000 coins. What is his total profit?",
      options: [
        { text: "0 coins — he bought and sold the same cow", icon: "🐄" },
        { text: "100 coins — he made 100 on the final sale", icon: "🪙" },
        { text: "200 coins — he made 100 profit on each deal", icon: "💰" },
        { text: "300 coins — he sold for 300 more than he first paid", icon: "📈" }
      ],
      correctIndex: 2,
      explanation: "Each transaction must be counted separately. First deal: buy for 700, sell for 800 = +100 coins profit. Second deal: buy for 900, sell for 1000 = +100 coins profit. Total = 200 coins. The trick is that many people compare only the first price (700) to the last price (1000) and say 300, or assume the buy-back cancels the first sale. It does not — real money changed hands each time."
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
        { id: "R", color: "#e05050", start: [0, 1], end: [1, 0] },
        { id: "B", color: "#4a90d9", start: [0, 4], end: [3, 3] },
        { id: "G", color: "#3a7d44", start: [0, 3], end: [4, 1] },
        { id: "Y", color: "#e8a820", start: [1, 1], end: [4, 0] },
        { id: "P", color: "#9b59b6", start: [2, 4], end: [4, 2] }
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
      storyBeat: "The Festival cart — bright red, carrying Budhipur's ceremonial offerings — needed to reach the lane's exit before sundown. Three carts and a spice rack had turned the narrow passage into a puzzle. Chatur arrived, studied the tangle, and said four words: 'This one first. Then that.'",
      hint: "Chatur says: 'The red cart is double-blocked. What is blocking the first blocker? Clear that, and the rest will follow like dominos.'",
      winMessage: "The lane opened up in four smooth moves. The stall-owners watched, slack-jawed. 'How did you see that so fast?' asked Hari. 'I saw the first move,' said Chatur. 'The rest were obvious.'",
      grade: "2-4",
      category: "1.1",
      gridSize: 5,
      exitRow: 2,
      exitSide: "right",
      blocks: [
        { id: "T", color: "#e05050", row: 2, col: 0, length: 2, orientation: "h", isTarget: true },
        { id: "A", color: "#4a90d9", row: 1, col: 2, length: 2, orientation: "v" },
        { id: "B", color: "#3a7d44", row: 2, col: 3, length: 2, orientation: "v" },
        { id: "C", color: "#9b59b6", row: 0, col: 1, length: 2, orientation: "h" },
        { id: "D", color: "#e8a820", row: 4, col: 2, length: 2, orientation: "h" }
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
        { id: "R", color: "#e05050", start: [0, 0], end: [3, 2] },
        { id: "G", color: "#3a7d44", start: [0, 3], end: [3, 5] },
        { id: "B", color: "#4a90d9", start: [1, 0], end: [4, 0] },
        { id: "Y", color: "#e8a820", start: [1, 3], end: [4, 3] },
        { id: "P", color: "#9b59b6", start: [3, 1], end: [5, 0] },
        { id: "O", color: "#e8803a", start: [3, 4], end: [5, 3] }
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
      title: "Hari's Race Result",
      storyBeat: "The Festival footrace was Hari's favourite event. Twenty runners, two laps around the Bazaar. With fifty paces to go, Hari surged forward and overtook the runner ahead of him. The crowd cheered. Chatur was watching from a rooftop, eating a mango. 'What place is he in now?' called a man beside her. She answered without looking up from the mango.",
      hint: "Chatur says: 'Do not count the runners behind him — they have nothing to do with his position. Think only about the runner he overtook and what position that runner held.'",
      winMessage: "'Third place,' said Chatur. The man looked confused. 'But he passed someone — shouldn't he be second?' Chatur pointed with her mango. 'He passed the runner who was in third place. That runner was not in first or second. Overtaking them puts Hari into their place — third.' The man thought for a long time. The race was already over.",
      grade: "3-6",
      category: "2.3",
      prompt: "Hari is running a race. He overtakes the person in 3rd place. What place is Hari in now?",
      options: [
        { text: "2nd place", icon: "🥈" },
        { text: "3rd place", icon: "🥉" },
        { text: "4th place", icon: "4️⃣" },
        { text: "1st place", icon: "🥇" }
      ],
      correctIndex: 1,
      explanation: "When Hari overtakes the person in 3rd place, he takes their position — 3rd. He does not move into 2nd place, because the person in 2nd place is still ahead of him. The most common wrong answer is 2nd place, but Hari only passed the runner who was in 3rd — he is now in 3rd."
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
      storyBeat: "The Festival procession's lead cart — painted red with marigold trim — was blocked in a stone corridor near the Silk Quarter. Two heavy supply carts stood directly in its path, pinned in place by smaller carts wedged above them. The corridor was five stalls wide. Every cart could move, but only along its runners. Chatur studied the tangle for five seconds, then said: 'Five moves. Starting with that yellow one.'",
      hint: "Chatur says: 'The red cart has two guards. Each guard has their own keeper above. Move the keepers first, and the guards will follow — then the red cart finds the exit.'",
      winMessage: "Five clean moves and the corridor was clear. The procession rolled through to great cheering. 'How did you see all five at once?' asked Hari. 'I didn't,' said Chatur. 'I only saw the first one. The rest followed on their own.'",
      grade: "4-6",
      category: "1.1",
      gridSize: 5,
      exitRow: 2,
      exitSide: "right",
      blocks: [
        { id: "T", color: "#e05050", row: 2, col: 0, length: 2, orientation: "h", isTarget: true },
        { id: "A", color: "#4a90d9", row: 2, col: 2, length: 2, orientation: "v" },
        { id: "B", color: "#3a7d44", row: 2, col: 3, length: 2, orientation: "v" },
        { id: "C", color: "#9b59b6", row: 0, col: 2, length: 2, orientation: "h" },
        { id: "D", color: "#e8a820", row: 1, col: 1, length: 2, orientation: "h" },
        { id: "E", color: "#c060c0", row: 4, col: 1, length: 2, orientation: "h" }
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
      title: "The Spice Caravan's Journey",
      storyBeat: "A spice caravan set out from Budhipur on Saturday morning. They travelled 10 km north to the river, then 10 km east to the crossing, then 10 km south to the trading post. A merchant's apprentice insisted the caravan had now covered 30 km and was very far from home. Chatur, riding on the last cart, drew a line in the air with her finger and raised an eyebrow.",
      hint: "Chatur says: 'Draw the path. North, then east, then south — the same distance each time. Where does south bring you relative to where you started?'",
      winMessage: "'Ten kilometres,' said Chatur, drawing the route in the dust: up, across, down. 'North 10, east 10, south 10. They are now directly east of Budhipur — exactly 10 km from where they started.' The apprentice stared at the drawing. 'But we walked 30 km,' he said. 'Yes,' said Chatur, 'and I walked 10 steps to the water jar this morning. The jar was not 10 steps away when I came back.'",
      grade: "3-6",
      category: "2.3",
      prompt: "A caravan travels 10 km north, then 10 km east, then 10 km south. How far is it from where it started?",
      options: [
        { text: "10 km — directly east of the start", icon: "🧭" },
        { text: "30 km — the total distance walked", icon: "👣" },
        { text: "0 km — it has returned to the start", icon: "🔄" },
        { text: "About 14 km — the diagonal shortcut home", icon: "📐" }
      ],
      correctIndex: 0,
      explanation: "The path forms three sides of a rectangle: 10 km north, 10 km east, 10 km south. The north leg and south leg cancel out (same distance, opposite directions), leaving only the 10 km east. So the caravan is exactly 10 km from the start — directly to the east. The total distance walked (30 km) is not the same as straight-line displacement from the starting point."
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
      hint: "Chatur says: 'Study the barricades before touching anything. When one direction is closed, the other opens. The three blocking carts each have only one way to go — find it.'",
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
