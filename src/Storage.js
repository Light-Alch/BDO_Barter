import storage from "./storage.json";
//import* as storage from "./storage.json";
//town object
class town {
  constructor(name) {
    //town
    this.town = name;
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
//need to split the level from
//the name
class tier {
  constructor(name) {
    this.tier = name;
    this.id = 0;
    this.total = 0;
  }
}

function read() {
  //take what is in storage
  //assign it to a variable
  //array format
  let town = storage.towns;

  //console prints
  let x = 0;

  while (town[x] != null) {
    console.log("-----------------");
    console.log("Town: " + town[x].town);
    console.log("Silver: " + town[x].silver);
    console.log("Total Storage: " + town[x].storageSize);
    console.log("Used Storage: " + town[x].usedStorage);
    //console.log("towns #: " + Object.keys(town[x].tiers[x].level_1).length);
    //console.log("X:" + x);
    //tiers loop
    let y = 0;
    let tiers = 0;
    //loop through the tiers
    console.log("----Inventory----");
    while (tiers < 5) {
      if (
        y < Object.keys(town[x].tiers[tiers].level_1 || {}).length &&
        tiers === 0
      ) {
        console.log("[level 1]" + town[x].tiers[tiers].level_1[y].name);
        y++;
      } else if (
        y < Object.keys(town[x].tiers[tiers].level_2 || {}).length &&
        tiers === 1
      ) {
        console.log("[level 2]" + town[x].tiers[tiers].level_2[y].name);
        y++;
      } else if (
        y < Object.keys(town[x].tiers[tiers].level_3 || {}).length &&
        tiers === 2
      ) {
        console.log("[level 3]" + town[x].tiers[tiers].level_3[y].name);
        y++;
      } else if (
        y < Object.keys(town[x].tiers[tiers].level_4 || {}).length &&
        tiers === 3
      ) {
        console.log("[level 4]" + town[x].tiers[tiers].level_4[y].name);
        y++;
      } else if (
        y < Object.keys(town[x].tiers[tiers].level_5 || {}).length &&
        tiers === 4
      ) {
        console.log("[level 5]" + town[x].tiers[tiers].level_5[y].name);
        y++;
      }
      //this poses an issue with tier 5 barter items
      //since there is more than 14 items
      if (y === 14) {
        y = 0;
        tiers++;
      }
    }
    tiers = 0;
    x++;
  }
}
read();
