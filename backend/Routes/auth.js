import { Router } from "express";
import { signupController, loginController } from "../Controllers/auth.js";
import { signupValidation, loginValidation } from "../Middlewares/AuthValidation.js";

const authRouter = Router();

authRouter.post("/login", loginValidation, loginController);
authRouter.post("/signup", signupValidation, signupController);

export default authRouter;