"use strict";
window.addEventListener("DOMContentLoaded", init);

function init(){
    addAge();
}

function addAge(){
    const age = document.querySelector(".age");
    const thisYear = new Date().getFullYear()
    age.innerHTML = thisYear - 1979
    console.log(age, thisYear)
}
