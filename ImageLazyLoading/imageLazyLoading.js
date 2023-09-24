document.addEventListener("DOMContentLoaded", () => {
    let lazyImages = [].slice.call(document.querySelectorAll(".lazy-load"));
  
    let lazyLoad = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy-load");
          observer.unobserve(lazyImage);
        }
      });
    });
  
    lazyImages.forEach(lazyImage => {
      lazyLoad.observe(lazyImage);
    });
  });
  