const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server Started at port no. 3000");
});

app.get("/", (req, res) => {
  res.send("Hello jee , Kaisha ho saare");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Submitted Sucessfully");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Sucessful");
  })
  .catch((error) => {
    console.log("Recived an Error");
  });
