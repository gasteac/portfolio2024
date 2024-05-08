import express from "express";
import mongoose from 'mongoose';
import { sendMessage } from "./controllers/message.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import cors from "cors";
mongoose.connect(process.env.DB_CNN).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));
const __dirname = path.resolve();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/form", sendMessage);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
