const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

const genreLabel = document.getElementById('genreLabel')
const genres = [
    'Platformer', 'Shooter', 'Fighter', 'Brawler', 'Stealth', 'Survival', 'Rhythm', 'Battle Royale',
    'Survival Horror', 'Metroidvania', 'Sandbox',
    'Point & Click', 'Visual Novel', 'Interactive Movie', 'Walking Simulator',
    'Action RPG', 'Classic RPG', 'MMORPG', 'Rouguelike / Rouguelite', 'Tacticle RPG',
    'Real-Time Strategy', 'Turn-Based Strategy', '4X', 'Tower Defense', 'MOBA',
    'Life Simulation', 'CMS', 'Vehicle / Flight Simulation',
    'Idle Simulator'
]
document.getElementById('genreButton').addEventListener('click', async function() {
    for (let i = 0; i < 5; i++) {
        genreLabel.textContent = getRandom(genres)
        await wait(100)
    }
})


const themeLabel = document.getElementById('themeLabel')
const themes = [
  "Fantasy & Medieval",
  "Sci-Fi & Space Exploration",
  "Cyberpunk & Dystopian",
  "Post-Apocalyptic",
  "Horror & Survival",
  "Wild West & Frontier",
  "Ancient Mythology & History",
  "Steampunk",
  "Modern Military & War",
  "Mystery & Detective",
  "Underwater & Aquatic",
  "Cartoon & Whimsical",
  "Sports & Arcade",
  "Supernatural & Occult",
  "Neo-Noir"
];
document.getElementById('themeButton').addEventListener('click', async function() {
    for (let i = 0; i < 5; i++) {
        themeLabel.textContent = getRandom(themes)
        await wait(100)
    }
})


const artLabel = document.getElementById('artstyleLabel')
const artStyles = [
  "2D Cartoon / Cel-Shaded",
  "Pixel Art (8-bit / 16-bit)",
  "Voxel Art",
  "Vector Art",
  "Low Poly",
  "High-Fidelity Realism (Photorealism)",
  "Stylized Realism",
  "Anime / Manga",
  "Hand-Drawn / Watercolor",
  "Noir / Monochrome",
  "Cyberpunk / Neon-Noir",
  "Steampunk / Dieselpunk",
  "Retro 3D (PS1 / N64 era)",
  "Chibi / Super Deformed",
  "Claymation / Stop-Motion",
  "ASCII Art / Text-Based",
  "Gothic / Dark Fantasy",
  "Minimalist / Abstract"
];
document.getElementById('artstyleButton').addEventListener('click', async function() {
    for (let i = 0; i < 5; i++) {
        artLabel.textContent = getRandom(artStyles)
        await wait(100)
    }
})


const constraintLabel = document.getElementById('constraintLabel')
const constraints = [
    "One-button controls", "Inverted controls", "Controls change randomly over time", "Mouse only", "Keyboard only", "Voice controls only", "Two players share one controller", "Delayed input actions", "No stopping movement", "Movement grid-locked",

    "Strict time limit per level", "Time moves only when you move", "Game speed increases every minute", "Must finish in under 10 seconds", "Actions must match a musical beat", "Day and night cycle affects mechanics", "Slow motion is the default state", "Cooldowns on every single action",

    "One hit point only (Fragile)", "Ammunition is also your health pool", "No jumping allowed", "No attacking allowed (Pacifist)", "Weapons degrade after three uses", "Inventory limited to a single item", "Can only move backwards", "Health constantly drains over time", "Attacking costs movement stamina",

    "Complete blindness (Audio cues only)", "Screen flashes with every action", "No user interface or HUD", "View restricted to a tiny spotlight", "Black and white visuals only", "Camera angle changes every 30 seconds", "Text-based interface only", "Wireframe or vector graphics style",

    "Permadeath (Reset to absolute beginning)", "Losing an item loses it permanently", "Every death mutates the player", "Score resets if you take damage", "Levels must be beaten in reverse order", "Upgrades always come with a downside", "Randomized loadout at spawn", "Enemies mirror your exact movements"
];
document.getElementById('constraintButton').addEventListener('click', async function() {
    for (let i = 0; i < 5; i++) {
        constraintLabel.textContent = getRandom(constraints)
        await wait(100)
    }
})


const mechanicLabel = document.getElementById('mechanicLabel')
const mechanics = [
  "Grappling hook / gun",
  "Teleportation",
  "Dash / Dodge roll",
  "Skill trees / Ability unlocks",
  "Loot drops / RNG rewards",
  "Day/Night cycle",
  "Procedural generation / Random generation",
  "Crafting / Resource management",
  "Fast travel",
  "Permadeath / Roguelike mechanics",
  "Stamina meter",
  "Double jump / Wall running",
  "Stealth / Line of sight tracking",
  "Bullet time / Time dilation",
  "Base building / Housing",
  "Companion / Pet system",
  "Status effects / Elemental damage",
  "Combo counters / Style points",
  "Fog of war / Minimap exploration",
  "Morality / Choice system"
];
document.getElementById('mechanicButton').addEventListener('click', async function() {
    for (let i = 0; i < 5; i++) {
        mechanicLabel.textContent = getRandom(mechanics)
        await wait(100)
    }
})