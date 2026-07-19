/* ==========================================
   Department Manager Dashboard
   Version : 1.0
========================================== */

"use strict";

/* ==========================
User
========================== */

const user = load("user");

if (!user || user.role !== "manager") {

    window.location.href = "index.html";

}

/* ==========================
Elements
========================== */

const clock = document.getElementById("clock");
const day = document.getElementById("day");
const date = document.getElementById("date");
const hijri = document.getElementById("hijri");

const reportsCount = document.getElementById("reportsCount");
const employeesCount = document.getElementById("employeesCount");
const weekReports = document.getElementById("weekReports");

const reportsList = document.getElementById("reportsList");

const departmentName = document.getElementById("departmentName");

const themeBtn = document.getElementById("themeBtn");

/* ==========================
Start
========================== */

init();

function init(){

    loadUser();

    startClock();

    initTheme();

    loadStatistics();

    loadReports();

}

/* ==========================
Load User
========================== */

function loadUser(){

    if(user.name){

        departmentName.textContent = user.name;

    }

}

/* ==========================
Clock
========================== */

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

    const savedTheme =

        localStorage.getItem("theme") || "light";

    document.body.dataset.theme = savedTheme;

    updateThemeIcon(savedTheme);

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
Statistics
========================================== */

function loadStatistics(){

    reportsCount.textContent = 18;

    employeesCount.textContent = 7;

    weekReports.textContent = 5;

}

/* ==========================================
Reports
========================================== */

function loadReports(){

    const reports=[

        {

            employee:"أحمد محمد",

            date:"اليوم",

            status:"معتمد",

            class:"status-approved"

        },

        {

            employee:"خالد علي",

            date:"أمس",

            status:"قيد المراجعة",

            class:"status-pending"

        },

        {

            employee:"محمد حسن",

            date:"قبل يومين",

            status:"جديد",

            class:"status-new"

        }

    ];

    reportsList.innerHTML="";

    reports.forEach(report=>{

        reportsList.innerHTML += `

        <div class="report-item">

            <div class="report-left">

                <div class="report-avatar">

                    <i class="fa-solid fa-file-lines"></i>

                </div>

                <div class="report-info">

                    <h4>${report.employee}</h4>

                    <span>${report.date}</span>

                </div>

            </div>

            <div class="report-status ${report.class}">

                ${report.status}

            </div>

        </div>

        `;

    });

}

/* ==========================================
Logout
========================================== */

function logoutManager(){

    localStorage.removeItem("user");

    window.location.href="index.html";

}
