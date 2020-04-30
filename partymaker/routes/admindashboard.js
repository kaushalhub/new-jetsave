var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
let table = "admindashboard";

router.get("/", (req, res) => {

    var query = `SELECT COUNT(id) as total FROM bookingshow;`
    var query1 = `select * from bookingshow LIMIT 4;`
    var query2 = `select d.*,(select h.eventname from event h where h.id = d.event) as eventname from bookingshow d ;`
    var query3 = `select * from showdetail;`
    var query4 = `select * from exclusive;`
    var query5 = `select * from artist;`
    var query6 = `SELECT COUNT(id) as activebook FROM showdetail;`
//    var query1 = `select name,image,username,facebook,instagram,youtube,bio,twitter from signup where id = "${req.session.id}"; `
//     var query2 = `select count(id) as totalblog from editblog where userid = "${req.session.id}";`
    pool.query(query + query1 + query2 + query3 + query4 + query5 + query6, (err, result) => {
      if (err) throw err;
      else res.render(`admindashboard`, { result: result });
    // else res.json(result)
      console.log(result)
    })
});

router.get('/removebooking', (req, res) => {
    global.id = req.query.id
    pool.query(`delete from bookingshow where id = '${id}'`, (err, result) => {
        if (err) throw err;
        else res.redirect('/admindashboard');
    })
})

router.post("/addartist", (req, res) => {
    let body = req.body;

    pool.query(`insert into artist set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/admindashboard");
    });
});

router.post("/insert", (req, res) => {
    let body = req.body;

    pool.query(`insert into showdetail set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/admindashboard");
    });
});


router.post("/addmember", (req, res) => {
    let body = req.body;

    pool.query(`insert into exclusive set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/admindashboard");
    });
});


router.post("/gstcalculate", (req, res) => {
    let body = req.body;

    pool.query(`insert into gst set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/admindashboard");
    });
});


router.post("/showadd", (req, res) => {
    let body = req.body;

    pool.query(`insert into event set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/admindashboard");
    });
});


router.get('/all', (req, res) => pool.query(`select * from artist`,
    (err, result) => err ? console.log(err) : res.json(result)));


router.get('/allbookdetail', (req, res) => pool.query(`select * from showdetail`,
    (err, result) => err ? console.log(err) : res.json(result)));


router.get('/allbooking', (req, res) => pool.query(`select * from bookingshow`,
    (err, result) => err ? console.log(err) : res.json(result)));


router.get('/allexclusive', (req, res) => pool.query(`select * from exclusive`,
    (err, result) => err ? console.log(err) : res.json(result)));

router.get('/booking', (req, res) => pool.query(`select d.*,(select h.eventname from event h where h.id = d.event) as eventname from bookingshow d;`,
    (err, result) => err ? console.log(err) : res.json(result)));





  router.get("/allevent", (req, res) => {
    const  {a} =req.query

    var query = `select * from event `;
    pool.query(query, (err, result) => {
      if (err) throw err;
      else res.json(result);
    });
  });

module.exports = router;
