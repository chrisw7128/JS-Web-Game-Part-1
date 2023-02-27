function newImage(source, left, bottom) {
  let item = document.createElement("img");
  item.src = source;
  item.style.position = "fixed";
  item.style.left = left;
  item.style.bottom = bottom;
  document.body.append(item);
  return item;
}

let greenCharacter = newImage("./assets/green-character.gif", "100px", "100px");

let pineTree = newImage("./assets/pine-tree.png", "450px", "200px");

let tree = newImage("./assets/tree.png", "200px", "300px");

let pillar = newImage("./assets/pillar.png", "350px", "100px");

let crate = newImage("./assets/crate.png", "150px", "200px");

let well = newImage("./assets/well.png", "500px", "425px");

function newItem(source, left, bottom) {
  let object = newImage(source, left, bottom);

  item.addEventListener("dblclick", function () {
    item.remove();
  });
}

let sword = newItem("./assets/sword.png", "500px", "405px");

let shield = newItem("./assets/sheild.png", "165px", "185px");

let staff = newItem("./assets/staff.png", "600px", "100px");
