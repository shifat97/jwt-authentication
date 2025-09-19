import z from "zod";

const signupValidation = (req, res, next) => {
  const schema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    password: z.string().min(4).max(100)
  });

  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Bad request", error: result.error.errors });
  }
  next();
}

const loginValidation = (req, res, next) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(100)
  });

  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Bad request", error: result.error.errors });
  }
  next();
}

export { signupValidation, loginValidation };