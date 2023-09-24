const typewriter = document.getElementById("typewriter");
const text = "Typewriter Effect!";
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text[index];
    index++;
    setTimeout(type, 100);  // Speed of typing
  }
}

type();
