document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll(".accordion-button");
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        let content = this.nextElementSibling;
        content.classList.toggle("active");
      });
    });
  });
  