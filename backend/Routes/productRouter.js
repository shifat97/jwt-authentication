import { Router } from "express";
import ensureAuthenticated from "../Middlewares/AuthRoutes.js";

const productRouter = Router();

productRouter.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "Mobile",
      price: "10000",
    },
    {
      name: "TV",
      price: "20000",
    },
  ])
})

export default productRouter;