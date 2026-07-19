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

    if (code === "") {

        alert("يرجى إدخال كود الدخول");

        loginCode.focus();

        return;

    }

    loginBtn.disabled = true;

    loginBtn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> جاري تسجيل الدخول...';

    try {

        const result = await API.request("login", {

            code: code

        });

        if (!result.success) {

            alert(result.message || "كود الدخول غير صحيح");

            loginBtn.disabled = false;

            loginBtn.innerHTML =
                '<i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول';

            return;

        }

        localStorage.setItem(
            "user",
            JSON.stringify(result.data)
        );

        switch (result.data.role.toLowerCase()) {

            case "admin":

                window.location.href = "dashboard.html";

                break;

            case "manager":

                window.location.href = "managers.html";

                break;

            default:

                window.location.href = "employee.html";

        }

    }

    catch (error) {

        alert("تعذر الاتصال بالخادم");

        console.error(error);

        loginBtn.disabled = false;

        loginBtn.innerHTML =
            '<i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول';

    }

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

    alert("سيتم تفعيل تحميل التطبيق لاحقًا.");

});
