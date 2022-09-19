var http = require('http')

http.createServer(function (req, res) {
    res.end("Ola!")
}).listen(8987)

console.log("O servidor esta rodando!");