"use strict";
window.addEventListener("DOMContentLoaded", init);

function init(){
    hentHeader();
}

// HEADEREN + BURGERMENUEN
// Her hentes indeholdet af headeren fra header.html til de andre sider og sætter det ind i headeren.
function hentHeader() {
    fetch("header.html")
      .then(headerfil => headerfil.text())
      .then(header => {
        document.querySelector("[data-header]").innerHTML = header;
        getBurger() // Får burgermenuen til at virke.
      });
  }
  
  function getBurger(){
    document.querySelector(".burger").addEventListener("click", toggleMenu);
  }
  
  
  function toggleMenu() {
  document.querySelector(".burger").classList.toggle("change");
  document.querySelector("nav").classList.toggle("show");
  }