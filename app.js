const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");

let baseURL = "https://node-js-unblocker.herokuapp.com/";

app.use("/", createProxyMiddleware({ target: baseURL, changeOrigin: true }));

//if original
app.get("/", (req, res) => {
  res.redirect(baseURL);
});

//if customizing

app.post("/free_search", (req, res) => {
  let { want_URL } = req.body;
  res.redirect(baseURL + want_URL);
});

app.listen(3000, () => {});
