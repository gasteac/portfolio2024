const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");
const app = express();
dbConnection();
app.use(cors());
app.use(express.json());
app.use("/api/form", require("./routes/message"));
// app.use('*', (req, res)=>{res.sendFile(__dirname + '/index.html')});
app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
