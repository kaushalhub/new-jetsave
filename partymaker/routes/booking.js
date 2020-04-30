	var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
let table = "booking";

router.get("/", (req, res) => {
    res.render(`booking`);
});

router.post("/insert",  (req, res) => {
    let body = req.body;
    
    pool.query(`insert into bookingshow set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/success");
    });
});

module.exports = router;