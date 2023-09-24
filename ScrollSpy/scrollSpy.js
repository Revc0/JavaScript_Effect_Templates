document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#scrollSpy a");
  
    sections.forEach((section, index) => {
      if (window.scrollY >= section.offsetTop) {
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  });
  