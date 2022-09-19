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

app.get("/ola/:name/:cargo", function (req, res) {
    res.send("Ola: " + req.params.name + " Seu cargo e: " + req.params.cargo)
})

app.listen(8181, function () {
    console.log("Server running at url -> http://localhost:8181");
})