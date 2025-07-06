import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error(err);

  const statusCode = err.status || 500;

  if (err.name === "ValidationError") {
    // Handle both Mongoose and Zod validation errors
    res.status(statusCode).json({
      message: err.message || "Validation failed",
      success: false,
      error: {
        name: err.name,
        errors: err.errors,
      },
    });
    return;
  }

  // Fallback for all other errors
  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    success: false,
  });
};
