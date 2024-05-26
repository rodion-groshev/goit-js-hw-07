const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  if (inputValue.trim().length === 0) {
    return (nameOutput.textContent = "Anonymous");
  }
  nameOutput.textContent = inputValue.trim();
});
