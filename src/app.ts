import express, { Application, NextFunction, Request, Response } from "express";

import path from "path";
import { errorHandler } from "./app/middleware/ErrorHandler";
import bookRouter from "./app/modules/books/book.routes";

const app: Application = express();

// Parsers
app.use(express.json());

// Routes
app.use("/api/books", bookRouter);

// Root route
app.get("/", (_req: Request, res: Response) => {
  const filePath = path.join(process.cwd(), "views", "status.html");
  res.sendFile(filePath);
});

// Global error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err); // Log the error for debugging
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Error Handler
app.use(errorHandler);

export default app;
