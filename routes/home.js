const express = require("express");
const axios = require("axios");
axios.defaults.baseURL = "http://localhost:8000";
const router = express.Router();
//导入Module
const canDirect = require("../utils/canDirect");
//导入Controller
const {
  showProductList,
  showProductSelect,
  showInputInfo,
} = require("../Controller/homeController");

const pageData = {
  data: [],
  outputTable: {},
};

axios.get("/home/ProductList").then((data) => {
  pageData.data = data.data.data;
});

router.get("/", async (req, res) => {
  if (await canDirect(req, res)) {
    res.render("home", pageData);
  } else res.redirect("/login");
});

router.get("/ProductList", showProductList);

router.post("/ProductSelect", async (req, res) => {
  const item = await showProductSelect(req, res);
  pageData.data = item;
  res.json(item);
});

router.post("/InfoTable", async (req, res) => {
  const table = await showInputInfo(req, res);
  pageData.outputTable = table;
  res.json(table);
});
module.exports = router;
