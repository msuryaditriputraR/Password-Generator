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
const passwordLength = document.getElementById("passwordLength");
const useNumber = document.getElementById("number");
const useSymbol = document.getElementById("symbol");
const errorMessage = document.getElementById("error-message");

const minPasswordLength = 8;
const maxPasswordLength = 25;

btnGenerate.addEventListener("click", () => {
    if (Number(passwordLength.value) > maxPasswordLength) {
        setError(`Password Length must not more then ${maxPasswordLength}`);

        resultDiv.replaceChildren("");
    } else if (Number(passwordLength.value) < minPasswordLength) {
        setError(`Password Length must not less then ${minPasswordLength}`);

        resultDiv.replaceChildren("");
    } else {
        removeError();

        const act = {
            passwordLength: Number(passwordLength.value),
            useNumber: useNumber.checked,
            useSymbol: useSymbol.checked,
        };
        const password = randomPassword(act);
        const passwordDiv = passComponent(password);

        resultDiv.replaceChildren(passwordDiv);
    }
});

function setError(message) {
    errorMessage.textContent = message;

    passwordLength.style.color = "#ff0000";
    passwordLength.style.borderColor = "#ff0000";
}

function removeError() {
    errorMessage.textContent = "";

    passwordLength.style.color = "var(--main-color)";
    passwordLength.style.borderColor = "var(--main-color)";
}
