/* ==========================================
   Common Functions
========================================== */

"use strict";

/* ==========================
   Toast
========================== */

function showMessage(message){

    alert(message);

}

/* ==========================
   Loader
========================== */

function showLoading(button,text){

    button.disabled=true;

    button.dataset.text=button.innerHTML;

    button.innerHTML=
    `<i class="fa-solid fa-spinner fa-spin"></i> ${text}`;

}

function hideLoading(button){

    button.disabled=false;

    button.innerHTML=button.dataset.text;

}

/* ==========================
   Storage
========================== */

function save(key,value){

    localStorage.setItem(

        key,

        JSON.stringify(value)

    );

}

function load(key){

    const value=

    localStorage.getItem(key);

    return value?

    JSON.parse(value)

    :null;

}

/* ==========================
   Logout
========================== */

function logout(){

    localStorage.removeItem("user");

    window.location.href="index.html";

}
