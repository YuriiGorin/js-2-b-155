export default function isMirrorDate(dateStr) {
    let [d, m, y] = dateStr.split(".");
    let reverseDate = (d + m).split("").reverse().join("");
    return reverseDate === y;
};
