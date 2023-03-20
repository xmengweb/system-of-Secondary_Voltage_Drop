const database = require("../utils/mysql");

async function getUserInfo(userId) {
  const sql = `SELECT * FROM users WHERE id = ${userId}`;
  const data = await database.query(sql);
  return data;
}

async function getLogin(name, password) {
  const sql = `SELECT * FROM users WHERE name = '${name}' AND password = '${password}'`;
  const data = await database.query(sql);
  return data;
}

module.exports = {
  getUserInfo,
  getLogin,
};
