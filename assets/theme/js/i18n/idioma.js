import Polyglot from "node-polyglot";
// import your language objects
import english from "./locale/en/en.js";
import espanol from "./locale/es/es.js";

//https://codesandbox.io/s/q8jj39jmp4?file=/src/index.js:1754-1779

let polyglot;

function control_idioma(){
    polyglot = new Polyglot();
    polyglot.extend(getLocale());
    cargarTextos();
}

function cambiarIdioma(locale){
    if(locale == "en")
    {
        polyglot.locale("en");
        polyglot.extend(english);
    }  
    if(locale == "es")
    {
        polyglot.locale("es");
        polyglot.extend(espanol);
    }  
    cargarTextos();
}

function isSpanish(){
    // Define the users location with the object the browser provides for you
    const userLanguage = navigator.language;
    // Stores the other language you support
    const spanish = "es";

    return userLanguage.includes(spanish);
}

// Locale function - gets the users language preferences
function getLocale() {
    
    // Define the language object you'll be returning
    let languageObj;

    if (isSpanish()) {
      languageObj = espanol;
    } else {
      languageObj = english;
    }

    return languageObj;
  }

  function cargarTextos(){
    //polyglot.t("Hello World")
    document.getElementById("identificiador_1").innerHTML = polyglot.t("identificiador_1");
    document.getElementById("identificiador_2").innerHTML = polyglot.t("identificiador_2");
    document.getElementById("identificiador_3").innerHTML = polyglot.t("identificiador_3");
    
  }

  export {control_idioma,cambiarIdioma,isSpanish};