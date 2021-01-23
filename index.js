const express = require("express");
const app = express();
const path = require("path");

app.engine("html", require('ejs').renderFile);
app.set("view engine", "ejs");

app
 .get("/es/", function(req, res) => {
 res.reder("https://ladorachula.github.io/bin/views_ooc/es.html")
 })
 .post(function(req, res) => {
   console.log("Ruta /es/ posteada.")
 })


app
 .get("/en/", function(req, res) => {
 res.render("https://ladorachula.github.io/bin/views_ooc/en.html");
 })
 .post(function(req, res) => {
   console.log("Ruta /en/ posteada.")
 })

app
 .get("/github/", function(req, res) => {
 res.render("https://ladorachula.github.io/bin/views_ooc/github.html");
 })
 .post(function(req, res) => {
   console.log("Ruta /github/ posteada.")
 })

app
 .get("/discord/", function(req, res) => {
 res.render("https://ladorachula.github.io/bin/views_ooc/discord.html");
 })
 .post(function(req, res) => {
   console.log("Ruta /discord/ posteada.")
 })

module.exports = app;
