import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  res.send("Login success");
});

authRouter.post("/signup", (req, res) => {
  res.send("Sing up success");
})

export default authRouter;