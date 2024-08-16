export default function (min, max, floatFlag) {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
}
