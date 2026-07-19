/* ==========================================
   Authentication
========================================== */

const loginBtn = document.getElementById("loginBtn");
const loginCode = document.getElementById("loginCode");
const themeBtn = document.getElementById("themeBtn");
const installBtn = document.getElementById("installBtn");

/* ==========================
   Login
========================== */

loginBtn.addEventListener("click", login);

loginCode.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        login();

    }

});

async function login() {

    const code = loginCode.value.trim();

    if (!code) {

        showToast("يرجى إدخال كود الدخول","warning");
        return;

    }

    // مدير النظام
    if (code === "1111") {

        save("user",{

    id:1,

    code:"1111",

    name:"مدير النظام",

    department:"الإدارة",

    job:"مدير النظام",

    role:"admin"

});

        window.location.href="dashboard.html";

        return;

    }

    // مدير قسم
    if (code === "2222") {

       save("user",{

    id:2,

    code:"2222",

    name:"مدير القسم",

    department:"الإعلام",

    job:"مدير قسم",

    role:"manager"

});

        window.location.href="managers.html";

        return;

    }

    // موظف
    if (code === "3333") {

        save("user",{

    id:3,

    code:"3333",

    name:"الموظف",

    department:"الإعلام",

    job:"موظف",

    role:"employee"

});

        window.location.href="employee.html";

        return;

    }

    showToast("كود الدخول غير صحيح","error");
}

/* ==========================
   Theme
========================== */

const savedTheme =
    localStorage.getItem("theme") || "light";

setTheme(savedTheme);

themeBtn.addEventListener("click", function () {

    const current =
        document.body.dataset.theme === "dark"
            ? "light"
            : "dark";

    setTheme(current);

});

function setTheme(mode) {

    document.body.dataset.theme = mode;

    localStorage.setItem("theme", mode);

    themeBtn.innerHTML =
        mode === "dark"

            ? '<i class="fa-solid fa-sun"></i>'

            : '<i class="fa-regular fa-moon"></i>';

}

/* ==========================
   Install Button
========================== */

installBtn.addEventListener("click", function () {

    showToast("سيتم تفعيل تحميل التطبيق قريبًا","info");
});
