var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
let table = "ShowBooking";

router.get("/", (req, res) => {
  const { id } = req.query;
  var query = `select d.*,(select h.eventname from event h where h.id = d.event) as eventname from bookingshow d where id = '${id}' ;`;
  //  var query = `select d.*,(select h.eventname from event h where h.id = d.event) as eventname from bookingshow d ;`

  pool.query(query, (err, result) => {
    if (err) throw err;
    else res.render(`ShowBooking`, { result: result });
    //   else res.json(result)
    console.log(result);
  });
});

// router.get('/click', (req, res) => {
//     const { id } = req.query
//     pool.query(`select * from bookingshow where id = '${id}'`, (err, result) => {
//         if (err) throw err;
//         else res.redirect('/demo');
//     })
// })

router.post("/insertdata", (req, res) => {
  let body = req.body;
  pool.query(`insert into bookingdetail set ?`, body, (err, result) => {
    if (err) throw err;
    else res.redirect("/admindashboard");
  });
});

router.get("/executivename", (req, res) =>
  pool.query(`select * from exclusive`, (err, result) =>
    err ? console.log(err) : res.json(result)
  )
);

router.get("/artist", (req, res) =>
  pool.query(`select * from artist`, (err, result) =>
    err ? console.log(err) : res.json(result)
  )
);

module.exports = router;
