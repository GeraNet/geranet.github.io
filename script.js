window.onload = function(){
  const faders = document.querySelectorAll(".fade, .slide-up, .slide-left, .slide-right");

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader=>{
    appearOnScroll.observe(fader);
  });
};

function toggleTheme(){
  // Только тёмная тема
}
