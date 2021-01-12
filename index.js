const express = require("express");
const app = express();
const path = require("path");

app.engine("html", require('ejs').renderFile);
app.set("view engine", "ejs");

app.get("/es/", (res, req) => {
 res.render("./bin/views_ooc/es.html");
});

app.get("/en/", (res, req) => {
 res.render("./bin/views_ooc/en.html");
});

app.get("/github", (res, req) => {
 res.render("./bin/views_ooc/github.html");
});

app.get("/discord", (res, req) => {
 res.render(".7bin/views_ooc/discord.html");
});

module.exports = app;
