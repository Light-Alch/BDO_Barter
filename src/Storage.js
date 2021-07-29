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
  let tier = 0;
  while (town[x] != null) {
    console.log("-----------------");
    console.log("Town: " + town[x].town);
    console.log("Silver: " + town[x].silver);
    console.log("Total Storage: " + town[x].storageSize);
    console.log("Used Storage: " + town[x].usedStorage);
    let eek = town[0].tiers[x];
    for (let y = 0; y < Object.keys(town[x].tiers[0].level_1).length; y++) {
      console.log(
        "Tier " + x + ": " + Object.values(town[x].tiers[tier].level_1[y])
      );
    }
    console.log(eek);
    x++;
  }
}
read();
