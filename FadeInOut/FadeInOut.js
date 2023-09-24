document.addEventListener("DOMContentLoaded", () => {
    let fadeBox = document.getElementById("fadeBox");
    let visible = false;
  
    function fade() {
      if (visible) {
        fadeBox.style.opacity = 0;
      } else {
        fadeBox.style.opacity = 1;
      }
      visible = !visible;
    }
  
    setInterval(fade, 2000); // Fade in and out every 2 seconds
  });
  