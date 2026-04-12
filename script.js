/* =====================
   SCROLL ANIMATIONS
===================== */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".reveal,.card").forEach(el=>{
  observer.observe(el);
});

/* =====================
   NAV BLUR ON SCROLL
===================== */
window.addEventListener("scroll",()=>{
  document.querySelector("nav").classList.toggle("scrolled",window.scrollY>50);
});

/* =====================
   PARALLAX EFFECT
===================== */
window.addEventListener("scroll",()=>{
  document.querySelector(".parallax").style.transform =
    `translateY(${window.scrollY * 0.3}px)`;
});

/* =====================
   TYPING ANIMATION
===================== */
const text = "GeraNet Studio";
let i=0;
function type(){
  if(i<text.length){
    document.querySelector(".typing").innerHTML += text[i];
    i++;
    setTimeout(type,100);
  }
}
type();

/* =====================
   RIPPLE EFFECT FIX
===================== */
document.querySelectorAll(".ripple").forEach(btn=>{
  btn.addEventListener("click",function(e){
    const ripple = document.createElement("span");
    ripple.classList.add("rip");
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(),600);
  });
});

/* =====================
   LANGUAGE SWITCH
===================== */
const translations = {
  de:{
    aboutTitle:"Über uns",
    aboutText:"Wir erstellen moderne Webseiten mit Fokus auf Design.",
    contact:"Kontakt",
    desc:"Moderne Webseiten & digitale Lösungen für dein Business."
  },
  ua:{
    aboutTitle:"Про нас",
    aboutText:"Ми створюємо сучасні сайти з акцентом на дизайн.",
    contact:"Контакт",
    desc:"Сучасні вебсайти та цифрові рішення для бізнесу."
  },
  ru:{
    aboutTitle:"О нас",
    aboutText:"Мы создаём современные сайты с акцентом на дизайн.",
    contact:"Контакт",
    desc:"Современные сайты и цифровые решения для бизнеса."
  }
};

document.getElementById("lang").addEventListener("change",(e)=>{
  const lang = e.target.value;
  document.querySelectorAll("[data-lang]").forEach(el=>{
    el.innerText = translations[lang][el.getAttribute("data-lang")];
  });
});
