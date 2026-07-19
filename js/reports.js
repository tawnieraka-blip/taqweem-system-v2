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

const clock = document.getElementById("clock");
const day = document.getElementById("day");
const date = document.getElementById("date");
const hijri = document.getElementById("hijri");

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

    startClock();

    initTheme();

    setupEvents();

}
/* ==========================================
Clock
========================================== */

function startClock(){

    updateClock();

    setInterval(updateClock,1000);

}

function updateClock(){

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("ar-SA",{

        hour:"2-digit",

        minute:"2-digit"

    });

    day.textContent = now.toLocaleDateString("ar-SA",{

        weekday:"long"

    });

    date.textContent = now.toLocaleDateString("ar-SA",{

        year:"numeric",

        month:"long",

        day:"numeric"

    });

    hijri.textContent = new Intl.DateTimeFormat(

        "ar-SA-u-ca-islamic",

        {

            year:"numeric",

            month:"long",

            day:"numeric"

        }

    ).format(now);

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
