const { application } = require("express")
const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("Welcome!")
})

app.get("/sobre", function (req, res) {
    res.send("About us")
})

app.get("/blog", function (req, res) {
    res.send("Blog")
})

app.get("/ola/:name/:func", function (req, res) {
    res.send(req.params)
})

app.listen(8181, function () {
    console.log("Server running at url -> http://localhost:8181");
})