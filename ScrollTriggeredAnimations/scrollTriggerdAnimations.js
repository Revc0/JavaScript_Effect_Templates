document.addEventListener("DOMContentLoaded", () => {
    const animatedElement = document.getElementById("animatedElement");
  
    window.addEventListener("scroll", () => {
      const rect = animatedElement.getBoundingClientRect();
      
      if (rect.top < window.innerHeight) {
        animatedElement.classList.add("active");
      } else {
        animatedElement.classList.remove("active");
      }
    });
  });
  