document.addEventListener("DOMContentLoaded", () => {
    let tabs = document.querySelectorAll(".tab");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", function() {
        let id = "tab" + this.getAttribute("data-tab");
        document.querySelectorAll(".tab-content").forEach(el => {
          el.classList.remove("active");
        });
        document.getElementById(id).classList.add("active");
      });
    });
  });
  