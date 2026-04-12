document.addEventListener("DOMContentLoaded", () => {

  /* SCROLL ANIMATIONS */
  const elements = document.querySelectorAll(".fade, .slide-up, .slide-left, .slide-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));

  /* ORDER BUTTONS */
  const buttons = document.querySelectorAll(".order-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const box = document.querySelector(".app-select");
      if (box) box.classList.toggle("hidden");
    });
  });

});
