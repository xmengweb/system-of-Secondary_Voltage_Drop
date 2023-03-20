const database = require("../utils/mysql");

async function getProdectList() {
  const sql = "SELECT * FROM info";
  const data = await database.query(sql);
  return data;
}

async function getProductSelect(ProductId) {
  let reg = /^[\d]+$/;
  if (reg.test(ProductId)) {
    const sql = `SELECT * FROM info WHERE id = ${ProductId}`;
    const item = await database.query(sql);
    return item;
  } else {
    const sql = "SELECT * FROM info";
    const data = await database.query(sql);
    return data;
  }
}

async function getInputInfo() {
  const sql = "SELECT * FROM info2";
  const data = await database.query(sql);
  return data;
}

module.exports = {
  getProdectList,
  getProductSelect,
  getInputInfo,
};
