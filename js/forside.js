"use strict";
window.addEventListener("DOMContentLoaded", init);

function init(){
    getJsonData();
}

function getJsonData(){
    fetch("https://keaprojects-9fe5.restdb.io/rest/servicefabrikken", {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "5ca0f5bfdf5d634f46ecb0ca",
          "cache-control": "no-cache"
        }
      })
        .then(res => res.json())
        .then(data => {
          buildList(data);
        });
}

function buildList(data){
    console.log(data);
    const list = data.map((item)=>{
        return `
        <div class="service">
            <img src="images/checkmark.png" alt="checkmark">
            <p>${item.ydelse}</p>
        </div>
         `
    })
    .join("")
    document.querySelector(".servicelist").innerHTML = list;
}