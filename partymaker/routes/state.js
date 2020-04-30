var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
let table = "state";

router.get("/", (req, res) => {
    res.render(`state`);
});

router.post("/add", (req, res) => {
    let body = req.body;

    pool.query(`insert into state set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/state");
    });
});

router.post("/addcity", (req, res) => {
    let body = req.body;

    pool.query(`insert into city set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/state");
    });
});



router.get('/allstate', (req, res) => pool.query(`select * from state`,
    (err, result) => err ? console.log(err) : res.json(result)));  
    


module.exports = router;
