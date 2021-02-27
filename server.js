const express = require("express");

const mongoose = require("mongoose");
// const { Meetings } = require("./api/models/schedulingModel");
const routes = require("./api/routes/schedulingRoute");
const { MONGODB } = require("./config.js");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongodb connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`🚀 server running at ${res.url}`);
  });
