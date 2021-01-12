const express = require("express");
const app = express();
const path = require("path");

app.engine("html", require('ejs').renderFile);
app.use(express.static("https://ladorachula.github.io/bin/")));
app.set("views","https://ladorachula.github.io/bin/views_ooc"));
app.set("view engine", "ejs");
