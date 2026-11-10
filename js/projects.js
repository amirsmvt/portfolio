/* =====================================================================
   ✏️ YOUR PROJECTS  (Portfolio section cards + pop-up windows)
   =====================================================================

   Each project is one { ... } block in the list below. The order here is
   the order the cards appear on the page.

   To ADD a project:    copy a whole block (from "{" to "},") and edit it.
   To REMOVE a project: delete its whole block.

   Put each project's files in its own folder, e.g.:
       img/portfolio/my-project/thumbnail.jpg      <- card image
       img/portfolio/my-project/video.mp4          <- video (optional)
       img/portfolio/my-project/gallery/1.jpg      <- photos (as many as you like)

   FIELDS
   ------
   id          A unique short name, no spaces (e.g. "rag-chatbot").
   category    "personal"  -> shows under "Personal Projects"
               "team"      -> shows under "Team Projects"
               (Every project also shows under "All".)
   featured    true  = shown on the "All" tab straight away.
               false = hidden on "All" until the visitor taps the ⌄ arrow.
               (Leave true if you want "All" to simply show everything.)
   title       Big text on the card and in the pop-up.
   subtitle    Small italic text on the card (e.g. "Python · LangChain · AWS").
   thumbnail   Card image. Best size: 800 x 500 px (16:10). JPG or PNG.
   media       What appears in the pop-up slider, in order. Mix any of:
                 { type: "video",   src: "img/portfolio/x/video.mp4" }   local MP4 file
                 { type: "youtube", id: "dQw4w9WgXcQ" }                  the part after "v=" in a YouTube link
                 { type: "vimeo",   id: "123456789" }                    the number in a Vimeo link
                 { type: "image",   src: "img/portfolio/x/gallery/1.jpg" }
               The first item is shown first (a local video there plays automatically, muted).
   description The text under the slider. It is HTML, written between the ` ` back-ticks:
                 <p>Paragraph</p>   <b>bold</b>   <ul><li>bullet</li></ul>
                 <h3>Sub-heading</h3>   <img src="img/portfolio/x/diagram.png">
   links       (optional) buttons under the description, e.g. code or live demo.
                 { label: "View code", url: "https://github.com/...", icon: "fa-brands fa-github" }
                 { label: "Live demo", url: "https://...",            icon: "fa-solid fa-arrow-up-right-from-square" }
               Use links: [] for none.
   ===================================================================== */

