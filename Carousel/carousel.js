document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".slide");
    let index = 0;
  
    function moveSlides() {
      slides.forEach((slide, i) => {
        slide.style.left = ((i - index) * 300) + "px";
      });
      index = (index + 1) % slides.length;
    }
  
    moveSlides(); // Initialize the first slide
    setInterval(moveSlides, 3000); // Move slide every 3 seconds
  });
  