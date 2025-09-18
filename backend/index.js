import express from "express";
import dotenv from "dotenv";

import connectDB from "./Models/db.js";

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
})