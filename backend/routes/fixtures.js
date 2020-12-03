const express = require('express');
const router = express.Router();
const connection = require('../../connection')


router.get('/fifa', function(req,res){
    connection.query(
            `SELECT *
            FROM fixtures_fifa` ,
    (err, rows, fields)=>{
        if(err){
            console.log(err);
        }else{

            res.json({
                message: "success",
                data: rows 
            });
        }
    })
});

router.get('/nba', function(req,res){
    connection.query(
    `` , 
    (err, rows, fields)=>{
        if(err){
            console.log(err);
        }else{
            res.json({
                message: "success",
                data: rows
            });
        }
    })
});

router.post('/fifa/score',(req, res) => {
    let data = req;
    console.log(data);
    // let data = {user_name: req.body.user_name, user_img: req.body.user_img};
    // let sql = "INSERT INTO Users SET ?";
    // let query = connection.query(sql, data,(err, results) => {
    //   if(err) throw err;
    //   res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    // });
});

module.exports = router;