const draggableElement = document.getElementById("draggableElement");
let offsetX, offsetY, isDragging = false;

draggableElement.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
  draggableElement.style.cursor = 'grabbing';
});

window.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    draggableElement.style.left = `${x}px`;
    draggableElement.style.top = `${y}px`;
  }
});

window.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    draggableElement.style.cursor = 'grab';
  }
});
