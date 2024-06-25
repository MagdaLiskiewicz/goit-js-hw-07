const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  const nameValue = textInput.value.trim();

  if (nameValue === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = nameValue;
  }
});
