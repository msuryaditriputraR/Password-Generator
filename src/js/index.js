/* ==================== DARK / LIGHT THEME ===================== */

import passComponent from "./helper/passComponent.js";
import randomPassword from "./helper/randomPassword.js";

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

/* ==================== CHANGE MAIN COLOR ===================== */
const inputColor = document.getElementById("input-color");
const root = document.documentElement;

if (localStorage.getItem("mainColor")) {
    root.style.setProperty("--main-color", localStorage.getItem("mainColor"));
}

inputColor.addEventListener("input", function () {
    root.style.setProperty("--main-color", this.value);
    localStorage.setItem("mainColor", this.value);
});

/* ==================== GENERATE PASSWORD ===================== */
const btnGenerate = document.getElementById("btn-generate");
const resultDiv = document.querySelector(".result");

btnGenerate.addEventListener("click", () => {
    const password = randomPassword();
    const passwordDiv = passComponent(password);

    resultDiv.replaceChildren(passwordDiv);
});
