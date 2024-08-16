export default function () {
    const prevEl = this.previousElementSibling;
    const password = prevEl.innerText;

    navigator.clipboard.writeText(password).then(() => {
        prevEl.innerText = "Password Copied!";

        setTimeout(() => (prevEl.innerText = password), 3000);
    });
}
