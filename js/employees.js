/* ==========================================
   Employees Page
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

const employeesList = document.getElementById("employeesList");

const searchEmployee = document.getElementById("searchEmployee");

const addEmployee = document.getElementById("addEmployee");

const themeBtn = document.getElementById("themeBtn");

/* ==========================================
Data
========================================== */

let employees = [];

/* ==========================================
Start
========================================== */

init();

function init(){

    initTheme();

    loadEmployees();

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
Load Employees
========================================== */

async function loadEmployees(){

    // بيانات تجريبية مؤقتة
    // سيتم استبدالها ببيانات Google Apps Script

    employees = [

        {

            id:1,

            name:"أحمد محمد",

            department:"قسم الإعلام",

            job:"موظف",

            role:"موظف"

        },

        {

            id:2,

            name:"محمد علي",

            department:"قسم الدعوة",

            job:"مدير قسم",

            role:"مدير قسم"

        },

        {

            id:3,

            name:"خالد عبدالله",

            department:"الإدارة",

            job:"سكرتير",

            role:"موظف"

        }

    ];

    renderEmployees(employees);

}

/* ==========================================
Render Employees
========================================== */

function renderEmployees(list){

    employeesList.innerHTML = "";

    if(list.length === 0){

        employeesList.innerHTML = `

        <div class="employee-card">

            <div class="employee-name">

                <h3>

                    لا يوجد موظفون

                </h3>

            </div>

        </div>

        `;

        return;

    }

    list.forEach(employee=>{

        employeesList.innerHTML += `

        <div class="employee-card">

            <div class="employee-header">

                <div class="employee-avatar">

                    <i class="fa-solid fa-user"></i>

                </div>

                <div class="employee-name">

                    <h3>${employee.name}</h3>

                    <span>${employee.department}</span>

                </div>

            </div>

            <div class="employee-info">

                <div class="info-row">

                    <span class="info-label">

                        المسمى الوظيفي

                    </span>

                    <span class="info-value">

                        ${employee.job}

                    </span>

                </div>

                <div class="info-row">

                    <span class="info-label">

                        الصلاحية

                    </span>

                    <span class="info-value">

                        ${employee.role}

                    </span>

                </div>

            </div>

            <div class="employee-actions">

                <button

                    class="edit-btn"

                    onclick="editEmployee(${employee.id})">

                    <i class="fa-solid fa-pen"></i>

                    تعديل

                </button>

                <button

                    class="delete-btn"

                    onclick="deleteEmployee(${employee.id})">

                    <i class="fa-solid fa-trash"></i>

                    حذف

                </button>

            </div>

        </div>

        `;

    });

}
/* ==========================================
Search
========================================== */

function setupEvents(){

    searchEmployee.addEventListener("input",searchEmployees);

    addEmployee.addEventListener("click",addEmployeeForm);

}

function searchEmployees(){

    const keyword =

        searchEmployee.value
        .trim()
        .toLowerCase();

    const filtered = employees.filter(employee=>{

        return (

            employee.name.toLowerCase().includes(keyword) ||

            employee.department.toLowerCase().includes(keyword) ||

            employee.job.toLowerCase().includes(keyword) ||

            employee.role.toLowerCase().includes(keyword)

        );

    });

    renderEmployees(filtered);

}

/* ==========================================
Add Employee
========================================== */

function addEmployeeForm(){

    // سيتم استبدالها بنافذة احترافية (Modal)
    // عند ربط Google Apps Script

    console.log("Add Employee");

}

/* ==========================================
Edit Employee
========================================== */

function editEmployee(id){

    const employee = employees.find(e=>e.id===id);

    if(!employee) return;

    console.log("Edit",employee);

}

/* ==========================================
Delete Employee
========================================== */

function deleteEmployee(id){

    if(!confirm("هل تريد حذف الموظف؟")) return;

    employees = employees.filter(e=>e.id!==id);

    renderEmployees(employees);

}
