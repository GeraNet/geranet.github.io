// script.js

// Функция для анимаций при скролле
window.onload = function() {
  const faders = document.querySelectorAll(".fade, .slide-up, .slide-left, .slide-right");

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Включаем тёмную тему сразу
  toggleTheme();
};

// Функция для тёмной темы
function toggleTheme() {
  // Плавный переход для всех элементов
  document.body.style.transition = "all 0.4s ease";

  // Фон и текст страницы
  document.body.style.backgroundColor = "#121212";
  document.body.style.color = "#f0f0f0";

  // Кнопки
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.style.backgroundColor = "#1f1f1f";
    btn.style.color = "#f0f0f0";
    btn.style.border = "1px solid #f0f0f0";
    btn.style.transition = "all 0.4s ease";
  });

  // Карточки (Preise, etc.)
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.backgroundColor = "#1a1a1a";
    card.style.color = "#f0f0f0";
    card.style.border = "1px solid #333";
    card.style.transition = "all 0.4s ease";
  });

  // Навигация
  const nav = document.querySelector("nav");
  if (nav) {
    nav.style.backgroundColor = "#1a1a1a";
    nav.style.color = "#f0f0f0";
    nav.style.transition = "all 0.4s ease";
  }

  // Hero-секция кнопка
  const heroBtn = document.querySelector("#hero .btn");
  if (heroBtn) {
    heroBtn.style.backgroundColor = "#1f1f1f";
    heroBtn.style.color = "#f0f0f0";
    heroBtn.style.border = "1px solid #f0f0f0";
    heroBtn.style.transition = "all 0.4s ease";
  }
}
