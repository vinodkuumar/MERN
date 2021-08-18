const express = require("express");
const app = express();
const bodyParser = require('body-parser');

require("dotenv/config");

const api = process.env.API_URL;

//middle ware
app.use(bodyParser.json());

// http://localhost:3000/api/v1/products
app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "vinod",
    image: "some url",
  };
  res.send(product);
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

app.listen(3000, () => {
  console.log(api);
  console.log("Server is running now on http://localhost:3000");
});
