/* ==========================================
   Reports Page
   Version : 1.0
========================================== */

"use strict";

/* ==========================================
User
========================================== */

const user = load("user");

if (!user) {

    window.location.href = "index.html";

}

/* ==========================================
Elements
========================================== */


const themeBtn = document.getElementById("themeBtn");

const reportType = document.getElementById("reportType");
const reportTitle = document.getElementById("reportTitle");
const reportDescription = document.getElementById("reportDescription");
const reportFile = document.getElementById("reportFile");

const submitReport = document.getElementById("submitReport");

/* ==========================================
Start
========================================== */

init();

function init(){


    initTheme();

    setupEvents();

}

/* ==========================================
Theme
========================================== */

function initTheme(){

    const theme =

        localStorage.getItem("theme") || "light";

    document.body.dataset.theme = theme;

    updateThemeIcon(theme);

}

themeBtn.addEventListener("click",()=>{

    const mode =

        document.body.dataset.theme==="dark"

        ? "light"

        : "dark";

    document.body.dataset.theme = mode;

    localStorage.setItem("theme",mode);

    updateThemeIcon(mode);

});

function updateThemeIcon(mode){

    themeBtn.innerHTML =

    mode==="dark"

    ?

    '<i class="fa-solid fa-sun"></i>'

    :

    '<i class="fa-regular fa-moon"></i>';

}
/* ==========================================
Events
========================================== */

function setupEvents(){

    submitReport.addEventListener(

        "click",

        sendReport

    );

}

/* ==========================================
Send Report
========================================== */

async function sendReport(){

    if(reportTitle.value.trim()===""){

        showMessage("أدخل عنوان التقرير");

        return;

    }

    if(reportDescription.value.trim()===""){

        showMessage("اكتب وصف التقرير");

        return;

    }

    showLoading(

        submitReport,

        "جاري الإرسال..."

    );

    setTimeout(()=>{

        hideLoading(submitReport);

        showMessage(

            "تم إرسال التقرير بنجاح"

        );

        reportTitle.value="";

        reportDescription.value="";

        reportFile.value="";

        reportType.selectedIndex=0;

    },1200);

}
