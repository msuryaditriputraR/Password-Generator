/* ==================== DARK / LIGHT THEME ===================== */

const body = document.body;
const btnTheme = document.getElementById("btn-theme");

if (localStorage.getItem("darkTheme")) {
    body.classList.add("dark");
    btnTheme.className = "ri-moon-fill";
}

btnTheme.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        btnTheme.className = "ri-sun-fill";
        localStorage.removeItem("darkTheme");
    } else {
        body.classList.add("dark");
        btnTheme.className = "ri-moon-fill";
        localStorage.setItem("darkTheme", true);
    }
});
