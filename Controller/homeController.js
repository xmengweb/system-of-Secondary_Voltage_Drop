const {
  getProdectList,
  getProductSelect,
  getInputInfo,
} = require("../Module/homeModule");

async function showProductList(req, res) {
  const data = await getProdectList();
  res.json({
    data: [...data],
  });
}

async function showProductSelect(req, res) {
  const { ProductId } = req.body;
  const item = await getProductSelect(ProductId);
  return item;
}

async function showInputInfo(req, res) {
  const data = await getInputInfo();
  return (
    data.find((value) => {
      return parseInt(value.id) == parseInt(req.body.id);
    }) || {
      id: 0,
      project: "请选择项目",
      level: "",
      percent: "",
      min: "",
      max: "",
    }
  );
}

module.exports = {
  showProductList,
  showProductSelect,
  showInputInfo,
};
