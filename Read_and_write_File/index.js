const fs = require("fs");

//! Non-Bloking|asynchronous way Reading
fs.readFile("./introduce.txt", "utf-8", (error, data) => {
   console.log(data);
});

//! Non-Bloking|asynchronous way write
fs.writeFile("./write.txt", `This is writing practice`, "utf-8", (error) => {
   console.log("Done");
});

// //!Non-Bloking | asynchronous read and write at the same time
let news = "What I read from file of introduce.txt is here plus additon comment";
fs.readFile("./introduce.txt", "utf-8", (error, data) => {
   fs.writeFile("./readWrite.txt", `${news} \n ${data}`, "utf-8", (error) => {
      console.log("Done");
   });
});
