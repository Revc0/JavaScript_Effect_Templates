const hoverElement = document.getElementById("hoverElement");
const tooltip = document.getElementById("tooltip");
let tooltipTimer;

hoverElement.addEventListener("mouseover", function() {
  tooltipTimer = setTimeout(function() {
    const rect = hoverElement.getBoundingClientRect();
    tooltip.style.left = rect.left + "px";
    tooltip.style.top = rect.top + rect.height + "px";
    tooltip.style.display = "block";
  }, 1000); // 1-second delay
});

hoverElement.addEventListener("mouseout", function() {
  clearTimeout(tooltipTimer);
  tooltip.style.display = "none";
});
