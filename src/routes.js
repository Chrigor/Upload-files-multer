const express = require("express");
const routes = express.Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.get("/", (req, res) => res.json({ message: "Ok" }));
routes.post("/posts", multer(multerConfig).single("file"), (req, res) => {
  console.log(req.file);
  res.json({ message: "Its ok" });
});

module.exports = routes;
