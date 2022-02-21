
const mysql = require('mysql');

/*
*
* Connection build a stairs b/w backend and databasde.
*/
const connection = mysql.createConnection({
  host: "database-1.caaorwajiduu.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Wpadmin123#",
  database: "chat"
});


/*
* connecti to connect that datbase using abive conneciton.
**/

exports.connectDatabase = () => {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
            });
}

exports.executeQuery = (sqlQuery) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlQuery, (err, response) => {
            if(err) throw err;
            resolve(response);
        })
    })
}

