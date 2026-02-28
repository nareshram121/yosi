-- ============================================================
-- update-march-engines.sql
-- Patches the 12 days that changed engine type in Month 1.
-- Run in Supabase SQL editor after the original seed.sql.
-- ============================================================

-- Day 3 → visual (odd-one-out)
UPDATE puzzles SET
  engine_type = 'visual',
  grade_band  = '1-3',
  config = '{"id":"visual_20260303","title":"The Odd One Out at Mehta''s Stall","storyBeat":"Old Mehta had arranged four things in a row on his counter — the way he always did when he wanted Chatur to notice something. Chatur stopped, looked at the four items, and felt that pleasant click in her mind that meant a pattern had resolved itself. Three of these things belonged together. One did not.","hint":"Chatur says: ''Think about what each thing is used for at the spice stall. One of them has never been near a pot of cooking.''","winMessage":"Chatur pointed at the lotus leaf without hesitation. ''You buy this at the Ghat,'' she told Mehta, ''not at the Spice Quarter.'' Mehta laughed and kept it as decoration anyway.","grade":"1-3","category":"4.3","mode":"odd-one-out","items":[{"text":"Turmeric","icon":"🟡"},{"text":"Cardamom","icon":"🫘"},{"text":"Saffron","icon":"🌸"},{"text":"Lotus Leaf","icon":"🪷"}],"correctIndex":3,"explanation":"Turmeric, Cardamom, and Saffron are all spices sold at Mehta''s stall in Budhipur''s Spice Quarter. The Lotus Leaf is a river plant — beautiful, but not a spice. It belongs at the Ghat, not on the stall."}'
WHERE id = '2026-03-03';

-- Day 5 → lateral (think lateral)
UPDATE puzzles SET
  engine_type = 'lateral',
  grade_band  = '2-4',
  config = '{"id":"lateral_20260305","title":"Chatur''s River Riddle","storyBeat":"Hari was feeling confident. He had been practising riddles all week, and he had one ready for Chatur. He cleared his throat importantly. Chatur did not put down her chai. She looked at him with the calm, steady gaze she reserved for things that were about to become obvious.","hint":"Chatur says: ''What is the one thing that grows when you share it, instead of shrinking?''","winMessage":"The merchant sells knowledge — recipes, remedies, farming wisdom, navigation by stars. The more he teaches, the more he knows. ''That is true of all the best things,'' said Chatur, and finished her chai.","grade":"2-4","category":"2.3","prompt":"A merchant says: ''The more I sell, the more I have left.'' What does this merchant sell?","options":[{"text":"Saffron — it multiplies in cooking","icon":"🌸"},{"text":"Knowledge — it grows when you share it","icon":"📚"},{"text":"River water — the river never empties","icon":"🌊"},{"text":"Festival stories from the Bazaar","icon":"📖"}],"correctIndex":1,"explanation":"Unlike physical goods, knowledge multiplies when shared. The more the merchant teaches — recipes, trade secrets, navigation wisdom — the more he learns in return."}'
WHERE id = '2026-03-05';

-- Day 7 → word (word-ladder: LAMP→SALE)
UPDATE puzzles SET
  engine_type = 'word',
  grade_band  = '3-5',
  config = '{"id":"word_20260307","title":"The Lamp-Lighter''s Word Walk","storyBeat":"The lamp-lighter of Budhipur had a peculiar hobby. Each evening as he lit his lamps, he changed words — one letter at a time — until he had walked from one meaning to another. ''LAMP to SALE in three steps,'' he said to Chatur one Saturday, holding out a folded piece of paper. Chatur unfolded it, read it, folded it back, and recited the path from memory.","hint":"Chatur says: ''The first step changes the last letter. The second changes the first letter. The third changes one more. Trust the sound of each word as it wants to become the next.''","winMessage":"LAMP → LAME → SAME → SALE. The lamp-lighter clapped. ''How did you see it so fast?'' Chatur handed back the paper. ''I listened to how the word wanted to change,'' she said.","grade":"3-5","category":"3.1","mode":"word-ladder","startWord":"LAMP","endWord":"SALE","validPath":["LAME","SAME"],"wordLength":4}'
WHERE id = '2026-03-07';

