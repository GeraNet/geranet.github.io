window.onload = function(){
  // Анимации при скролле
  const faders = document.querySelectorAll(".fade, .slide-up, .slide-left, .slide-right");
  const appearOptions = {threshold:0, rootMargin:"0px 0px -50px 0px"};
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader=>appearOnScroll.observe(fader));

  // Тёмная тема
  toggleTheme();

  // Кнопки "Bestellen" - выбор приложения
  const orderBtns = document.querySelectorAll(".order-btn");
  orderBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
      const appSelect = btn.nextElementSibling;
      if(appSelect.classList.contains("hidden")){
        appSelect.classList.remove("hidden");
      }else{
        appSelect.classList.add("hidden");
      }
    });
  });
};

// Тёмная тема
function toggleTheme(){
  document.body.classList.add("dark");
  document.querySelectorAll(".card").forEach(c=>c.classList.add("dark"));
  document.querySelectorAll(".btn").forEach(b=>b.classList.add("dark"));
  const nav = document.querySelector("nav");
  if(nav) nav.classList.add("dark");
}
