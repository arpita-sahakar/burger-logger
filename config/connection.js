// Set up MySQL connection.
const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });


const connection = mysql.createConnection({
  host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "kqlpahnoeubbalj5",
  password: "muu3d2eftcek44s7",
  database: "yucg4x3tmv9t38gp"
});
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
