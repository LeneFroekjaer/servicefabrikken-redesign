"use strict";
window.addEventListener("DOMContentLoaded", init);
const form = document.querySelector("form")
const email = form.elements.f_email
const navn = form.elements.f_navn
const emailError = document.querySelector("#f_email + span.error")
const navnError = document.querySelector("#f_navn + span.error")


function init(){
    email.addEventListener("input", validateEmail);
    navn.addEventListener("input", validateNavn);
    form.addEventListener("submit", submitForm)
}

function validateEmail(){
    email.classList.add("check");
    if (email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
        email.style.borderRadius = "50px"
    } else {
        emailError.textContent = "Indsæt venligst en gyldig email";
        emailError.className = "error active";
        email.style.borderRadius = "25px 25px 0 0"
    }
}

function validateNavn(){
    navn.classList.add("check");
    if (navn.validity.valid){
        navnError.textContent = "";
        navnError.className = "error";
        navn.style.borderRadius = "50px"
    } else {
        navnError.textContent = "Indsæt venligst dit navn";
        navnError.className = "error active";
        navn.style.borderRadius = "25px 25px 0 0"
    }
}

function submitForm(e){
    if (!email.validity.valid || !navn.validity.valid){
        e.preventDefault();
        validateEmail()
        validateNavn()
    } 
}