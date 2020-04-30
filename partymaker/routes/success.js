var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
let table = "success";

router.get("/", (req, res) => {
    res.render(`success`);
});

module.exports = router;
