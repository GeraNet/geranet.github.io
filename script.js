window.onload = function(){

  const faders = document.querySelectorAll(".fade, .slide-up, .slide-left, .slide-right");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{
    threshold:0.1
  });

  faders.forEach(el=>observer.observe(el));

};
