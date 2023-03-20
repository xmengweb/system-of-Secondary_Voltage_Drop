const database = require("../utils/mysql");

async function getProjectResult(projectId) {
  let reg = /^[\d]+$/;
  if (reg.test(projectId)) {
    const sql = `SELECT * FROM output WHERE id = ${projectId}`;
    const item = await database.query(sql);
    return item[0];
  }
}

async function insertInfos(
  productId,
  UU2n,
  tan,
  pointNumber,
  temperature,
  date,
  humidity,
  val1,
  val2,
  val3,
  val4
) {
  const sql = `INSERT INTO result (productId, UU2n, tan, pointNumber,temperature,date,humidity,val1,val2,val3,val4) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
  const data = [
    productId,
    UU2n,
    tan,
    pointNumber,
    temperature,
    date,
    humidity,
    val1,
    val2,
    val3,
    val4,
  ];
  const items = await database.query(sql, data);
  return items;
}

module.exports = {
  getProjectResult,
  insertInfos,
};
