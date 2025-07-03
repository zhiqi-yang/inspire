const express = require("express");
const open = require("open");
const { env, static, CONTEXT_PATH, dist } = require("./config");

const app = express();

app.use(express.static(static));
app.use(express.static(dist));

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(8807, "0.0.0.0", function (err) {
  err && console.log(err);
});

open("http://127.0.0.1:8807");
