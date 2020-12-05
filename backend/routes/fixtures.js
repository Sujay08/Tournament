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
                 fifa_won = fifa_won + 1,
                 fifa_gs = fifa_gs + ${data.winning_score},
                 fifa_gc = fifa_gc + ${data.loosing_score}
             WHERE
                 user_id = ${data.winner_user_id};
    
        UPDATE game_details 
             SET 
                 fifa_played = fifa_played + 1,
                 fifa_lost = fifa_lost + 1,
                 fifa_gs = fifa_gs + ${data.loosing_score},
                 fifa_gc = fifa_gc + ${data.winning_score}
             WHERE
                 user_id = ${data.loser_user_id};
                 
    
            UPDATE fixtures_fifa
                SET 
            winner_user_id = ${data.winner_user_id},
            home_score = ${data.home_score},
            away_score = ${data.away_score}
            WHERE fixtures_id = ${data.fixtures_id};

            UPDATE points 
                SET points_fifa = points_fifa + 2
            WHERE user_id = ${data.winner_user_id};
        `;
    }else{
        sql = `
         UPDATE game_details 
              SET 
                  fifa_played = fifa_played + 1,
                  fifa_draw = fifa_draw + 1,
                  fifa_gs = fifa_gs + ${data.home_score},
                  fifa_gc = fifa_gc + ${data.home_score}
              WHERE
                  user_id IN ( ${data.home_user_id}, ${data.away_user_id} );   
                  
            UPDATE fixtures_fifa
                SET 
            winner_user_id = 0,
            home_score = ${data.home_score},
            away_score = ${data.away_score}
            WHERE fixtures_id = ${data.fixtures_id};

        UPDATE points 
            SET points_fifa = points_fifa + 1
            WHERE user_id IN (${data.home_user_id}, ${data.away_user_id});
         `
    }
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": 'success'}));
    });
});

module.exports = router;

// UPDATE game_details 
            //   SET 
            //       fifa_played = fifa_played + 1,
            //       fifa_draw = fifa_draw + 1
            //   WHERE
            //     user_id = ${data.away_user_id};

// UPDATE game_details 
//         SET 
//             fifa_played = fifa_played + 1,
//             fifa_won = fifa_won + 1
//         WHERE
//             user_id = ${data.winner_user_id};