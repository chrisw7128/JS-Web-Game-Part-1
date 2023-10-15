// function newImage(source, left, bottom) {
//   let item = document.createElement("img");
//   item.src = source;
//   item.style.position = "fixed";
//   item.style.left = left;
//   item.style.bottom = bottom;
//   document.body.append(item);
//   return item;
// }

// let greenCharacter = newImage("./assets/green-character.gif", "100px", "100px");

// let pineTree = newImage("./assets/pine-tree.png", "450px", "200px");

// let tree = newImage("./assets/tree.png", "200px", "300px");

// let pillar = newImage("./assets/pillar.png", "350px", "100px");

// let crate = newImage("./assets/crate.png", "150px", "200px");

// let well = newImage("./assets/well.png", "500px", "425px");

// function newItem(source, left, bottom) {
//   let object = newImage(source, left, bottom);

//   item.addEventListener("dblclick", function () {
//     item.remove();
//   });
// }

// let sword = newItem("./assets/sword.png", "500px", "405px");

// let shield = newItem("./assets/sheild.png", "165px", "185px");

// let staff = newItem("./assets/staff.png", "600px", "100px");

// // function tile(url, left, bottom, width, height) {
// //   for (let h = 0; h < height; h++) {
// //     for (let w = 0; w < width; w++) {
// //       newImage(url, left + w * 100, bottom + h * 100);
// //     }
// //   }
// // }

// // let horizon = window.innerHeight / 1.75;
// // let heightOfSky = window.innerHeight - horizon;
// // let heightOfGrass = horizon;

// // tile(
// //   "./assets/sky.png",
// //   0,
// //   horizon,
// //   window.innerWidth / 100,
// //   heightOfSky / 100
// // );
// // tile("./assets/grass.png", 0, 0, window.innerWidth / 100, heightOfGrass / 100);

function newImage(asset, source, posLeft, posBottom) {
  let newElem = document.createElement("img");
  newElem.src = `assets/${source}`;
  newElem.style.position = "fixed";
  newElem.style.left = posLeft;
  newElem.style.bottom = posBottom;
  document.body.append(newElem);
  return asset;
}

function newItem(asset, source, posLeft, posBottom) {
  let newElem = document.createElement("img");
  newElem.src = `assets/${source}`;
  newElem.style.position = "fixed";
  newElem.style.left = posLeft;
  newElem.style.bottom = posBottom;
  newElem.addEventListener("dblclick", function () {
    newElem.remove();
  });
  document.body.append(newElem);
  return asset;
}

newImage("greenCharacter", "green-character.gif", "100px", "100px");
newImage("pineTree", "pine-tree.png", "450px", "200px");
newImage("tree", "tree.png", "200px", "300px");
newImage("pillar", "pillar.png", "350px", "100px");
newImage("crate", "crate.png", "150px", "200px");
newImage("well", "well.png", "500px", "425px");

newItem("sword", "sword.png", "500px", "405px");
newItem("shield", "sheild.png", "165px", "185px");
newItem("staff", "staff.png", "600px", "100px");
