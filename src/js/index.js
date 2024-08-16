/* ==================== DARK / LIGHT THEME ===================== */

const body = document.body;
const btnTheme = document.getElementById("btn-theme");

btnTheme.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        btnTheme.className = "ri-sun-fill";
    } else {
        body.classList.add("dark");
        btnTheme.className = "ri-moon-fill";
    }
});
