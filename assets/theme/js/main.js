import { control_idioma,cambiarIdioma,isSpanish} from "./i18n/idioma.js";
let btn_ingles, btn_espanol;

window.onload = ()=>{
    ajustarVersionCelular();
    eventosMenu();
    control_idioma();
    btn_ingles = document.getElementById("btn_en");
    btn_espanol = document.getElementById("btn_es");
    btn_ingles.addEventListener("click",seleccionarIdioma);
    btn_espanol.addEventListener("click",seleccionarIdioma);
    logicaBoton(isSpanish()?"es":"en");
}

function ajustarVersionCelular(){
    let temp;

    if(window.screen.width<=375)
    {
        temp = document.querySelector("#ikigai_bienvenida");
        temp.classList.add("titulo_mobile");
        temp = document.querySelector("#ikigai_como_llegar");
        temp.classList.add("titulo_mobile");
        temp = document.querySelector("#ikigai_titulo_instrucciones");
        temp.classList.add("titulo_mobile");

        temp = document.querySelector("#header15-1o");
        temp.classList.add("contenido_mobile");
        temp = document.querySelector("#article08-1p");
        temp.classList.add("contenido_mobile");
        
        temp = document.querySelector("#navbarSupportedContent");
        temp.classList.add("barra_mobile");

        temp = document.querySelector("#btn_es");
        temp.classList.add("btn_mobile");

        temp = document.querySelector("#btn_en");
        temp.classList.add("btn_mobile");

        temp = document.querySelector(".navbar-brand");
        temp.classList.add("navbar-brand_mobile");
        
        
    }
}

function eventosMenu(){
    let temp;
    temp = document.getElementById("ikigai_menu_01");
    temp.addEventListener("click",()=>{
        document.querySelector(".navbar-toggler").click();
    });

    temp = document.getElementById("ikigai_menu_02");
    temp.addEventListener("click",()=>{
        document.querySelector(".navbar-toggler").click();
    });

    temp = document.getElementById("ikigai_menu_03");
    temp.addEventListener("click",()=>{
        document.querySelector(".navbar-toggler").click();
    });

    temp = document.getElementById("ikigai_menu_04");
    temp.addEventListener("click",()=>{
        document.querySelector(".navbar-toggler").click();
    });

    temp = document.getElementById("ikigai_menu_05");
    temp.addEventListener("click",()=>{
        document.querySelector(".navbar-toggler").click();
    });

    temp = document.getElementById("ikigai_menu_06");
    temp.addEventListener("click",()=>{
        document.querySelector(".navbar-toggler").click();
    });
}

function seleccionarIdioma(event){
    let locale = event.target.id.split("_")[1];
    cambiarIdioma(locale);
    logicaBoton(locale);
}

function logicaBoton(locale){
    btn_espanol.classList.add("ocultar");
    btn_ingles.classList.add("ocultar");
    if(locale == "es")
    {
        btn_ingles.classList.remove("ocultar");
    }
    else{
        btn_espanol.classList.remove("ocultar");
    }
}