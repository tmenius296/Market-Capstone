const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getHint } = require("./controller");
const { getAllNames } = require("./controller");

const { postName } = require("./controller");
const { deleteNames } = require("./controller");

app.get("/api/hint", getHint);

app.get("/api/names", getAllNames);

app.post("/api/names", postName);
app.delete("/api/names", deleteNames);

app.listen(3000, () => console.log("Server running on 4000"));
