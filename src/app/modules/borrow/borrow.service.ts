import mongoose from "mongoose";
import { Borrow } from "./borrow.model";
import { Book } from "../books/book.model";
import { IBorrow } from "./borrow.interface";

const borrowBook = async (payload: IBorrow) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const book = await Book.findById(payload.book).session(session);
    if (!book) throw new Error("Book not found");

    if (book.copies === 0) {
      throw new Error("Book is currently not available for borrowing");
    }

    if (book.copies < payload.quantity) {
      throw new Error("Not enough copies available");
    }

    book.copies -= payload.quantity;

    book.available = book.copies > 0;

    await book.save({ session });

    const borrowRecord = await Borrow.create([payload], { session });

    await session.commitTransaction();
    session.endSession();

    return borrowRecord[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getBorrowSummary = async () => {
  const result = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookDetails",
      },
    },
    {
      $unwind: "$bookDetails",
    },
    {
      $project: {
        _id: 0,
        book: {
          title: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
        },
        totalQuantity: 1,
      },
    },
  ]);

  return result;
};

export const BorrowService = {
  borrowBook,
  getBorrowSummary,
};
