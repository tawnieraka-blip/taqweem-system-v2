/* ==========================================
   UI Library
   Version : 1.0
========================================== */

"use strict";

/* ==========================================
Toast
========================================== */

function showToast(message,type="success"){

    let toast=document.getElementById("toast");

    if(!toast){

        toast=document.createElement("div");

        toast.id="toast";

        document.body.appendChild(toast);

    }

    toast.className=`toast ${type}`;

    toast.innerHTML=`

        <span>${message}</span>

    `;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}
/* ==========================================
Loading Button
========================================== */

function showLoading(button,text="جاري التنفيذ..."){

    button.dataset.oldText=button.innerHTML;

    button.disabled=true;

    button.innerHTML=`

        <i class="fa-solid fa-spinner fa-spin"></i>

        ${text}

    `;

}

function hideLoading(button){

    button.disabled=false;

    button.innerHTML=button.dataset.oldText;

}
/* ==========================================
Confirm Dialog
========================================== */

function showConfirm(message,callback){

    const result=confirm(message);

    if(result){

        callback();

    }

}