-- Day 10 → drag (4×4 Rush Hour)
UPDATE puzzles SET
  engine_type = 'drag',
  grade_band  = '2-4',
  config = '{"id":"drag_20260310","title":"Clear the Bazaar Lane","storyBeat":"The Festival cart — bright red, carrying Budhipur''s ceremonial offerings — needed to reach the lane''s exit before sundown. But a stall-owner had parked his cart of blue clay jars directly in the path. There was just enough room to manoeuvre, if you thought carefully about which cart moved where. Chatur arrived, looked at the lane for three seconds, and pointed.","hint":"Chatur says: ''The blue cart can only move one way. Move it far enough, and the red cart will have a clear road to the exit on the right.''","winMessage":"The red cart rolled free and reached the exit with minutes to spare. The stall-owner watched with impressed annoyance. ''You didn''t even touch anything,'' he said. ''I just showed you where to touch,'' said Chatur.","grade":"2-4","category":"1.1","gridSize":4,"exitRow":1,"exitSide":"right","blocks":[{"id":"T","color":"#e05050","row":1,"col":0,"length":2,"orientation":"h","isTarget":true},{"id":"A","color":"#4a90d9","row":0,"col":2,"length":2,"orientation":"v"}]}'
WHERE id = '2026-03-10';

-- Day 12 → visual (odd-one-out: river)
UPDATE puzzles SET
  engine_type = 'visual',
  grade_band  = '2-4',
  config = '{"id":"visual_20260312","title":"What Doesn''t Belong on the River?","storyBeat":"The schoolmaster had a lesson every Thursday that he called River Knowledge. He would write four things on the board and ask the children to find the one that did not belong. Chatur always finished first. She said it was because she had spent so many mornings watching the river that she knew exactly what lived there and what did not.","hint":"Chatur says: ''Three of these four things travel on water. The fourth tells you what time it is.''","winMessage":"Chatur pointed at the Water Clock without hesitation. ''It uses water,'' she told the schoolmaster, ''but it does not travel on it. The river carries boats. The clock stays still.'' The schoolmaster wrote her answer on the board in large letters.","grade":"2-4","category":"4.3","mode":"odd-one-out","items":[{"text":"Coracle","icon":"🛶"},{"text":"Barge","icon":"⛴️"},{"text":"Punt","icon":"🚣"},{"text":"Water Clock","icon":"⏳"}],"correctIndex":3,"explanation":"A Coracle, Barge, and Punt are all boats that travel on Budhipur''s great river. A Water Clock measures time using dripping water — it lives in the Archive or the observatory, not on the current."}'
WHERE id = '2026-03-12';

-- Day 14 → word (word-ladder: COLD→MORE)
UPDATE puzzles SET
  engine_type = 'word',
  grade_band  = '4-6',
  config = '{"id":"word_20260314","title":"The Archivist''s Four-Step Path","storyBeat":"The Archivist had a game he played with words when the Archive was quiet. He would find a path from one meaning to another, changing only one letter at a time, never resting at a word that did not exist. ''COLD to MORE in three steps,'' he told Chatur on a Saturday afternoon. She counted the steps on her fingers — not because she needed to, but to show she was being careful.","hint":"Chatur says: ''The path goes: change a letter in the middle, then change a letter at the end, then change the first letter. Listen to what the word is becoming.''","winMessage":"COLD → CORD → CORE → MORE. The Archivist nodded approvingly. ''You did not guess,'' he said. ''No,'' said Chatur. ''I followed.''","grade":"4-6","category":"3.1","mode":"word-ladder","startWord":"COLD","endWord":"MORE","validPath":["CORD","CORE"],"wordLength":4}'
WHERE id = '2026-03-14';

