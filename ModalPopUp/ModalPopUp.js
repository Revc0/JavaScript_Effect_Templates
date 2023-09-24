document.addEventListener("DOMContentLoaded", () => {
    let modal = document.getElementById("myModal");
    let openBtn = document.getElementById("openModalBtn");
    let closeBtn = document.getElementById("closeModalBtn");
  
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
  