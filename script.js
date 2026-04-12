const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el=>{
  observer.observe(el);
});

const translations = {

de:{
nav_home:"Start",
nav_about:"Über uns",
nav_price:"Preise",
nav_docs:"Dokumente",
nav_contact:"Kontakt",

hero_title:"Moderne Webseiten für dein Business",
hero_sub1:"Schnelle und mobile Webseiten für Unternehmen und Projekte.",
hero_sub2:"Klare Struktur und individuelles Design.",
hero_btn:"Pakete ansehen",

about_title:"Über GeraNet",
about_text:"GeraNet ist ein Jugendprojekt aus Deutschland, das moderne Webseiten entwickelt.",
about_text2:"Fokus: Design, Geschwindigkeit und Mobile-Optimierung.",
about_text3:"Ziel ist es, einfache, moderne und funktionale Webseiten zu erstellen.",

price_title:"Preise & Pakete",
p1_title:"Visitenkarte",
p1_text:"Einseitige Website",
p2_title:"Business Website",
p2_text:"Mehrseitige Website",

docs_title:"Dokumente",

contact_title:"Kontakt",
contact_text:"Nur Telegram oder Instagram"
},

ru:{
nav_home:"Главная",
nav_about:"О нас",
nav_price:"Цены",
nav_docs:"Документы",
nav_contact:"Контакт",

hero_title:"Современные сайты для бизнеса",
hero_sub1:"Быстрые и мобильные сайты для проектов.",
hero_sub2:"Чистый дизайн и структура.",
hero_btn:"Смотреть пакеты",

about_title:"О GeraNet",
about_text:"GeraNet — подростковый проект из Германии, создающий сайты.",
about_text2:"Фокус: дизайн, скорость и мобильная оптимизация.",
about_text3:"Цель — простые и современные сайты.",

price_title:"Цены и пакеты",
p1_title:"Визитка",
p1_text:"Одностраничный сайт",
p2_title:"Бизнес сайт",
p2_text:"Многостраничный сайт",

docs_title:"Документы",

contact_title:"Контакты",
contact_text:"Только Telegram или Instagram"
},

ua:{
nav_home:"Головна",
nav_about:"Про нас",
nav_price:"Ціни",
nav_docs:"Документи",
nav_contact:"Контакт",

hero_title:"Сучасні сайти для бізнесу",
hero_sub1:"Швидкі мобільні сайти.",
hero_sub2:"Чистий дизайн і структура.",
hero_btn:"Дивитись пакети",

about_title:"Про GeraNet",
about_text:"GeraNet — підлітковий проєкт з Німеччини.",
about_text2:"Фокус: дизайн і мобільність.",
about_text3:"Мета — прості сучасні сайти.",

price_title:"Ціни і пакети",
p1_title:"Візитка",
p1_text:"Односторінковий сайт",
p2_title:"Бізнес сайт",
p2_text:"Багатосторінковий сайт",

docs_title:"Документи",

contact_title:"Контакти",
contact_text:"Тільки Telegram або Instagram"
}

};

document.getElementById("lang").addEventListener("change",(e)=>{
const lang = e.target.value;

document.querySelectorAll("[data-lang]").forEach(el=>{
const key = el.getAttribute("data-lang");
if(translations[lang][key]){
el.textContent = translations[lang][key];
}
});
});
