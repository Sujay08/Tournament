const express = require('express');
const router = express.Router();
const connection = require('../../connection')

// router.get('', (req, res, next)=>{
//     res.json({test: connection})
// })

router.get('',function(req,res){
    connection.query("SELECT * FROM Users" , (err, rows, fields)=>{
        if(err){
            console.log(err);
        }else{
            res.json(rows);
        }
    })
});

module.exports = router;