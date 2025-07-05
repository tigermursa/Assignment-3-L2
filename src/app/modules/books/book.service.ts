import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const BookService = {
  async createBook(payload: IBook) {
    const result = await Book.create(payload);
    return result;
  },
};
