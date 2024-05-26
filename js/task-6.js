const numInput = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
let amount = undefined;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let heightWidth = 30;
  boxes.innerHTML = "";

  for (let i = 1; i <= amount; i++) {
    boxes.insertAdjacentHTML("beforeend", `<div id="box${i}"></div>`);
    const tempBox = document.querySelector(`#box${i}`);
    tempBox.style.backgroundColor = getRandomHexColor();
    tempBox.style.height = `${heightWidth}px`;
    tempBox.style.width = `${heightWidth}px`;
    heightWidth += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

numInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value;

  if (value < 1 || value > 100) {
    amount = undefined;
  } else amount = value;
});

create.addEventListener("click", () => {
  createBoxes(amount);
  numInput.value = "";
});
destroy.addEventListener("click", () => {
  destroyBoxes();
});
