const numInput = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  let heightWidth = 30;
  let divString = "";

  for (let i = 1; i <= amount; i++) {
    divString += `<div id="box${i}" style="background-color: ${getRandomHexColor()}; height: ${heightWidth}px; width: ${heightWidth}px;"></div>`;
    heightWidth += 10;
  }
  boxes.innerHTML = divString;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

create.addEventListener("click", () => {
  const amount = numInput.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    numInput.value = "";
  }
});
destroy.addEventListener("click", () => {
  destroyBoxes();
});
