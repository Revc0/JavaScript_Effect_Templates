document.getElementById("submitButton").addEventListener("click", () => {
    const inputField = document.getElementById("inputField");
    if (inputField.value === "") {
      inputField.classList.add("shake");
      setTimeout(() => inputField.classList.remove("shake"), 500);
    }
  });
  