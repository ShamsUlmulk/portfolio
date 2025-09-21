// script.js

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach(sec => {
      const secTop = sec.getBoundingClientRect().top;
      if (secTop < triggerBottom) {
        sec.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  // initial
  revealOnScroll();
});
