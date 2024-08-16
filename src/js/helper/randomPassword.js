import roll from "./roll.js";

export default function ({ passwordLength, useNumber }) {
    const characters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "~",
        "`",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "{",
        "[",
        "}",
        "]",
        ",",
        "|",
        ":",
        ";",
        "<",
        ">",
        ".",
        "?",
        "/",
    ];

    const randomPassword = [];

    let i = 1;

    if (!useNumber) {
        characters.splice(52, 10);
        console.log(characters);
    }

    while (i <= passwordLength) {
        const index = roll(0, characters.length);
        randomPassword.push(characters[index]);
        i++;
    }

    return randomPassword.join("");
}
