function toggleTheme(){
  document.body.classList.toggle("dark");
}

/* Scroll animation */
const faders=document.querySelectorAll(".fade");

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

faders.forEach(el=>observer.observe(el));

/* Multi language */
const texts={
  de:{
    about:"Über uns",
    price:"Preise",
    hero_title:"Webseiten für dein Business",
    hero_text:"Moderne & professionelle Websites für kleine Unternehmen.",
    hero_btn:"Jetzt starten",
    about_title:"Professionelle Webseiten",
    about_text:"Wir erstellen moderne Webseiten.",
    price_title:"Unsere Preise",
    card1_title:"Website",
    card1_text:"1 Seite",
    card2_title:"Business",
    card2_text:"Mehrere Seiten",
    card3_title:"Premium",
    card3_text:"Premium Design",
    order_btn:"Bestellen"
  },
  ua:{
    about:"Про нас",
    price:"Ціни",
    hero_title:"Сайти для твого бізнесу",
    hero_text:"Сучасні професійні сайти.",
    hero_btn:"Почати",
    about_title:"Професійні сайти",
    about_text:"Ми створюємо сучасні сайти.",
    price_title:"Наші ціни",
    card1_title:"Сайт",
    card1_text:"1 сторінка",
    card2_title:"Бізнес",
    card2_text:"Кілька сторінок",
    card3_title:"Преміум",
    card3_text:"Преміум дизайн",
    order_btn:"Замовити"
  },
  ru:{
    about:"О нас",
    price:"Цены",
    hero_title:"Сайты для бизнеса",
    hero_text:"Современные профессиональные сайты.",
    hero_btn:"Начать",
    about_title:"Профессиональные сайты",
    about_text:"Мы создаём современные сайты.",
    price_title:"Наши цены",
    card1_title:"Сайт",
    card1_text:"1 страница",
    card2_title:"Бизнес",
    card2_text:"Несколько страниц",
    card3_title:"Премиум",
    card3_text:"Премиум дизайн",
    order_btn:"Заказать"
  },
  en:{
    about:"About",
    price:"Prices",
    hero_title:"Websites for your business",
    hero_text:"Modern professional websites.",
    hero_btn:"Start",
    about_title:"Professional Websites",
    about_text:"We create modern websites.",
    price_title:"Our Prices",
    card1_title:"Website",
    card1_text:"1 page",
    card2_title:"Business",
    card2_text:"Multiple pages",
    card3_title:"Premium",
    card3_text:"Premium design",
    order_btn:"Order"
  }
};

document.getElementById("language-select")
.addEventListener("change",function(){
  const lang=this.value;
  document.querySelectorAll(".lang-text").forEach(el=>{
    const key=el.dataset.key;
    if(texts[lang][key]){
      el.innerText=texts[lang][key];
    }
  });
});
