const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const ejs = require("ejs");
//Controller
const { userLogin } = require("./Controller/userController");

//导入路由
const inputRouter = require("./routes/home");
const searchRouter = require("./routes/search");
const outputRouter = require("./routes/output");

//处理静态资源,请求头数据
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));

//渲染页面
app.get("/", (req, res, next) => {
  res.redirect("/home");
});
app.get("/login", (req, res) => {
  res.render("login", { message: undefined });
});

//使用中间件:home页面路由
app.use("/home", inputRouter);
app.use("/search", searchRouter);
app.use("/output", outputRouter);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});

app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  const user = await userLogin(name, password);
  if (user) {
    res.cookie("userId", user.id, { maxAge: 3600000 });
    res.json({
      code: 200,
      msg: "Login Success",
    });
  } else {
    const message = "Invalid username or password";
    res.status(400);
    res.json({
      code: 400,
      msg: message,
    });
  }
});
