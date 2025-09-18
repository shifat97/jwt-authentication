import authRouter from "./auth.js";

const configureRoutes = (app) => {
  app.use("/", authRouter);
}

export default configureRoutes;