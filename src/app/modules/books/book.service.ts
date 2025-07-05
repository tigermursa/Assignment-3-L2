import { SortOrder } from "mongoose";
import { IBook } from "./book.interface";
import { Book } from "./book.model";

//create
const createBook = async (payload: IBook) => {
  const result = await Book.create(payload);
  return result;
};

//getAll
const getAllBooks = async (query: {
  filter?: string;
  sortBy?: string;
  sort?: SortOrder;
  limit?: number;
}) => {
  const { filter, sortBy = "createdAt", sort = "desc", limit = 10 } = query;

  const conditions: any = {};
  if (filter) {
    conditions.genre = filter;
  }

  const result = await Book.find(conditions)
    .sort({ [sortBy]: sort })
    .limit(Number(limit));

  return result;
};

//getById
const getBookById = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getBookById,
};
