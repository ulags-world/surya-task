const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Hello from the Server!");
});
server.listen(3000,"0.0.0.0",() => {
    console.log("Listening to request on port 3000")
});