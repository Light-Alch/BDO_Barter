import * as storage from "./storage.json";
//town object
class town {
  constructor(Name) {
    //town
    this.town = Name;
    //total silver worth in
    //town from barter items
    this.silver = 0;
    //total storage
    this.storageSize = 0;
    //used storage slots
    this.usedStorage = 0;
    //barter items by tier
  }
}

function read() {
  let town = storage.town;
  console.log("Town: " + town);
  console.log("Silver: " + storage.silver);
}
read();
function temp() {
  this.Tier1 = [
    "[Level 1] Dried Blue Rose	800001",
    "[Level 1] Giant Fish Bone	800002",
    "[Level 1] Naval Ration	800003",
    "[Level 1] Stained Seagull Figurine	800004",
    "[Level 1] Raft Toy	800005",
    "[Level 1] Chewy Raw Gizzard	800006",
    "[Level 1] Ancient Urn Piece	800007",
    "[Level 1] Unidentified Ancient Mural	800008",
    "[Level 1] Cherry Tree Seed Pouch	800009",
    "[Level 1] Golden Sand	800010",
    "[Level 1] Roa Flower Seed Pouch	800011",
    "[Level 1] Rakeflower Seed Pouch	800012",
    "[Level 1] Fertile Soil	800013",
    "[Level 1] Pirates' Gunpowder	800014"
  ];
  this.Tier2 = [
    "[Level 2] Islanders' Lunchbox	800015",
    "[Level 2] Cron Castle Gold Coin	800016",
    "[Level 2] Pirate Ship Mast	800017",
    "[Level 2] Opulent Marble	800018",
    "[Level 2] Filtered Drinking Water	800019",
    "[Level 2] Conch Shell Ornament	800020",
    "[Level 2] Supreme Oyster Box	800021",
    "[Level 2] Big Stone Slab	800022",
    "[Level 2] Narvo Sea Cucumber	800023",
    "[Level 2] Balanced Stone Pagoda	800024",
    "[Level 2] Sea Survival Kit	800025",
    "[Level 2] Monster Tentacle	800026",
    "[Level 2] Pirate Gold Coin	800027",
    "[Level 2] Urchin Spine	800028"
  ];
  this.Tier3 = [
    "[Level 3] Old Hourglass	800029",
    "[Level 3] Torn Pirate Treasure Map	800030",
    "[Level 3] Pirates' Supply Box	800031",
    "[Level 3] Scout Binoculars	800032",
    "[Level 3] Stalactite Fragment	800033",
    "[Level 3] Skull Decorated Teacup	800034",
    "[Level 3] Round Knife	800035",
    "[Level 3] Gooey Monster Blood	800036",
    "[Level 3] Weasel Leather Coat	800037",
    "[Level 3] Skull Symbol Carpet	800038",
    "[Level 3] Rare Herb Pile	800039",
    "[Level 3] Lopters Fishnet	800040",
    "[Level 3] Ancient Orders	800041",
    "[Level 3] Blue Candle Bundle	800042"
  ];
  this.Tier4 = [
    "[Level 4] Marine Knights' Helm	800043",
    "[Level 4] Stolen Pirate Dagger	800044",
    "[Level 4] Opulent Thread Spool	800045",
    "[Level 4] Amethyst Fragment	800046",
    "[Level 4] Marine Knights' Spear	800047",
    "[Level 4] Solidified Lava	800048",
    "[Level 4] Green Salt Lump	800049",
    "[Level 4] Boatman's Manual	800050",
    "[Level 4] Old Chest with Gold Coins	800051",
    "[Level 4] Seashell Deco	800052",
    "[Level 4] Panacea	800053",
    "[Level 4] Headless Dragon Figurine	800054",
    "[Level 4] Bronze Candlestick	800055",
    "[Level 4] Pirate's Key	800056"
  ];
  this.Tier5 = [
    "[Level 5] Octagonal Box	800057",
    "[Level 5] 37 Year Old Herbal Wine	800058",
    "[Level 5] Azure Quartz	800059",
    "[Level 5] Taxidermied Morpho Butterfly	800060",
    "[Level 5] Statue's Tear	800061",
    "[Level 5] Supreme Gold Candlestick	800062",
    "[Level 5] Faded Gold Dragon Figurine	800063",
    "[Level 5] Taxidermied White Caterpillar	800064",
    "[Level 5] Golden Fish Scale	800065",
    "[Level 5] 102 Year Old Golden Herb	800066",
    "[Level 5] Portrait of the Ancient	800067",
    "[Level 5] Elixir of Youth	800068",
    "[Level 5] Luxury Patterned Fabric	800069",
    "[Level 5] Mysterious Rock	800070",
    "[Level 5] Opulent Coral Trinket	800071",
    "[Level 5] Cox Pirates' Journal	800072",
    "[Level 5] Rust Repair Tool	800073,",
    "[Level 5] Otters Fish Hook	800074",
    "[Level 5] Observatory Report	800075"
  ];
}
