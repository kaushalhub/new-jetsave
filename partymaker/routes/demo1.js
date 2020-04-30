var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
let table = "demo1";

router.get("/", (req, res) => {
    const { id } = req.query
    var query = `select * from gst;`
    var query1 = `select d.*,(select h.eventname from event h where h.id = d.event) as eventname from bookingshow d where id = '${id}' ;`
     //  var query = `select d.*,(select h.eventname from event h where h.id = d.event) as eventname from bookingshow d ;`
     
    pool.query(query + query1, (err, result) => {
        if (err) throw err;
        else res.render(`demo1`, { result: result });
        //  else res.json(result)
        console.log(result)
    })
});

// router.get('/click', (req, res) => {
//     const { id } = req.query
//     pool.query(`select * from bookingshow where id = '${id}'`, (err, result) => {
//         if (err) throw err;
//         else res.redirect('/demo');
//     })
// })

module.exports = router;
