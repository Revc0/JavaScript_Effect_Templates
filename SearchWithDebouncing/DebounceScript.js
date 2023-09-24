document.addEventListener("DOMContentLoaded", () => {
    const items = ["Apple", "Banana", "Orange", "Grapes"];
    const searchInput = document.getElementById("search");
    const result = document.getElementById("result");
  
    let timeout;
  
    function search(query) {
      const matches = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  
      result.innerHTML = "";
      matches.forEach(match => {
        const li = document.createElement("li");
        li.textContent = match;
        result.appendChild(li);
      });
    }
  
    searchInput.addEventListener("input", function() {
      clearTimeout(timeout);
  
      timeout = setTimeout(() => {
        search(this.value);
      }, 300);
    });
  });
  