function toggleTheme(){
  document.body.classList.toggle("dark");
}

const texts={
de:{
about:"Über uns",
price:"Preise",
contact:"Kontakt",
hero_title:"Webseiten für dein Business",
hero_text:"Wir erstellen moderne, mobil-optimierte Webseiten für lokale Unternehmen, Selbstständige und kreative Projekte.",
hero_btn:"Schreib uns auf Telegram",
about_title:"Professionelle Webseiten für kleine Unternehmen",
about_text1:"GeraNet ist ein junges Webprojekt aus Gera.",
about_text2:"Wir arbeiten mit individuellem Code oder Google Sites – je nach Wunsch des Kunden.",
price_title:"Unsere Preise",
card1_title:"Website Visitenkarte",
card1_text:"1 Seite, modern, mobil optimiert",
card2_title:"Business Website",
card2_text:"Mehr als 3 Seiten, individuelles Layout",
card3_title:"Große Website",
card3_text:"Viele Unterseiten, Premium Design",
card4_title:"Logo Design",
card4_text:"Individuelles Logo, modern & minimalistisch",
order_btn:"Bestellen",
contact_title:"Kontaktiere uns",
contact_btn:"Nachricht senden"
}
};

function setLanguage(lang){
document.querySelectorAll(".lang-text").forEach(el=>{
const key=el.dataset.key;
if(texts[lang] && texts[lang][key]){
el.innerText=texts[lang][key];
}
});
}

document.getElementById("language-select")
.addEventListener("change",function(){
setLanguage(this.value);
});

window.onload=function(){
setLanguage("de");
};
