const translations = {

de:{
nav_about:"Über uns",
nav_me:"Über mich",
nav_price:"Anfrage",
nav_contact:"Kontakt",

hero_title:"Willkommen bei GeraNet",
hero_p1:"Wir erstellen moderne und einfache Webseiten für kleine Projekte.",
hero_p2:"Jede Website wird individuell und mit viel Liebe erstellt.",
hero_btn:"Anfrage senden",

about_title:"Über GeraNet",
about_p1:"GeraNet ist ein kleines Jugendprojekt aus Gera.",
about_p2:"Wir erstellen Webseiten mit Fokus auf Design und Einfachheit.",
about_p3:"Alles wird individuell entwickelt.",
about_p4:"Uns ist wichtig, dass jede Website persönlich wirkt.",

me_title:"Über mich",
me_text:"Hallo! Ich bin Vadim Zawadski, Gründer von GeraNet. Ich bin aus der Ukraine, geboren am 05.01.2012 und 14 Jahre alt. Ich habe Zerebralparese und benutze einen Rollstuhl, aber das hält mich nicht davon ab, in Gera zu lernen und meine Projekte zu entwickeln. Ich lebe aktiv und positiv.",

price_title:"Anfrage",
order_title:"Website anfragen",
order_text1:"Hast du eine Idee oder ein Projekt?",
order_text2:"Schreibe uns direkt über Telegram oder Instagram.",
order_text3:"Ich beantworte jede Anfrage persönlich.",
order_text4:"Der Preis hängt von der Komplexität ab.",

contact_title:"Kontakt",
contact_text:"Schreibe uns jederzeit über Telegram oder Instagram."
},

ru:{
nav_about:"О нас",
nav_me:"Обо мне",
nav_price:"Запрос",
nav_contact:"Контакт",

hero_title:"Добро пожаловать в GeraNet",
hero_p1:"Мы создаём простые и современные сайты для проектов.",
hero_p2:"Каждый сайт делается индивидуально.",
hero_btn:"Отправить запрос",

about_title:"О GeraNet",
about_p1:"GeraNet — подростковый проект из Гера.",
about_p2:"Мы делаем сайты просто и красиво.",
about_p3:"Каждый проект индивидуальный.",
about_p4:"Важно, чтобы сайт был живым.",

me_title:"Обо мне",
me_text:"Привет! Я Вадим Завадский, создатель GeraNet. Я из Украины, родился 05.01.2012, мне 14 лет. У меня ДЦП, я использую коляску, но это не мешает мне учиться в Gera и делать проекты. Я живу активно и развиваюсь.",

price_title:"Запрос",
order_title:"Заказать сайт",
order_text1:"Есть идея или проект?",
order_text2:"Пиши в Telegram или Instagram.",
order_text3:"Я лично отвечаю на все сообщения.",
order_text4:"Цена зависит от сложности.",

contact_title:"Контакт",
contact_text:"Пиши в любое время."
},

ua:{
nav_about:"Про нас",
nav_me:"Про мене",
nav_price:"Запит",
nav_contact:"Контакт",

hero_title:"Ласкаво просимо в GeraNet",
hero_p1:"Ми створюємо прості та сучасні сайти.",
hero_p2:"Кожен сайт індивідуальний.",
hero_btn:"Надіслати запит",

about_title:"Про GeraNet",
about_p1:"GeraNet — підлітковий проєкт з Гера.",
about_p2:"Ми робимо сайти просто і красиво.",
about_p3:"Кожен проєкт індивідуальний.",
about_p4:"Важливо, щоб сайт був живим.",

me_title:"Про мене",
me_text:"Привіт! Я Вадим Завадський, засновник GeraNet. Я з України, народився 05.01.2012, мені 14 років. У мене ДЦП, я використовую візок, але це не заважає мені навчатися в Gera та розвивати проєкти. Я живу активно і розвиваюсь.",

price_title:"Запит",
order_title:"Замовити сайт",
order_text1:"Є ідея або проєкт?",
order_text2:"Пиши в Telegram або Instagram.",
order_text3:"Я особисто відповідаю на всі повідомлення.",
order_text4:"Ціна залежить від складності.",

contact_title:"Контакт",
contact_text:"Пиши у будь-який час."
}

};

function typeText(el, text, speed=15){
  el.textContent="";
  let i=0;
  function run(){
    if(i<text.length){
      el.textContent += text[i];
      i++;
      setTimeout(run,speed);
    }
  }
  run();
}

function setLang(lang){

document.querySelectorAll("[data-lang]").forEach(el=>{
const key = el.getAttribute("data-lang");
if(translations[lang][key]){
el.textContent = translations[lang][key];
}
});

const title = document.querySelector(".typing-title");
const text = document.querySelector(".typing-text");

if(title){
typeText(title, translations[lang].me_title);
}

if(text){
text.classList.add("show");
setTimeout(()=>{
typeText(text, translations[lang].me_text);
},400);
}

}

setLang("de");

document.getElementById("lang").addEventListener("change",(e)=>{
setLang(e.target.value);
});
