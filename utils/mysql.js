const mysql = require("mysql");

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
    this.connection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL database");
    });
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}

const config = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "practice_cms",
};

const database = new Database(config);

module.exports = database;
