const express = require('express');
const router = express.Router();
const connection = require('../../connection')


router.get('/fifa', function(req,res){
    connection.query(
    `SELECT * 
    FROM game_details gd 
    JOIN Users u 
        ON u.user_id = gd.user_id 
    JOIN points p 
        ON u.user_id = p.user_id 
    ORDER BY points_fifa DESC` , 
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
    `SELECT * 
    FROM game_details gd 
    JOIN Users u 
        ON u.user_id = gd.user_id 
    JOIN points p 
        ON u.user_id = p.user_id 
    ORDER BY points_nba DESC` , 
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

module.exports = router;