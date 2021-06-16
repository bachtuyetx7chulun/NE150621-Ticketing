import { Router, Request, Response, NextFunction } from "express";
import { httpStatus } from "../helper/status.helper";
import { validate } from "../helper/validate.helper";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hi there!");
});

router.post(
  "/api/user/signup",
  validate.userValidate,
  (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    console.log(req.body);

    res.send("Hi there!");
  }
);

export default router;
