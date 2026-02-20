function toggleTheme(){
  document.body.classList.toggle("dark");
}

/* Scroll Animation */
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

faders.forEach(el=>observer.observe(el));

/* Multi Language */
const texts = {
  de:{
    about:"Über uns",
    price:"Preise",
    hero_title:"GeraNet – Webseiten für dein Business",
    hero_text:"Moderne Webseiten für kleine Unternehmen.",
    about_title:"Professionelle Webseiten",
    about_text:"Wir erstellen moderne Websites für lokale Unternehmen.",
    price_title:"Unsere Preise",
    card1_title:"Website",
    card1_text:"1 Seite, modern",
    card2_title:"Business",
    card2_text:"Mehrere Seiten"
  },
  ua:{
    about:"Про нас",
    price:"Ціни",
    hero_title:"GeraNet – Сайти для твого бізнесу",
    hero_text:"Сучасні сайти для малого бізнесу.",
    about_title:"Професійні сайти",
    about_text:"Ми створюємо сучасні сайти для локального бізнесу.",
    price_title:"Наші ціни",
    card1_title:"Сайт",
    card1_text:"1 сторінка, сучасний",
    card2_title:"Бізнес",
    card2_text:"Кілька сторінок"
  },
  ru:{
    about:"О нас",
    price:"Цены",
    hero_title:"GeraNet – Сайты для бизнеса",
    hero_text:"Современные сайты для малого бизнеса.",
    about_title:"Профессиональные сайты",
    about_text:"Мы создаём современные сайты для локального бизнеса.",
    price_title:"Наши цены",
    card1_title:"Сайт",
    card1_text:"1 страница, современный",
    card2_title:"Бизнес",
    card2_text:"Несколько страниц"
  },
  en:{
    about:"About",
    price:"Prices",
    hero_title:"GeraNet – Websites for your business",
    hero_text:"Modern websites for small businesses.",
    about_title:"Professional Websites",
    about_text:"We create modern websites for local businesses.",
    price_title:"Our Prices",
    card1_title:"Website",
    card1_text:"1 page, modern",
    card2_title:"Business",
    card2_text:"Multiple pages"
  }
};

function setLang(lang){
  document.querySelectorAll(".lang-text").forEach(el=>{
    const key = el.dataset.key;
    if(texts[lang][key]){
      el.innerText = texts[lang][key];
    }
  });
}
