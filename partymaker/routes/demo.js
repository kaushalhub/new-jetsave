var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
let table = "demo";

router.get("/", (req, res) => {
    var query = `select * from gst;`
    var query1 = `select * from bookingshow;`
  //  var query = `select d.*,(select h.eventname from event h where h.id = d.event) as eventname from bookingshow d ;`
 
    pool.query(query +query1, (err, result) => {
        if (err) throw err;
       else res.render(`demo`, { result: result });
       //  else res.json(result)
        console.log(result)
    })
});

// router.get('/click', (req, res) => {
//     const { id } = req.query
//         pool.query(`select * from bookingshow where id = '${id}'`, (err, result) => {
//         if (err) throw err;
//         else res.redirect('/demo1');
//     })
// })

router.post("/insert", (req, res) => {
  let body = req.body;

  pool.query(`insert into city set ?`, body, (err, result) => {
    if (err) throw err;
    else res.redirect("/demo");
  });
});

router.get('/allstate', (req, res) => (`www.curiouskeeda.com/curious-travel/8-beautiful-resorts-in-maldives/`,
  (err, result) => err ? console.log(err) : res.json(result))); 

module.exports = router;
