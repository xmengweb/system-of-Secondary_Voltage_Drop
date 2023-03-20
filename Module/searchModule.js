const database = require("../utils/mysql");

async function getHistory(productId) {
  const sql = `SELECT * FROM result WHERE productId = ${productId};`;
  const data = await database.query(sql);
  return data;
}

module.exports = {
  getHistory,
};
