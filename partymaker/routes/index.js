var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "index";

router.get("/", (req, res) => {
  if (req.session.id) {
    res.render(`index`, { login: true });
  } else {
    res.render(`index`, { login: false });
  }
});

module.exports = router;
