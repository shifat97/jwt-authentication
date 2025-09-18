import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./Models/db.js";
import configureRoutes from "./Routes/index.js";

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

configureRoutes(app);

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
})