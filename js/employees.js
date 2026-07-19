<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>إدارة الموظفين</title>

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

<link rel="stylesheet" href="css/common.css">

<link rel="stylesheet" href="css/employees.css">

</head>

<body>

<div class="employees-page">

<header class="header">

<div class="header-left">

<img
src="assets/logo.png"
class="logo"
alt="Logo">

</div>

<div class="header-center">

<h1>

إدارة الموظفين

</h1>

<span>

منصة إدارة التقويم والمتابعة

</span>

</div>

<div class="header-right">

<button
id="themeBtn"
class="icon-btn">

<i class="fa-regular fa-moon"></i>

</button>

</div>

</header>

<section class="search-box">

<div class="search-input">

<i class="fa-solid fa-magnifying-glass"></i>

<input

type="text"

id="searchEmployee"

placeholder="ابحث عن موظف">

</div>

<button id="addEmployee">

<i class="fa-solid fa-user-plus"></i>

إضافة

</button>

</section>

<section id="employeesList">

<!-- بطاقات الموظفين -->

</section>

</div>

<nav class="bottom-nav">

<a href="dashboard.html">

<i class="fa-solid fa-house"></i>

<span>

الرئيسية

</span>

</a>

<a href="reports.html">

<i class="fa-solid fa-file-lines"></i>

<span>

التقارير

</span>

</a>

<a
href="employees.html"
class="active">

<i class="fa-solid fa-users"></i>

<span>

الموظفون

</span>

</a>

<a href="settings.html">

<i class="fa-solid fa-gear"></i>

<span>

الإعدادات

</span>

</a>

</nav>

<script src="js/config.js"></script>

<script src="js/common.js"></script>

<script src="js/api.js"></script>

<script src="js/employees.js"></script>

</body>

</html>
