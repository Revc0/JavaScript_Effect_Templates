const carousel = document.getElementById("carousel");
const indicators = document.getElementById("indicators");
let currentIndex = 0;

// Initialize indicators and carousel
const images = carousel.querySelectorAll("img");
images.forEach((img, index) => {
  const indicator = document.createElement("div");
  indicator.addEventListener("click", () => showImage(index));
  indicators.appendChild(indicator);
});

function showImage(index) {
  images[currentIndex].style.opacity = "0";
  images[index].style.opacity = "1";
  currentIndex = index;
}
