const fs = require("fs");
const http = require("http");
const url = require("url");

//the simplest way to create server and route
const server = http.createServer((request, response) => {
   const pathName = request.url;
   if (pathName === "/" || pathName === "/vegitable") {
      response.end("Hello this is Mango");
   } else if (pathName === "/electronics") {
      response.end("Hello this is Iphone");
   }
});

server.listen(3000, () => {
   console.log("listening started");
});
