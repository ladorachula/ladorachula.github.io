const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.engine("html", require('ejs').renderFile);
app.set("view engine", "ejs");

router.get("/es/", (res, req) => {
 res.render("https://ladorachula.github.io/views_ooc/es.html");
});

router.get("/en/", (res, req) => {
 res.render("https://ladorachula.github.io/views_ooc/en.html");
});

router.get("/github", (res, req) => {
 res.render("https://ladorachula.github.io/views_ooc/github.html");
});

router.get("/discord", (res, req) => {
 res.render("https://ladorachula.github.io/views_ooc/discord.html");
});

module.exports = router;
