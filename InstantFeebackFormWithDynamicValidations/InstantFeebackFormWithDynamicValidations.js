const emailInput = document.getElementById("email");
const emailFeedback = document.getElementById("emailFeedback");

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  if (!isValid && email.length > 0) {
    emailFeedback.textContent = "Invalid email address";
    emailFeedback.style.display = "inline";
  } else {
    emailFeedback.style.display = "none";
  }
});
