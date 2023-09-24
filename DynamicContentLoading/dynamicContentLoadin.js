document.getElementById("loadContentBtn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        document.getElementById("content").innerHTML = data.body;
      });
  });
  