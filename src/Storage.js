import storage from "./storage.json";
//import* as storage from "./storage.json";
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
//need to split the level from
//the name
class tier {
  constructor(name) {
    this.tier = name;
    this.ID = 0;
    this.total = 0;
  }
}

function read() {
  //take what is in storage
  //assign it to a variable
  //array format
  let town = storage.towns;
  let tiers = town.tiers;
  //console prints
  let x = 0;

  while (town[x] != null) {
    console.log("-----------------");
    console.log("Town: " + town[x].town);
    console.log("Silver: " + town[x].silver);
    console.log("Total Storage: " + town[x].storageSize);
    console.log("Used Storage: " + town[x].usedStorage);
    console.log("Tier: " + town[x].tiers[0]);
    let eek = town[0].tiers[x + 2];
    console.log(eek);
    x++;
  }
}
read();
