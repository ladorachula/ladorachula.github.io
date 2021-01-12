const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.engine("html", require('ejs').renderFile);
app.set("view engine", "ejs");

app.get("/es/", (req, res) => {
 res.render(path.join(__dirname + "/bin/views_ooc/es.html"))
});

app.get("/en/", (req, res) => {
 res.render(path.join(__dirname + "/bin/views_ooc/en.html"));
});

app.get("/github", (req, res) => {
 res.render(path.join(__dirname + "/bin/views_ooc/github.html"));
});

app.get("/discord", (req, res) => {
 res.render(path.join(__dirname + "/bin/views_ooc/discord.html"));
});

const port = 9999;

app.listen(port, function(){
 console.log("Culo de gótica culona en dirección "+port)
})

module.exports = app;
