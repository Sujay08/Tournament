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
    let data = req.body;
    // console.log(data)
    let sql
    if(data.winner_user_id != 0){
        sql = `
         UPDATE game_details 
             SET 
                 fifa_played = fifa_played + 1,
                 fifa_won = fifa_won + 1
             WHERE
                 user_id = ${data.winner_user_id};
    
        UPDATE game_details 
             SET 
                 fifa_played = fifa_played + 1,
                 fifa_lost = fifa_lost + 1
             WHERE
                 user_id = ${data.loser_user_id};
                 
    
            UPDATE fixtures_fifa
                SET 
            winner_user_id = ${data.winner_user_id}
            WHERE fixtures_id = ${data.fixtures_id};
        `;
    }else{
        sql = `
         UPDATE game_details 
              SET 
                  fifa_played = fifa_played + 1,
                  fifa_draw = fifa_draw + 1
              WHERE
                  user_id = ${data.home_user_id};

            UPDATE game_details 
              SET 
                  fifa_played = fifa_played + 1,
                  fifa_draw = fifa_draw + 1
              WHERE
                user_id = ${data.away_user_id};
         `
    }
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": 'success'}));
    });
});

module.exports = router;

// UPDATE game_details 
//         SET 
//             fifa_played = fifa_played + 1,
//             fifa_won = fifa_won + 1
//         WHERE
//             user_id = ${data.winner_user_id};