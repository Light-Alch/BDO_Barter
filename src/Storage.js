import storage from "./storage.json";
//import React from "react";
//import* as storage from "./storage.json";
//town object
class Town {
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

function readMap() {
  let townMap = new Map(Object.entries(storage.towns));
  let tiers = 0,
    y = 0;
  //console.log(townMap);
  //return townMap;
  for (let [key] of townMap) {
    console.log("-----------------");
    console.log("Town: " + townMap.get(key).town);
    console.log("Silver: " + townMap.get(key).silver);
    //update values example
    //townMap.get("0").silver = 2000;
    console.log("Total Storage: " + townMap.get(key).storageSize);
    console.log("Used Storage: " + townMap.get(key).usedStorage);
    console.log("----Inventory----");
    //console.log(Object.keys(townMap.get(key)||{}).length);
    //console.log("[Level 1] " + townMap.get(key).tiers[tiers].level_1[y].name);
    while (tiers < Object.keys(townMap.get(key) || {}).length) {
      if (
        y < Object.keys(townMap.get(key).tiers[tiers].level_1 || {}).length &&
        tiers === 0
      ) {
        //console.log("here");
        console.log(
          "[level 1]" +
            townMap.get(key).tiers[tiers].level_1[y].name +
            " " +
            townMap.get(key).tiers[tiers].level_1[y].total
        );
        y++;
      } else if (
        y < Object.keys(townMap.get(key).tiers[tiers].level_2 || {}).length &&
        tiers === 1
      ) {
        console.log(
          "[level 2]" + townMap.get(key).tiers[tiers].level_2[y].name
        );
        y++;
      } else if (
        y < Object.keys(townMap.get(key).tiers[tiers].level_3 || {}).length &&
        tiers === 2
      ) {
        console.log(
          "[level 3]" + townMap.get(key).tiers[tiers].level_3[y].name
        );
        y++;
      } else if (
        y < Object.keys(townMap.get(key).tiers[tiers].level_4 || {}).length &&
        tiers === 3
      ) {
        console.log(
          "[level 4]" + townMap.get(key).tiers[tiers].level_4[y].name
        );
        y++;
      } else if (
        y < Object.keys(townMap.get(key).tiers[tiers].level_5 || {}).length &&
        tiers === 4
      ) {
        console.log(
          "[level 5]" + townMap.get(key).tiers[tiers].level_5[y].name
        );
        y++;
      }
      if (y === 14 || y === 19) {
        y = 0;
        tiers++;
      }
    }
    tiers = 0;
  }
  //console.log("Total: "+townMap.get("0").tiers[0].level_1[0].total);
  //testing how to update the tiers
  //townMap.get("0").tiers[0].level_1[0].total = 0;
  //console.log("[Level 1] "+townMap.get("0").tiers[0].level_1[0].total);
}
readMap();

function writeMap(saveMap) {
  var fs = require("fs");

  fs.writeFile("./object.json", JSON.stringify(saveMap, null, 4), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
}
//writeMap(readMap);

//function Read() {
//take what is in storage
//assign it to a variable
//array format

//let town = storage.towns;

//console prints
//let x = 0;

//while (town[x] != null) {
//console.log("-----------------");
//console.log("Town: " + town[x].town);
//console.log("Silver: " + town[x].silver);
//console.log("Total Storage: " + town[x].storageSize);
//console.log("Used Storage: " + town[x].usedStorage);
//console.log("towns #: " + Object.keys(town[x].tiers[x].level_1).length);
//console.log("X:" + x);
//tiers loop
//let y = 0;
//let tiers = 0;
//loop through the tiers
//console.log("----Inventory----");
//while (tiers < 5) {
//if (
// y < Object.keys(town[x].tiers[tiers].level_1 || {}).length &&
//  tiers === 0
//) {
//  console.log("[level 1]" + town[x].tiers[tiers].level_1[y].name);
//  y++;
//} else if (
//  y < Object.keys(town[x].tiers[tiers].level_2 || {}).length &&
//  tiers === 1
//) {
// console.log("[level 2]" + town[x].tiers[tiers].level_2[y].name);
// y++;
//} else if (
// y < Object.keys(town[x].tiers[tiers].level_3 || {}).length &&
// tiers === 2
//) {
//  console.log("[level 3]" + town[x].tiers[tiers].level_3[y].name);
//  y++;
//} else if (
// y < Object.keys(town[x].tiers[tiers].level_4 || {}).length &&
//  tiers === 3
//) {
//  console.log("[level 4]" + town[x].tiers[tiers].level_4[y].name);
//  y++;
//} else if (
//  y < Object.keys(town[x].tiers[tiers].level_5 || {}).length &&
//  tiers === 4
//) {
//  console.log("[level 5]" + town[x].tiers[tiers].level_5[y].name);
//  y++;
//}
//this poses an issue with tier 5 barter items
//since there is more than 14 items
//// if (y === 14 || y === 19) {
//  y = 0;
//  tiers++;
// }
//}
//tiers = 0;
//x++;
//}
//}
//Read();
