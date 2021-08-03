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
  // the and is to stop it from going out of bounds
  //so will eventually need to find the # of towns for x
  //ex: x < towns.length
  while (town[x] != null) {
    console.log("-----------------");
    console.log("Town: " + town[x].town);
    console.log("Silver: " + town[x].silver);
    console.log("Total Storage: " + town[x].storageSize);
    console.log("Used Storage: " + town[x].usedStorage);
    //console.log("towns #: " + Object.keys(town).length);
    //console.log("X:" + x);
    console.log(town[x].town + " length:" + Object.keys(town).length);
    //constant issue of not changing level
    //Object.keys(town[x].tiers[x].level_1
    //need to find a work around, inner function maybe?
    // for (
    //  let y = 0;
    //  x < Object.keys(town).length - 1 &&
    // y < (Object.keys(town[x].tiers[x].level_1).length);
    // y++
    //) {
    //console.log(
    //"Tier " + (x + 1) + ": " + Object.values(town[x].tiers[tier].level_1[y])
    //);
    // console.log("[level 1]" + town[x].tiers[x].level_1[y].name);
    //}
    //practice to access other tiers
    //for (
    //  let y = 0;
    //  x < Object.keys(town).length - 1 &&
    //  y < Object.keys(town[x].tiers[x].level_1).length;
    //  y++
    //) {
    //console.log(
    //"Tier " + (x + 1) + ": " + Object.values(town[x].tiers[tier].level_1[y])
    //);
    // console.log("[level 2]" + town[x].tiers[x + 1].level_2[y].name);
    //}

    x++;
  }
}
read();
