document.addEventListener("DOMContentLoaded", () => {
    let list = document.getElementById("list");
    let limit = 20;
    let offset = 0;
  
    function loadItems() {
      for (let i = offset; i < offset + limit; i++) {
        const item = document.createElement("div");
        item.textContent = "Item " + i;
        list.appendChild(item);
      }
      offset += limit;
    }
  
    loadItems();  // Initial load
  
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadItems();
      }
    });
  });
  