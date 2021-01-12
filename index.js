const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.engine("html", require('ejs').renderFile);
app.set("view engine", "ejs");

app.get("/es/", (req, res) => {
 res.render("https://ladorachula.github.io/bin/views_ooc/es.html")
});

app.get("/en/", (req, res) => {
 res.render("https://ladorachula.github.io/bin/views_ooc/en.html");
});

app.get("/github", (req, res) => {
 res.render("https://ladorachula.github.io/bin/views_ooc/github.html");
});

app.get("/discord", (req, res) => {
 res.render("https://ladorachula.github.io/bin/views_ooc/discord.html");
});

module.exports = app;
