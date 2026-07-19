/* ==========================================
   Dashboard
========================================== */

"use strict";

/* ==========================
   User
========================== */

const user = load("user");

if (!user || user.role !== "admin") {

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

const themeBtn = document.getElementById("themeBtn");

/* ==========================
   Start
========================== */

init();

function init(){

    startClock();

    loadDashboard();

    initTheme();

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

            day:"numeric",

            month:"long",

            year:"numeric"

        }

    ).format(now);

}
/* ==========================
   Theme
========================== */

function initTheme(){

    const saved = localStorage.getItem("theme") || "light";

    document.body.dataset.theme = saved;

    updateThemeIcon(saved);

}

themeBtn.addEventListener("click",()=>{

    const current =

        document.body.dataset.theme==="dark"

        ? "light"

        : "dark";

    document.body.dataset.theme=current;

    localStorage.setItem("theme",current);

    updateThemeIcon(current);

});

function updateThemeIcon(mode){

    themeBtn.innerHTML =

    mode==="dark"

    ?

    '<i class="fa-solid fa-sun"></i>'

    :

    '<i class="fa-regular fa-moon"></i>';

}
/* ==========================
   Dashboard Data
========================== */

async function loadDashboard(){

    reportsCount.textContent = "0";

    employeesCount.textContent = "0";

    weekReports.textContent = "0";

    reportsList.innerHTML = `

    <div class="report-item">

        <div class="report-left">

            <div class="report-avatar">

                <i class="fa-solid fa-file-lines"></i>

            </div>

            <div class="report-info">

                <h4>

                    لا توجد تقارير

                </h4>

                <span>

                    سيتم عرض التقارير هنا

                </span>

            </div>

        </div>

        <div class="report-status">

            --

        </div>

    </div>

    `;

}