const PROJECTS = [
  // ---------------- Project 1 (personal) ----------------
  {
    id: "project-1",
    category: "personal",
    featured: true,
    title: "Marble Sort",
    subtitle: "Full Pipeline Development",
    thumbnail: "img/portfolio/project-1/MarbelSort.jpg",
    media: [
      //{ type: "video", src: "img/portfolio/project-1/video.mp4" },
      { type: "image", src: "img/portfolio/project-1/gallery/1.jpg" },
      { type: "image", src: "img/portfolio/project-1/gallery/2.jpg" },
      { type: "image", src: "img/portfolio/project-1/gallery/3.jpg" },
      { type: "image", src: "img/portfolio/project-1/gallery/4.jpg" },
      { type: "image", src: "img/portfolio/project-1/gallery/5.jpg" },
    ],
    description: `
        <p><strong>Marble Chin (Marble Sort) is a colour-sorting puzzle game where players guide marbles along a track into containers of the same colour.</strong></p>
        <p>Players choose which container to open next, and the order matters. A wrong choice fills up the track and can cost the level. Levels get harder as players progress, adding hidden colours and locked containers, and helpers like magnets and swaps can get them out of a tight spot. The game has Persian-language menus and an Iranian-inspired visual style.</p>
        <h3>My Contributions</h3>
        <ul>
            <li>Built the whole game from scratch as a solo developer, from the core gameplay through to the release build.</li>
            <li>Implemented the core mechanics: marbles moving along the track, choosing containers, sorting by colour, and the lose condition when the track fills up.</li>
            <li>Designed and built levels that get gradually harder, adding hidden colours and locked containers.</li>
            <li>Developed the in-game helpers, such as magnets and swaps.</li>
            <li>Created the Persian-language UI and menus with an Iranian-inspired design, plus visual effects and feedback.</li>
            <li>Handled the full game loop, including level progression, win and lose screens, and saving player progress.</li>
        </ul>
        `,
    links: [
      {
        label: "Get it on Cafe Bazaar",
        url: "https://cafebazaar.ir/app/com.epicade.marble",
        icon: "fa-solid fa-bag-shopping",
      },
    ],
  },

  // ---------------- Project 2 (team) ----------------
  {
    id: "project-2",
    category: "team",
    featured: true,
    title: "Golmorad",
    subtitle: "Medrick Game Studio",
    thumbnail: "img/portfolio/project-2/Golmorad.jpg",
    media: [
      { type: "video", src: "img/portfolio/project-2/video.mp4" },
      { type: "image", src: "img/portfolio/project-2/gallery/1.jpg" },
      { type: "image", src: "img/portfolio/project-2/gallery/2.jpg" },
      { type: "image", src: "img/portfolio/project-2/gallery/3.jpg" },
      { type: "image", src: "img/portfolio/project-2/gallery/4.jpg" },
      { type: "image", src: "img/portfolio/project-2/gallery/5.jpg" },
      { type: "image", src: "img/portfolio/project-2/gallery/6.jpg" },
      { type: "image", src: "img/portfolio/project-2/gallery/7.jpg" },
    ],
    description: `
        <p><strong>Golmorad is a Persian romantic match-3 puzzle game. Players help Golmorad and his wife, Elham, restore his childhood home, which has been empty for years.</strong></p>
        <p>Players match fruit to solve puzzles and earn rewards, then use those rewards to rebuild and decorate the house in their own style. Along the way they meet a cast of characters and move the love story forward. The game also has leaderboards, competitions with friends, and challenges with in-game and cash prizes.</p>
        <h3>My Contributions</h3>
        <ul>
            <li><b>Space Mission:</b> developed a multi-stage competitive event, connecting its progression, rankings, simulated opponents and start/end flow to the game's lobby, tutorial and UI.</li>
            <li><b>Mini Missions (Inspector &amp; Capsule):</b> built a shared, configurable mission core that automatically tracks activities such as level wins, item collection and Season Pass progress. Both variants share the same logic for saving progress, moving through mission stages and claiming reward chests, each with its own UI and tutorial.</li>
            <li><b>Swamp Quest:</b> implemented the full event flow, from entering the lobby and showing progress to finishing the competition and claiming rewards. Fixed the lobby layout for different screen ratios and handled event behaviour when the player is offline.</li>
            <li><b>Journey Offer:</b> developed a staged purchase offer driven by the player's win count, connecting win tracking and offer progress to price and discount display, bundle purchase and reward delivery.</li>
            <li><b>LiveOps architecture &amp; tools:</b> built these features on the project's semi-hexagonal architecture, keeping event logic, configuration and UI in separate layers. Added GameAnalytics event tracking, debug tools for simulating progress, and event content loading with Unity Addressables.</li>
        </ul>
        `,
    links: [
      {
        label: "Get it on Cafe Bazaar",
        url: "https://cafebazaar.ir/app/com.medrick.match3",
        icon: "fa-solid fa-bag-shopping",
      },
    ],
  },

  // ---------------- Project 3 (team) ----------------
  {
    id: "project-3",
    category: "team",
    featured: true,
    title: "Hokm",
    subtitle: "Medrick Game Studio",
    thumbnail: "img/portfolio/project-3/Hokm.png",
    media: [
      { type: "image", src: "img/portfolio/project-3/gallery/1.jpg" },
      { type: "image", src: "img/portfolio/project-3/gallery/2.jpg" },
      { type: "image", src: "img/portfolio/project-3/gallery/3.jpg" },
      { type: "image", src: "img/portfolio/project-3/gallery/4.jpg" },
      { type: "image", src: "img/portfolio/project-3/gallery/5.jpg" },
    ],
    description: `
        <p><strong>Hokm Plus is a mobile version of Hokm, Iran's most popular card game. It follows the traditional rules and recreates the feel of playing on a Persian carpet with friends.</strong></p>
        <p>Players team up with a real online partner against AI opponents to win tricks, declare trump, and climb the weekly leaderboard. The game has customisable profiles and avatars, 33 card-back designs, six carpet-style backgrounds, adjustable game speed, and a detailed scoreboard for reviewing every hand. Players can also resume a saved match, and they earn rewards through daily bonuses, a Wheel of Fortune and VIP mode.</p>
        <h3>My Contributions</h3>
        <ul>
            <li>Added localisation with English and Arabic support, making the game multilingual.</li>
            <li>Connected the game client to a redesigned backend, moving its communication layer onto the new APIs and protocols.</li>
            <li>Rewrote the interfaces and adapters in the communication layer to match the backend changes and handle data exchange between client and server correctly.</li>
        </ul>
        `,
    links: [
      {
        label: "Get it on Cafe Bazaar",
        url: "https://cafebazaar.ir/app/com.xalopex.hokm",
        icon: "fa-solid fa-bag-shopping",
      },
    ],
  },

  // ---------------- Project 4 (Personal) ----------------
  {
    id: "project-4",
    category: "personal",
    featured: true,
    title: "Battleship",
    subtitle: "Full Pipeline Development",
    thumbnail: "img/portfolio/project-4/battleship.jpg",
    media: [
      { type: "video", src: "img/portfolio/project-4/video.mp4" },
      { type: "image", src: "img/portfolio/project-4/gallery/2.jpg" },
      { type: "image", src: "img/portfolio/project-4/gallery/3.jpg" },
      { type: "image", src: "img/portfolio/project-4/gallery/4.jpg" },
      { type: "image", src: "img/portfolio/project-4/gallery/5.jpg" },
      { type: "image", src: "img/portfolio/project-4/gallery/6.jpg" },
      { type: "image", src: "img/portfolio/project-4/gallery/7.jpg" },
    ],
    description: `
        <p><strong>A turn-based naval strategy game inspired by the classic Battleship. Players place a fleet of five ships on a hexagonal grid and take turns attacking the opponent's map to sink their fleet.</strong></p>
        <p>This version goes beyond the classic: each ship carries its own special ability, powered by an energy system. Radar, sonar, mines, shields, multi-stage attacks and airstrikes add a layer of tactics on top of guessing. Players can take on an AI opponent in single-player mode or challenge friends in online multiplayer.</p>
        <h3>My Contributions</h3>
        <ul>
            <li>Built the fleet placement system on a hexagonal grid, with drag-and-drop, 60° rotation, boundary checks and collision detection to stop ships overlapping.</li>
            <li>Implemented the turn-based combat logic: targeting, recording each shot, calculating damage, sinking ships and deciding the winner.</li>
            <li>Developed the single-player AI, including random but always valid fleet placement and an attack system that only targets valid tiles.</li>
            <li>Created the special abilities: Radar, Sonar, Mines, Shields, multi-stage attacks and airstrikes. For airstrikes, the player picks a starting tile and a flight direction and sees the attack path before firing.</li>
            <li>Stored ship and ability data in ScriptableObjects, so designers can tune ship attributes, ability effects and energy costs directly in the Unity Inspector.</li>
            <li>Added animated transitions between the two maps, visual effects for hits and sinking ships, and a UI showing whose turn it is and how much energy is left.</li>
            <li>Built online multiplayer with Photon PUN, covering creating and joining rooms and keeping ship layouts, turns and shot results in sync between players.</li>
        </ul>
        `,
    links: [],
  },

  // ---------------- Project 5 (team) ----------------
  {
    id: "project-5",
    category: "team",
    featured: true,
    title: "The 100 Competition",
    subtitle: "TV Game Show",
    thumbnail: "img/portfolio/project-5/100.jpg",
    media: [
      //{ type: "video", src: "img/portfolio/project-5/video.mp4" },
      { type: "image", src: "img/portfolio/project-5/gallery/1.jfif" },
      { type: "image", src: "img/portfolio/project-5/gallery/2.jfif" },
      { type: "image", src: "img/portfolio/project-5/gallery/3.jpg" },
      { type: "image", src: "img/portfolio/project-5/gallery/4.png" },
    ],
    description: `
            <p><strong>An interactive system behind Iran's largest televised trivia and general knowledge competition, which ran for five seasons of 12 episodes each.</strong></p>
            <p>Each contestant starts with one square on a 10×10 grid. Every round, the system picks a challenger, who takes on a neighbouring player. Questions come as images, video or audio clips, with no multiple-choice options, and each player has 45 seconds to answer. The winner takes the opponent's square, and play continues until one champion remains. The show was designed and produced by Mohsen Najafi Solari, with Iman Ghiasi as project manager.</p>
            <h3>My Contributions</h3>
            <ul>
                <li>Developed, maintained and improved an interactive system used in a live TV game show, getting it ready for new broadcast seasons.</li>
                <li>Found and fixed existing bugs and technical issues, making the system more stable and reliable during live use.</li>
                <li>Built a Debug Mode to speed up testing, troubleshooting and performance analysis across the project's components.</li>
                <li>Made the technical and visual updates each new season needed, and managed, configured and prepared the software builds.</li>
            </ul>
        `,
    links: [],
  },

//   // ---------------- Project 6 (team) ----------------
//   {
//     id: "project-6",
//     category: "team",
//     featured: true,
//     title: "Solitaire TriPeaks Save Animal",
//     subtitle: "Baxter Games Studio",
//     thumbnail: "img/portfolio/project-6/icon.png",
//     media: [
//       //{ type: "video", src: "img/portfolio/project-6/video.mp4" },
//       { type: "image", src: "img/portfolio/project-6/gallery/1.png" },
//       { type: "image", src: "img/portfolio/project-6/gallery/2.png" },
//       { type: "image", src: "img/portfolio/project-6/gallery/3.png" },
//       { type: "image", src: "img/portfolio/project-6/gallery/4.png" },
//       { type: "image", src: "img/portfolio/project-6/gallery/5.png" },
//     ],
//     description: `
//         <p><strong>Solitaire TriPeaks Save Animals is a casual TriPeaks solitaire game where players clear card levels to rescue animals captured by hunters across a chain of islands.</strong></p>
//         <p>Each island holds a captured animal. Players complete its levels to earn the rewards that unlock the animal's cage and open up the next island. Two companions, Finley the cat and Riley the rabbit, guide players along the way. The game has many levels, themed card designs for each island, events, and offline play that runs smoothly on any device.</p>
//         <h3>My Contributions</h3>
//         <ul>
//             <li>[Your contribution or achievement 1]</li>
//             <li>[Your contribution or achievement 2]</li>
//             <li>[Your contribution or achievement 3]</li>
//         </ul>
//         `,
//     links: [
//       {
//         label: "Get it on Google Play",
//         url: "https://play.google.com/store/apps/details?id=com.pantherandleopard.solitaire.tripeaks.cute.animals.journey",
//         icon: "fa-brands fa-google-play",
//       },
//       {
//         label: "Download on the App Store",
//         url: "https://apps.apple.com/us/app/solitare-a-different-solitaire/id6478083710",
//         icon: "fa-brands fa-app-store-ios",
//       },
//     ],
//   },
  // ---------------- Project 7 (team) ----------------
  {
    id: "project-7",
    category: "team",
    featured: true,
    title: "Merge Planes Idle Tycoon",
    subtitle: "Baxter Games Studio",
    thumbnail: "img/portfolio/project-7/mergePlane.png",
    media: [
      // { type: "video", src: "img/portfolio/project-7/video.mp4" },
      { type: "image", src: "img/portfolio/project-7/gallery/1.png" },
      { type: "image", src: "img/portfolio/project-7/gallery/2.png" },
      { type: "image", src: "img/portfolio/project-7/gallery/3.png" },
      { type: "image", src: "img/portfolio/project-7/gallery/4.png" },
      { type: "image", src: "img/portfolio/project-7/gallery/5.png" },
    ],
    description: `
        <p><strong>Merge Planes Idle Tycoon is a casual idle game where players merge planes, aircraft and spaceships into better models and build their own airport empire.</strong></p>
        <p>Players start with a single free plane, merge matching aircraft to unlock rarer ones, and send them around the runway to earn coins every time they cross the finish line. They spend those earnings upgrading the airport and growing the fleet. The game keeps earning while players are offline, runs smoothly on any device, and has events and rankings to compete for the top spot.</p>
        <h3>My Contributions</h3>
        <ul>
            <li>Developed and shipped new gameplay features to keep players engaged.</li>
            <li>Created and published iOS and Android builds.</li>
            <li>Maintained the live game, fixing bugs and keeping it stable across updates.</li>
            <li>Integrated in-app advertising using several ad packages.</li>
        </ul>
        `,
    links: [
      {
        label: "Get it on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.pantherandleopard.mergeplane",
        icon: "fa-brands fa-google-play",
      },
      {
        label: "Download on the App Store",
        url: "https://apps.apple.com/us/app/merge-planes-idle-tycoon-games/id1555043315",
        icon: "fa-brands fa-app-store-ios",
      },
    ],
  },
  // ---------------- Project 8 (personal) ----------------
  {
    id: "project-8",
    category: "personal",
    featured: true,
    title: "Top Down Defense",
    subtitle: "Top-Down Survival Action",
    thumbnail: "img/portfolio/project-8/gallery/1.png",
    media: [
      { type: "video", src: "img/portfolio/project-8/TopDownDemo.mp4" },
      { type: "image", src: "img/portfolio/project-8/gallery/1.png" },
      { type: "image", src: "img/portfolio/project-8/gallery/2.png" },
    ],
    description: `
        <p><strong>Top-Down Defense is a top-down survival action game in the style of Survivor.io. Players fight off endless waves of enemies, build a combination of abilities, and take on powerful bosses.</strong></p>
        <p>Players move around the arena while their character attacks automatically. Defeated enemies drop experience, and each level-up offers a choice of new abilities or upgrades, so every run plays out differently. The waves get tougher over time, and bosses with their own attack patterns test how well the player's build holds up.</p>
        <h3>My Contributions</h3>
        <ul>
            <li>Built the whole game from scratch as a solo developer.</li>
            <li>Animated Spine characters and controlled the IK targets of existing rigs at runtime.</li>
            <li>Implemented an ability selection system inspired by <i>Survivor.io</i>.</li>
            <li>Created 10 attack types and used the Strategy Pattern to decide which attacks each boss uses.</li>
        </ul>
        `,
    links: [],
  },
  // ---------------- Project 9 (personal) ----------------
  {
    id: "project-9",
    category: "personal",
    featured: true,
    title: "Cognitive Temple",
    subtitle: "Master Thesis . Research Game for Children",
    thumbnail: "img/portfolio/project-9/cognitiveTemple.png",
    media: [
      { type: "video", src: "img/portfolio/project-9/video.mp4" },
      { type: "image", src: "img/portfolio/project-9/gallery/1.png" },
      { type: "image", src: "img/portfolio/project-9/gallery/2.png" },
      { type: "image", src: "img/portfolio/project-9/gallery/4.png" },
      { type: "image", src: "img/portfolio/project-9/gallery/5.png" },
      { type: "image", src: "img/portfolio/project-9/gallery/6.png" },
      { type: "image", src: "img/portfolio/project-9/gallery/7.png" },
    ],
    description: `
        <p><strong>A 2D research game for children aged 6 to 12 that turns cognitive tasks for memory and attention into a story-driven adventure.</strong></p>
        <p>Players follow a narrative with short Persian dialogues and explore paths that link four mini-games. In Word Journal they remember highlighted words, in Color Bridge they guide a wagon by text colour, and in Rainforest Bees they track moving bees. The journey ends in the Final Cave, where a spatial memory challenge leads to a treasure chest. Each player's results decide where they go next, and their performance is recorded for research analysis.</p>
        <h3>My Contributions</h3>
        <ul>
            <li>Built the whole game in Unity, linking four mini-games through a narrative, short Persian dialogues and path exploration.</li>
            <li><b>Word Journal:</b> a word-memory task where players memorise words highlighted in yellow and later pick out the ones they have seen.</li>
            <li><b>Color Bridge:</b> players steer a wagon to the gate that matches the colour of the displayed text. A correct choice repairs the bridge, and a wrong one plays an animation of the wagon falling into the water.</li>
            <li><b>Rainforest Bees:</b> players memorise the "honey-hat" bees and find them again after they move, with two paths of different difficulty.</li>
            <li><b>Final Cave:</b> a Corsi-style spatial memory task on 3×3, 4×4 and 5×5 grids. Players repeat the order in which the stones light up to move through the rooms and reach the treasure chest.</li>
            <li>Built a configurable progression system. In the current setup, a score of 80% or more moves the player forward, below 20% moves them back one section, and anything in between repeats the current section.</li>
            <li>Logged scores, response times and progression paths against participant codes in JSONL and CSV files for research analysis.</li>
            <li>Created developer tools for quickly testing game stages and outcomes.</li>
        </ul>
        `,
    links: [],
  },
  // ---------------- Project 10 (team) ----------------
  {
    id: "project-10",
    category: "team",
    featured: true,
    title: "Battle Cry",
    subtitle: "Epicade Game Studio · Unity · FishNet",
    thumbnail: "img/portfolio/project-10/BattleCry.png",
    media: [
      { type: "video", src: "img/portfolio/project-10/Epicade_Portfolio.mp4" },
      { type: "image", src: "img/portfolio/project-10/gallery/1.png" },
      { type: "image", src: "img/portfolio/project-10/gallery/2.png" },
      { type: "image", src: "img/portfolio/project-10/gallery/3.png" },
      { type: "image", src: "img/portfolio/project-10/gallery/4.png" },
      { type: "image", src: "img/portfolio/project-10/gallery/5.jpeg" },
      { type: "image", src: "img/portfolio/project-10/gallery/6.png" },
      { type: "image", src: "img/portfolio/project-10/gallery/7.png" },
    ],
    description: `
        <p><strong>An online two-player game built around seven mini-games, known as the "Seven Trials". Players pick a team of characters and compete head to head across all seven.</strong></p>
        <p>Before a match, each player chooses seven characters from their roster. Seven mini-games are then picked at random, and for each one the player sends in one of their characters and uses that character's unique abilities to win. Deciding which character to use in which trial is a key part of the strategy.</p>
        <h3>My Contributions</h3>
        <ul>
            <li>Implemented the core gameplay, including character selection, the random choice of mini-games, and each character's abilities within the mini-games.</li>
            <li>Built the online multiplayer infrastructure with FishNet, keeping players, game state and match flow in sync between the two players.</li>
        </ul>
        `,
    links: [],
  },
  // ---------------- Project 11 (personal) ----------------
  {
    id: "project-11",
    category: "personal",
    featured: true,
    title: "Rotate Rings",
    subtitle: "Puzzle · Unity · Mobile",
    thumbnail: "img/portfolio/project-11/rotateRings.png",
    media: [
      { type: "video", src: "img/portfolio/project-11/video.mp4" },
      { type: "image", src: "img/portfolio/project-11/gallery/1.png" },
      { type: "image", src: "img/portfolio/project-11/gallery/2.png" },
      { type: "image", src: "img/portfolio/project-11/gallery/3.png" },
    ],
    description: `
        <p><strong>Rotate Rings is a puzzle game where players rotate rings and slide movable pieces to break their connections and set the rings free.</strong></p>
        <p>Each move changes how the pieces connect. Once a ring is free, it bursts and disappears, and the level is complete when every target ring has been released. Movement limits and collisions turn each level into a small logic challenge that rewards thinking a few moves ahead.</p>
        <h3>My Contributions</h3>
        <ul>
            <li>Built the ring-rotation and piece-sliding mechanics, with movement limited to allowed directions and collision logic that stops pieces passing through each other.</li>
            <li>Implemented the connection and release logic. After every move, connections are re-checked, and any ring that becomes free bursts automatically with a particle effect.</li>
            <li>Built 10 puzzle levels in Unity, with the full game loop: starting a level, retrying, a win screen after the last ring bursts, moving to the next level, and saving player progress.</li>
        </ul>
        `,
    links: [],
  },
  // ---------------- Project 12 (team) ----------------
  {
    id: "project-12",
    category: "team",
    featured: true,
    title: "Mench Baz",
    subtitle: "Medrick Game Studio · Online Multiplayer Ludo ",
    thumbnail: "img/portfolio/project-12/Mench.png",
    media: [
      { type: "video", src: "img/portfolio/project-12/video.mp4" },
      { type: "image", src: "img/portfolio/project-12/gallery/1.png" },
      { type: "image", src: "img/portfolio/project-12/gallery/2.png" },
      { type: "image", src: "img/portfolio/project-12/gallery/3.png" },
      { type: "image", src: "img/portfolio/project-12/gallery/4.png" },
    ],
    description: `
        <p><strong>Mench Baz is an online multiplayer take on the classic Mench (Ludo) board game, with built-in voice chat, friend invites and a nationwide leaderboard.</strong></p>
        <p>Players compete in 2-player, 4-player, group or offline matches. They can chat by voice and send animated emojis during games, show off exclusive dice and boards, and climb the rankings to compete for monthly prizes against top players from across the country.</p>
        <h3>My Contributions: iOS Version</h3>
        <ul>
            <li>Ported the game, originally built for Android, to iOS, including setting up the development environment and build process for the new platform.</li>
            <li>Found and fixed platform-compatibility issues, and configured the dependencies and services the game needs to run correctly on iOS.</li>
            <li>Checked that third-party services, including ads, analytics and voice chat, worked properly in the iOS version.</li>
            <li>Produced the first working iOS build and tested it on real devices to confirm gameplay, voice chat and core features worked as expected.</li>
        </ul>
        `,
    links: [
      {
        label: "Get it on Cafe Bazaar",
        url: "https://cafebazaar.ir/app/com.medrick.ludo",
        icon: "fa-solid fa-bag-shopping",
      },
    ],
  },
];
