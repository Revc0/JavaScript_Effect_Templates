document.addEventListener("DOMContentLoaded", () => {
    const items = ["Apple", "Banana", "Orange", "Grapes"];
    const searchInput = document.getElementById("search");
    const result = document.getElementById("result");
  
    searchInput.addEventListener("input", function() {
      const query = this.value.toLowerCase();
      let matches = items.filter(item => item.toLowerCase().includes(query));
  
      result.innerHTML = "";
      matches.forEach(match => {
        const li = document.createElement("li");
        li.textContent = match;
        result.appendChild(li);
      });
    });
  });
  