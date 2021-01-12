const express = require("express");
const app = express();
const path = require("path");

app.engine("html", require('ejs').renderFile);
app.use("/", require("./bin/routes_ooc/index"));
app.set("view engine", "ejs");
