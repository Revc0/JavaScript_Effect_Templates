document.querySelector("a[href='#section']").addEventListener("click", (e) => {
    e.preventDefault();
    const element = document.getElementById("section");
    element.scrollIntoView({ behavior: "smooth" });
  });
  