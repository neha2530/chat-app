
const mysql = require('mysql');

/*
*
* Connection build a stairs b/w backend and databasde.
*/
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
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

