//Minimum code nodeJS for start a server.

const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";
const server = http.createServer((req,res) => { res.statusCode = 200});
server.listen(port,hostname, () => {
  console.log(`Server run on this url http://${hostname}:${port}`)
});
