import express, { Application, NextFunction, Request, Response } from "express";
import logger from "morgan";
import cors from "cors";
import signRouter from "./routes/sign.route";
import { GetError, HandleError } from "./middlewares/error.middleware";

export default class App {
  private app: Application;
  constructor() {
    this.app = express();
    this.init();
    this.router();
  }

  init() {
    this.app.set("port", 4000);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(logger("short"));
  }

  router() {
    this.app.use(signRouter);
    this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.send("123");
    });
    this.app.use(GetError);
    this.app.use(HandleError);
  }

  listen() {
    const port = this.app.get("port");
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
