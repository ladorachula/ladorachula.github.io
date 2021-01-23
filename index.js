const express = require("express");
const router = express();
const path = require("path");
var router = express.Router();

router
 .get("/es/", function(req, res) => {
 res.sendFile("https://ladorachula.github.io/bin/views_ooc/es.html")
 })


router
 .get("/en/", function(req, res) => {
 res.sendFile("https://ladorachula.github.io/bin/views_ooc/en.html");
 })

router 
 .get("/github/", function(req, res) => {
 res.sendFile("https://ladorachula.github.io/bin/views_ooc/github.html");
 })

router
 .get("/discord/", function(req, res) => {
 res.sendFile("https://ladorachula.github.io/bin/views_ooc/discord.html");
 })

module.exports = router;
