/* ==========================================
   Employee Dashboard
   Version : 1.0
========================================== */

"use strict";

/* ==========================================
User
========================================== */

const user = load("user");

if (!user || user.role !== "employee") {

    window.location.href = "index.html";

}

/* ==========================================
Elements
========================================== */

const clock = document.getElementById("clock");
const day = document.getElementById("day");
const date = document.getElementById("date");
const hijri = document.getElementById("hijri");

const employeeName = document.getElementById("employeeName");

const profileName = document.getElementById("profileName");
const profileDepartment = document.getElementById("profileDepartment");
const profileJob = document.getElementById("profileJob");

const messagesList = document.getElementById("messagesList");

const newReport = document.getElementById("newReport");

const themeBtn = document.getElementById("themeBtn");

/* ==========================================
Start
========================================== */

init();

function init(){

    loadProfile();

    startClock();

    initTheme();

    loadMessages();

    setupEvents();

}

/* ==========================================
Profile
========================================== */

function loadProfile(){

    employeeName.textContent =

        user.name || "الموظف";

    profileName.textContent =

        user.name || "محمد أحمد";

    profileDepartment.textContent =

        user.department || "قسم الإعلام";

    profileJob.textContent =

        user.job || "موظف";

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
Messages
========================================== */

function loadMessages(){

    const messages=[

        {

            title:"اجتماع القسم",

            text:"يرجى حضور اجتماع القسم اليوم الساعة 5:00 مساءً.",

            date:"اليوم"

        },

        {

            title:"رفع التقرير",

            text:"آخر موعد لرفع التقرير الأسبوعي يوم الخميس.",

            date:"أمس"

        },

        {

            title:"تنبيه",

            text:"تأكد من مراجعة بيانات التقرير قبل الإرسال.",

            date:"قبل يومين"

        }

    ];

    messagesList.innerHTML="";

    messages.forEach(message=>{

        messagesList.innerHTML += `

        <div class="message-item">

            <div class="message-icon">

                <i class="fa-solid fa-envelope"></i>

            </div>

            <div class="message-content">

                <h4>${message.title}</h4>

                <p>${message.text}</p>

                <div class="message-date">

                    ${message.date}

                </div>

            </div>

        </div>

        `;

    });

}

/* ==========================================
Events
========================================== */

function setupEvents(){

    newReport.addEventListener("click",()=>{

        window.location.href="reports.html";

    });

}

/* ==========================================
Logout
========================================== */

function logout(){

    localStorage.removeItem("user");

    window.location.href="index.html";

}
