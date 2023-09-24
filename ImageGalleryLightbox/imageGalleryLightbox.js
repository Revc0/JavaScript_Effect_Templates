const galleryImages = document.querySelectorAll(".gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    lightboxImg.src = image.getAttribute("data-full");
    lightbox.classList.remove("hidden");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
