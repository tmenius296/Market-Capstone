const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const { getPlan } = require("./controller");
const { postPlan } = require("./controller");

app.get("/api/plan", getPlan);

app.post("/api/plans", postPlan);

app.listen(5000, () => {
  console.log(`Server is booping on Port 5000`);
});
