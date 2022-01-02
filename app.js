const express = require("express");
const cors = require("cors");

const items = require("./data");

const app = express();

app.use(cors());
app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(items);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App is running");
});
