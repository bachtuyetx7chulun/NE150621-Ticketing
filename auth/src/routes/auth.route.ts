import express, { Router, Request, Response, NextFunction } from "express";
const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hi there!");
});

export default router;
