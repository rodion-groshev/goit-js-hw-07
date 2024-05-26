function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const textSpan = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const bgcolor = getRandomHexColor();
  body.style.backgroundColor = bgcolor;
  textSpan.textContent = bgcolor;
});
