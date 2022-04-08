const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, Response) => {
  const requestUrl = url.parse(request.url).pathname;

  if (requestUrl === "/") {
    fs.readFile("./utama.html", null, (error, data) => {
      if (error) {
        Response.writeHead(404);
        Response.write("not found");
      } else {
        Response.writeHead(200, { "Content-Type": "text/html" });
        Response.write(data);
      }
      Response.end(); //untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/nama") {
    fs.readFile("./nama.json", null, (error, data) => {
      if (error) {
        Response.writeHead(404);
        Response.write("not found");
      } else {
        Response.writeHead(200, { "Content-Type": "application/json" });
        Response.write(data);
      }
      Response.end(); //untuk mengakhiri proses respons
    });
  } else {
    Response.writeHead(404);
    Response.write("not found");
    Response.end();
  }
});

server.listen(8000);
