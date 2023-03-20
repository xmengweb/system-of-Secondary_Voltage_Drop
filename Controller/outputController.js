const axios = require("axios");
const http = require("http");
// axios.post("http://www.7-an.com:5000/api/paddle", {
//     ImageBase64: img_b64,
//     IsCorrection: 1,
//   })
//   .then((res) => {
//     console.log(res.data);
//   });
async function getOcrText() {
  return new Promise((resolve, reject) => {
    // 发送 HTTP 请求，获取图片二进制数据
    const url = "http://xm-cug.xyz:8000/img?id=1";
    http.get(url, function (res) {
      let data = "";
      res.setEncoding("binary");
      res.on("data", function (chunk) {
        data += chunk;
      });
      res.on("end", function () {
        // 将图片二进制数据转换为 Base64 格式
        const base64 = Buffer.from(data, "binary").toString("base64");
        axios
          .post("http://ocr.cbnxzs.com:8052/api/paddle", {
            img: base64,
            enhance: false,
            SecretId: "AKIDrZ4KMBoFSTHRLzLSSL5j9IBoQt74lFXa",
            SecretKey: "5wZx61h7MPDm7E7mCOL3XoqdGdnjRxFK",
          })
          .then((res) => {
            resolve(res.data.split(" "));
          });
      });
    });
  });
}

module.exports = {
  getOcrText,
};
