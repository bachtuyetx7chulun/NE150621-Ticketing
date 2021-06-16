import Joi from "joi";
import { Router, Request, Response, NextFunction, json } from "express";
import { httpStatus } from "../helper/status.helper";

const schema = {
  userSchema: Joi.object({
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9@#$%^&]{6,30}$"))
      .required(),
    email: Joi.string()
      .email({
        tlds: { allow: ["com", "net"] },
      })
      .required(),
  }),
};

export const validate = {
  userValidate: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.userSchema.validateAsync(req.body);
      next();
    } catch (error) {
      return res
        .status(httpStatus.badRequest.status)
        .json({ ...error, status: httpStatus.badRequest.status });
    }
  },
};
