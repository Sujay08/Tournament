const express = require('express');
const router = express.Router();
const connection = require('../../connection')

// router.get('', (req, res, next)=>{
//     res.json({test: connection})
// })

router.get('/all',function(req,res){
    connection.query("SELECT * FROM Users" , (err, rows, fields)=>{
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

router.post('/new',(req, res) => {
    let data = {user_name: req.body.user_name, user_img: req.body.user_img};
    let sql = "INSERT INTO Users SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

module.exports = router;