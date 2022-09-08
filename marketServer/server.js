const express = require("express");
const cors = require("cors");
const { getPlan } = require("./controller");
const { postPlan } = require("./controller");
const { getUser } = require("./controller");
const { postUser } = require("./controller");
const bodyParser = require("body-parser");
const database = require("./database");
const { connection } = database;

const app = express();

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());

app.get("/api/plan", getPlan);

app.post("/api/plan", postPlan);

//app.get("/api/user", getUser);

//app.post("/api/user", postUser);

connection.sync({}).then(() => {
  app.listen(5000, () => {
    console.log(`Server is booping on Port 5000`);
  });
});
