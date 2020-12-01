var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'very_strong_password',
  database: 'tournament'
})
// console.log(connection);
connection.connect((err)=>{
    if(err){
        console.log('Failed')
    } else{
        console.log('Connected')
    }
})

module.exports = connection;