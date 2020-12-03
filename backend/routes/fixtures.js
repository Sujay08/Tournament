const express = require('express');
const router = express.Router();
const connection = require('../../connection')


router.get('/fifa', function(req,res){
    connection.query(
            `SELECT 
            fixtures_id,
            home_user_id,
            away_user_id,
            winner_user_id,
            user_name AS home_user_name,
            user_img AS home_user_img
            FROM fixtures_fifa ff
            JOIN Users u
                ON ff.away_user_id = u.user_id;` , 
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