-- Day 17 → lateral (speed/time puzzle)
UPDATE puzzles SET
  engine_type = 'lateral',
  grade_band  = '3-6',
  config = '{"id":"lateral_20260317","title":"Chatur''s Shortcut Problem","storyBeat":"On Tuesday mornings, the schoolchildren raced to be first at the gate. One girl walked to school in twenty minutes. One day she decided to run — and she ran twice as fast as she walked. Hari bet Chatur that nobody could work out how long the run took without a water clock. Chatur had the answer before Hari finished explaining the problem.","hint":"Chatur says: ''If you travel twice as fast, how does your journey time change? Speed and time always move in opposite directions.''","winMessage":"Ten minutes. Speed doubles, time halves. Chatur said: ''Simple. Speed and time are always trading places — they are two sides of the same coin, and the distance between school and home never changes.'' Hari paid his bet of a mango.","grade":"3-6","category":"2.3","prompt":"A child walks to school in 20 minutes. One day she runs twice as fast as she walks. How long does running take?","options":[{"text":"10 minutes","icon":"⏱️"},{"text":"20 minutes","icon":"⏰"},{"text":"40 minutes","icon":"🕐"},{"text":"15 minutes","icon":"⚡"}],"correctIndex":0,"explanation":"If the child walks at speed W and takes 20 minutes, then at speed 2W (twice as fast), the time is 20 ÷ 2 = 10 minutes. When speed doubles, time halves — because distance stays constant."}'
WHERE id = '2026-03-17';

-- Day 19 → drag (5×5 Rush Hour)
UPDATE puzzles SET
  engine_type = 'drag',
  grade_band  = '4-6',
  config = '{"id":"drag_20260319","title":"The Festival Corridor","storyBeat":"The Festival procession''s lead cart — painted red with marigold trim — was blocked in a stone corridor near the Silk Quarter. Two heavy supply carts had been parked across the exit: one carrying blue silk bales, one carrying green spice boxes. Both could be shifted, but only in the direction their runners allowed. Chatur mapped the moves in her mind before anyone had finished explaining the problem.","hint":"Chatur says: ''Both blocking carts can move upward along the corridor. Move each one up far enough, and the red cart will find its path to the right.''","winMessage":"The procession cart rolled free into the Silk Quarter lane to great cheering. The supply cart owners shook their heads in admiration. Chatur was already three lanes ahead, looking for the next bottleneck.","grade":"4-6","category":"1.1","gridSize":5,"exitRow":2,"exitSide":"right","blocks":[{"id":"T","color":"#e05050","row":2,"col":0,"length":2,"orientation":"h","isTarget":true},{"id":"A","color":"#4a90d9","row":1,"col":2,"length":2,"orientation":"v"},{"id":"B","color":"#3a7d44","row":1,"col":3,"length":2,"orientation":"v"},{"id":"C","color":"#9b59b6","row":4,"col":0,"length":2,"orientation":"h"}]}'
WHERE id = '2026-03-19';

-- Day 21 → lateral (Hari''s family riddle)
UPDATE puzzles SET
  engine_type = 'lateral',
  grade_band  = '3-6',
  config = '{"id":"lateral_20260321","title":"Hari''s Tricky Family Question","storyBeat":"Hari had been reading a book of logic puzzles from the Archive, and he had found one that he was absolutely certain would stump Chatur. He read it aloud with maximum drama. Chatur had answered it before he finished the sentence. Hari said that was cheating. Chatur said that knowing the answer quickly was the whole point.","hint":"Chatur says: ''Read the question very carefully. Who is the one brother that all three sisters share?''","winMessage":"Hari has zero brothers. Each of his three sisters has exactly one brother — and that brother is Hari himself. Hari stared at the answer for a long time. Chatur was very patient about it. Eventually he said: ''Oh.'' She said: ''Yes.''","grade":"3-6","category":"2.3","prompt":"Hari has 3 sisters. Each sister has 1 brother. How many brothers does Hari have?","options":[{"text":"3 brothers","icon":"3️⃣"},{"text":"0 brothers","icon":"0️⃣"},{"text":"1 brother","icon":"1️⃣"},{"text":"Cannot be determined","icon":"❓"}],"correctIndex":1,"explanation":"Each of Hari''s three sisters has exactly one brother — and that brother is Hari himself. So Hari has zero brothers. Chatur said: ''The question already gave you the answer. You just had to trust it.''"}'
WHERE id = '2026-03-21';

