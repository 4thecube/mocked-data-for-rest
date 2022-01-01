const express = require("express");
const cors = require("cors");

const items = require("./data");

const app = express();

app.use(cors());
app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(items);
});

app.listen(4200, () => {
  console.log("App is running");
});
