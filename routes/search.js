const express = require("express");
const { showProductSelect } = require("../Controller/homeController");
const { getHistory } = require("../Module/searchModule");
const router = express.Router();
//导入Module
const canDirect = require("../utils/canDirect");

const pageData = {
  SelectData: [],
  items: [],
};

router.get("/", async (req, res) => {
  if (await canDirect(req, res)) {
    res.render("search", pageData);
  } else res.redirect("/login");
});

router.post("/ProductSelect", async (req, res) => {
  const item = await showProductSelect(req, res);
  pageData.SelectData = item;
  res.json(item);
});

router.post("/history", async (req, res) => {
  const { productId } = req.body;
  const items = await getHistory(productId);
  pageData.items = items;
  res.json(items);
});
module.exports = router;
