const ansiColors = require("./ansicolors");

const townInfo = [
  {
    x: 0,
    y: 0,
    desc: `${ansiColors.fgGreen}Fisherman's Cove${ansiColors.default} - The bustling heart of the coastal town, where fishermen gather to share tales and trade their catches.\n`,
  },
  {
    x: -1,
    y: 0,
    desc: `${ansiColors.fgGreen}Coastal Pier${ansiColors.default} - A sturdy pier extending into the ocean, used by fishermen to dock their boats and unload their daily hauls.\n`,
  },
  {
    x: 1,
    y: 0,
    desc: `${ansiColors.fgGreen}Fish Market${ansiColors.default} - An open-air market along the coast, where fresh seafood is sold to locals and travelers alike.\n`,
  },
  {
    x: 0,
    y: 1,
    desc: `${ansiColors.fgGreen}Lighthouse Hill${ansiColors.default} - A gentle hill overlooking the town, crowned by a majestic lighthouse that guides ships safely to shore.\n`,
  },
  {
    x: 0,
    y: -1,
    desc: `${ansiColors.fgGreen}Seaside Inn${ansiColors.default} - A welcoming inn nestled by the shore, providing accommodations for visitors and weary sailors.\n`,
  },
  {
    x: -1,
    y: 1,
    desc: `${ansiColors.fgGreen}Cliffside Overlook${ansiColors.default} - A rocky cliff with a panoramic view of the ocean, a favorite spot for contemplation and meditation.\n`,
  },
  {
    x: 1,
    y: 1,
    desc: `${ansiColors.fgGreen}Captain's Quarters${ansiColors.default} - The residence of the town's skilled ship captains, adorned with nautical decorations and maps.\n`,
  },
  {
    x: -1,
    y: -1,
    desc: `${ansiColors.fgGreen}Sandy Beach${ansiColors.default} - A pristine sandy beach along the coast, a perfect spot for picnics and relaxation.\n`,
  },
  {
    x: 1,
    y: -1,
    desc: `${ansiColors.fgGreen}Fishing Gear Shop${ansiColors.default} - A quaint shop selling fishing equipment and supplies to enthusiasts and professionals alike.\n`,
  },
  {
    x: -2,
    y: 0,
    desc: `${ansiColors.fgGreen}Quiet Cove${ansiColors.default} - A secluded cove to the west, known for its tranquility and hidden underwater treasures.\n`,
  },
  {
    x: 2,
    y: 0,
    desc: `${ansiColors.fgGreen}Whale Watching Point${ansiColors.default} - A high point to the east, offering breathtaking views of passing whales in the deep ocean.\n`,
  },
  {
    x: 0,
    y: 2,
    desc: `${ansiColors.fgGreen}Fisherman's Statue${ansiColors.default} - A statue in the town square honoring the legendary founder of Fisherman's Cove, a master fisherman.\n`,
  },
  {
    x: 0,
    y: -2,
    desc: `${ansiColors.fgGreen}Seashell Cove${ansiColors.default} - A cove to the south, famous for its abundance of colorful seashells and marine life.\n`,
  },
  // Open Areas
  {
    x: -2,
    y: 1,
    desc: `${ansiColors.fgGreen}Open Waters${ansiColors.default} - Vast open waters stretching to the west, where ships sail freely.\n`,
  },
  {
    x: 2,
    y: 1,
    desc: `${ansiColors.fgGreen}Open Horizon${ansiColors.default} - An expansive view of the open ocean to the east, where the sky meets the sea.\n`,
  },
  {
    x: -2,
    y: -1,
    desc: `${ansiColors.fgGreen}Coastal Dunes${ansiColors.default} - Gentle dunes to the southwest, shaped by the wind and sea breeze.\n`,
  },
  {
    x: 2,
    y: -1,
    desc: `${ansiColors.fgGreen}Open Seascape${ansiColors.default} - A wide seascape to the southeast, offering an unobstructed view of the horizon.\n`,
  },
  {
    x: -1,
    y: 2,
    desc: `${ansiColors.fgGreen}Open Skies${ansiColors.default} - A vast expanse of open skies to the north, where seagulls soar freely.\n`,
  },
  {
    x: 1,
    y: 2,
    desc: `${ansiColors.fgGreen}Calm Waters${ansiColors.default} - Calm and still waters to the north, creating a serene atmosphere.\n`,
  },
  {
    x: -1,
    y: -2,
    desc: `${ansiColors.fgGreen}Open Shoreline${ansiColors.default} - An open shoreline to the southwest, where waves gently lap against the sandy beach.\n`,
  },
  {
    x: 1,
    y: -2,
    desc: `${ansiColors.fgGreen}Seaside Horizon${ansiColors.default} - A clear view of the open seas to the southeast, with distant ships on the horizon.\n`,
  },
  // More Specific Locations
  {
    x: -2,
    y: 2,
    desc: `${ansiColors.fgGreen}Maritime Museum${ansiColors.default} - A museum in the northwest, showcasing the rich maritime history and artifacts of Fisherman's Cove.\n`,
  },
  {
    x: 2,
    y: 2,
    desc: `${ansiColors.fgGreen}Fisherman's Guild Plaza${ansiColors.default} - A central plaza in the northeast, adorned with statues and fountains dedicated to the town's fishing heritage.\n`,
  },
  {
    x: -2,
    y: -2,
    desc: `${ansiColors.fgGreen}Oceanfront Picnic Area${ansiColors.default} - A peaceful area to the southwest, perfect for picnics and enjoying the sound of the waves.\n`,
  },
  {
    x: 2,
    y: -2,
    desc: `${ansiColors.fgGreen}Legendary Tidal Pool${ansiColors.default} - A tidal pool in the east\n`,
  },
];

module.exports = townInfo;
