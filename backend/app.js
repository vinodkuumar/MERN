const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");

const api = process.env.API_URL;
const productsRouter = require("./routers/products");

//middle ware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Routers
app.use(`${api}/products`, productsRouter);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "eshop_database",
  })
  .then(() => {
    console.log("database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log(api);
  console.log("Server is running now on http://localhost:3000");
});
