const fs = require("fs");

const rd = fs.readFileSync("introduce.txt", "utf-8");
const wr = `THIS IS THE TITLE OF SHIBIRU. \n ${rd}`;
fs.writeFileSync("write.txt", wr);
console.log("hjkwdls");
