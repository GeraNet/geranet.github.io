/* ================= DARK MODE ================= */
function toggleTheme(){
  document.body.classList.toggle("dark");
}

/* ================= SCROLL ANIMATION ================= */
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

elements.forEach(el=>observer.observe(el));

/* ================= MULTI-LANGUAGE ================= */
const texts = {
  de: {
    about: "Über uns",
    about_title: "Professionelle Webseiten für kleine Unternehmen",
    about_text: "GeraNet ist ein junges Webprojekt aus Gera. Wir erstellen moderne, mobil-optimierte Webseiten für lokale Unternehmen, Selbstständige und kreative Projekte.",
    about_text2: "Wir arbeiten entweder mit individuellem Code (HTML, CSS, JavaScript) oder erstellen professionelle Seiten mit Google Sites – je nach Wunsch des Kunden.",
    price: "Preise",
    price_title: "Unsere Preise",
    card1_title: "Website Visitenkarte",
    card1_text: "1 Seite, modern, mobil optimiert",
    card2_title: "Business Website",
    card2_text: "Mehr als 3 Seiten, individuelles Layout, Kontaktformular",
    card3_title: "Große Website",
    card3_text: "Viele Unterseiten, Premium Design, erweiterte Funktionen",
    card4_title: "Logo Design",
    card4_text: "Individuelles Logo, modern & minimalistisch",
    order_btn: "Jetzt bestellen"
  },
  ua: {
    about: "Про нас",
    about_title: "Професійні сайти для малого бізнесу",
    about_text: "GeraNet – молодий веб-проєкт із Гери. Ми створюємо сучасні адаптивні сайти для локальних бізнесів, підприємців та креативних проектів.",
    about_text2: "Ми працюємо або з індивідуальним кодом (HTML, CSS, JS), або створюємо сайти на Google Sites – за бажанням клієнта.",
    price: "Ціни",
    price_title: "Наші ціни",
    card1_title: "Сайт-візитка",
    card1_text: "1 сторінка, сучасний дизайн, адаптивний",
    card2_title: "Бізнес-сайт",
    card2_text: "Більше 3 сторінок, індивідуальне оформлення, контактна форма",
    card3_title: "Великий сайт",
    card3_text: "Багато сторінок, преміум дизайн, розширені функції",
    card4_title: "Дизайн логотипу",
    card4_text: "Індивідуальний логотип, сучасний та мінімалістичний",
    order_btn: "Замовити"
  },
  ru: {
    about: "О нас",
    about_title: "Профессиональные сайты для малого бизнеса",
    about_text: "GeraNet – молодой веб-проект из Геры. Мы создаём современные адаптивные сайты для локальных бизнесов, предпринимателей и креативных проектов.",
    about_text2: "Мы работаем либо с индивидуальным кодом (HTML, CSS, JS), либо создаем сайты на Google Sites – по желанию клиента.",
    price: "Цены",
    price_title: "Наши цены",
    card1_title: "Сайт-визитка",
    card1_text: "1 страница, современный дизайн, адаптивный",
    card2_title: "Бизнес-сайт",
    card2_text: "Больше 3 страниц, индивидуальное оформление, контактная форма",
    card3_title: "Большой сайт",
    card3_text: "Много страниц, премиум дизайн, расширенные функции",
    card4_title: "Дизайн логотипа",
    card4_text: "Индивидуальный логотип, современный и минималистичный",
    order_btn: "Заказать"
  },
  en: {
    about: "About",
    about_title: "Professional websites for small businesses",
    about_text: "GeraNet is a young web project from Gera. We create modern, mobile-friendly websites for local businesses, freelancers, and creative projects.",
    about_text2: "We either work with custom code (HTML, CSS, JS) or create professional sites with Google Sites – according to the client's wishes.",
    price: "Prices",
    price_title: "Our Prices",
    card1_title: "Business Card Website",
    card1_text: "1 page, modern, mobile-optimized",
    card2_title: "Business Website",
    card2_text: "More than 3 pages, custom layout, contact form",
    card3_title: "Large Website",
    card3_text: "Many pages, premium design, advanced features",
    card4_title: "Logo Design",
    card4_text: "Custom logo, modern & minimalist",
    order_btn: "Order now"
  }
};

function setLang(lang){
  document.querySelectorAll('.lang-text').forEach(el=>{
    const key = el.dataset.key;
    if(texts[lang][key]){
      el.innerText = texts[lang][key];
    }
  });
}
