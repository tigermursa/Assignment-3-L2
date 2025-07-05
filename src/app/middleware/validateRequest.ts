import { AnyZodObject } from "zod";
import { Request, Response, NextFunction, RequestHandler } from "express";

const validateRequest = (schema: AnyZodObject): RequestHandler => {
  return (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
      });
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Validation Error",
        error: error.errors,
      });
    }
  };
};

export default validateRequest;
