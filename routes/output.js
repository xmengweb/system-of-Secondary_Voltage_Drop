const express = require("express");
const { getOcrText } = require("../Controller/outputController");
const { getProjectResult, insertInfos } = require("../Module/outputModule");
const router = express.Router();
//导入Module
const canDirect = require("../utils/canDirect");

const pageData = {
  simpleResult: {},
  detailResult: [],
};

router.get("/", async (req, res) => {
  if (await canDirect(req, res)) {
    const detail = await getOcrText();
    pageData.detailResult = detail;
    res.render("output", pageData);
  } else res.redirect("/login");
});

router.post("/result", async (req, res) => {
  const { productId, projectId } = req.body;
  const simpleItem = await getProjectResult(projectId);
  pageData.simpleResult = simpleItem;
  console.log(productId, projectId);
  pageData.simpleResult.productId = productId;
  res.json(simpleItem);
});

router.post("/insert", async (req, res) => {
  const {
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
  } = req.body;
  // console.log(req.body);
  const items = await insertInfos(
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
  );
  // console.log(items);
  res.json({
    code: 200,
  });
});
module.exports = router;