-- Day 24 → visual (odd-one-out: puja thali)
UPDATE puzzles SET
  engine_type = 'visual',
  grade_band  = '2-5',
  config = '{"id":"visual_20260324","title":"What Doesn''t Belong on the Offering Plate?","storyBeat":"The festival puja was three hours away, and the temple helper had set four things on the offering plate by mistake. Chatur passed the temple doorway, glanced at the plate, and said one word quietly to herself. The temple helper asked what she had said. ''One of these,'' said Chatur, ''does not belong.''","hint":"Chatur says: ''Three of these four things are placed on the offering plate during the festival ritual. The fourth belongs in a different kind of exchange entirely.''","winMessage":"Chatur pointed at the copper coin. ''That belongs in the merchant''s purse,'' she said. ''The offering plate takes flowers, incense, and colour — not currency.'' The temple helper moved the coin quickly, as though it had always known it was in the wrong place.","grade":"2-5","category":"4.3","mode":"odd-one-out","items":[{"text":"Marigold","icon":"🌼"},{"text":"Agarbatti","icon":"🕯️"},{"text":"Kumkum","icon":"🔴"},{"text":"Copper Coin","icon":"🪙"}],"correctIndex":3,"explanation":"Marigold, Agarbatti (incense sticks), and Kumkum (red powder) are all traditionally placed on a puja thali during Budhipur''s festival rituals. A Copper Coin is currency — it belongs in a merchant''s purse, not on the offering plate."}'
WHERE id = '2026-03-24';

-- Day 26 → drag (6×6 Rush Hour)
UPDATE puzzles SET
  engine_type = 'drag',
  grade_band  = '6-9',
  config = '{"id":"drag_20260326","title":"The Bazaar''s Grand Bottleneck","storyBeat":"The main festival cart was trapped in the widest alley of the Bazaar, the six-lane passage that merchants called the Grand Corridor. Three supply carts had parked in a row across it — a blue one, a green one, and a purple one. Two horizontal barricades had been erected above them by mistake, blocking each supply cart from moving upward. Chatur stared at the corridor for a full minute. Then she smiled.","hint":"Chatur says: ''The three carts blocking the path cannot move upward — the barricades prevent it. They must go downward. Move each one down far enough, and the festival cart will have its road.''","winMessage":"Three carts moved down, and the festival cart rolled free through the Grand Corridor to enormous cheering. The merchants argued afterward about who had thought of the solution first. None of them had. Chatur had already gone home.","grade":"6-9","category":"1.1","gridSize":6,"exitRow":2,"exitSide":"right","blocks":[{"id":"T","color":"#e05050","row":2,"col":0,"length":2,"orientation":"h","isTarget":true},{"id":"A","color":"#4a90d9","row":1,"col":2,"length":2,"orientation":"v"},{"id":"B","color":"#3a7d44","row":1,"col":3,"length":2,"orientation":"v"},{"id":"C","color":"#9b59b6","row":1,"col":4,"length":2,"orientation":"v"},{"id":"D","color":"#e8a820","row":0,"col":1,"length":2,"orientation":"h"},{"id":"E","color":"#c060c0","row":0,"col":3,"length":2,"orientation":"h"}]}'
WHERE id = '2026-03-26';

-- Day 28 → word (word-ladder: FIRE→BALE)
UPDATE puzzles SET
  engine_type = 'word',
  grade_band  = '5-8',
  config = '{"id":"word_20260328","title":"From Fire to Bale","storyBeat":"The cloth-merchant''s son had a challenge for Chatur on the last Saturday before the Festival: walk a word from FIRE to BALE, one letter at a time, through four careful steps. The merchant''s son had been trying for three days. Chatur solved it in the time it took him to read the challenge aloud. She wrote the path on the back of his hand with chalk, which he considered unusual but satisfying.","hint":"Chatur says: ''Start by changing the first letter. Then change the second. Then the first again. Then the third. Each step must land on a real word — listen for when the word clicks into place.''","winMessage":"FIRE → HIRE → HARE → BARE → BALE. The merchant''s son read the path slowly, checking each word. ''They''re all real,'' he said, surprised. Chatur said: ''They were always real. You just had to find the path between them.''","grade":"5-8","category":"3.1","mode":"word-ladder","startWord":"FIRE","endWord":"BALE","validPath":["HIRE","HARE","BARE"],"wordLength":4}'
WHERE id = '2026-03-28';
