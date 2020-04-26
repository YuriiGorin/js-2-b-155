import shuffle from "lodash/shuffle";

window.addEventListener("load", () => {
    const list = shuffle(["Hello", "something", "else"]);
    document.write(list.join("<hr>"));
});