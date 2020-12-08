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
    ORDER BY points_fifa DESC, fifa_gd DESC` , 
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
    ORDER BY points_nba DESC, nba_pd DESC` , 
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

router.get('/all-games', function(req,res){
    connection.query(
    `SELECT * FROM game_details gd
    JOIN points p
    ON gd.user_id = p.user_id` , 
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