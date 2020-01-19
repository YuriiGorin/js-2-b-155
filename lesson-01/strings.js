const randStr = function(length) {
    const start = 65;
    const end = 90;
    let str = "";

    for (let i=0; i<length; i++) {
        const n = Math.floor(Math.random() * (end - start + 1) + start);
        str += String.fromCharCode(n);
    }

    return str;
};

console.log(randStr(50));