const zoomElement = document.getElementById("zoomElement");

zoomElement.addEventListener("mouseover", () => {
  zoomElement.style.transform = "scale(1.5)";
});

zoomElement.addEventListener("mouseout", () => {
  zoomElement.style.transform = "scale(1)";
});
