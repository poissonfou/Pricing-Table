const express = require("express");
const path = require("path");

const userControl = require("./src/controller/userControl");

const routes = express();

routes.use(express.static("styles"));
routes.use("/styles", express.static(__dirname + "public/styles"));

routes.get("/login", (req, res) => {
  res.sendFile("login.html");
});

routes.post("/login", userControl.store);

module.exports = routes;
