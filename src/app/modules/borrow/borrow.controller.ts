import { Request, Response, NextFunction } from "express";
import { BorrowService } from "./borrow.service";

export const borrowBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BorrowService.borrowBook(req.body);

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to borrow book",
    });
  }
};

export const getBorrowSummary = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BorrowService.getBorrowSummary();

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
