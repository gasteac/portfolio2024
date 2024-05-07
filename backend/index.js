const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");
const app = express();
app.use(cors());
app.use(express.json());
dbConnection();
app.use("/api/form", require("./routes/message"));
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
