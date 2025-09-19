import authRouter from "./auth.js";
import productRouter from "./productRouter.js";

const configureRoutes = (app) => {
  app.use("/auth", authRouter);
  app.use("/products", productRouter);
}

export default configureRoutes;