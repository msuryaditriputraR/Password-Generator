import copy from "./copy.js";

export default function (password) {
    const div = document.createElement("div");
    div.classList.add("password");

    const p = document.createElement("p");
    p.textContent = password;

    const i = document.createElement("i");
    i.classList.add("ri-file-copy-line");
    i.id = "btn-copy";
    i.title = "Button Copy";

    i.addEventListener("click", copy);

    div.append(p, i);

    return div;
}
