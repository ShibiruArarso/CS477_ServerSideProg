const fs = require("fs");

// // Blocking, synchronous way
// const rd = fs.readFileSync("introduce.txt", "utf-8");
// console.log(rd);
// const wr = `THIS IS THE TITLE OF SHIBIRU. \n ${rd}`;
// fs.writeFileSync("write.txt", wr);
// console.log(wr);

//Non-Bloking, asynchronous
fs.readFile("introduce.txt", "utf-8", (e, d) => {
   fs.writeFile("asyncWrite.txt", `${d}`, "utf-8", (e) => {
      console.log("done writting");
   });
});
