document.addEventListener("DOMContentLoaded", () => {
    function updateParallax() {
      let layers = document.querySelectorAll('.parallax-layer');
      let scrollTop = window.pageYOffset;
      
      layers.forEach(layer => {
        let speed = parseFloat(layer.getAttribute('data-speed'));
        let yPos = -(scrollTop * speed);
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
      });
    }
  
    window.addEventListener('scroll', updateParallax);
  });
  