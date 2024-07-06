//Assignment5
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/myName", (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`<h1>Hi ${username}</h1>`);
  } else {
    res.sendFile(path.join(__dirname, "../Public", "myName.html"));
  }
});

router.get("/trackName", (req, res) => {
  const username = req.query.username;
  if (username) {
    res.cookie("username", username);
    res.redirect("/myName");
  } else {
    res.redirect("/myName");
  }
});

module.exports = router;
