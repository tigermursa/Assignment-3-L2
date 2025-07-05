import express from "express";

import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "./book.controller";
import { createBookZodSchema } from "./book.validation";
import validateRequest from "../../middleware/validateRequest";

const bookRouter = express.Router();

bookRouter.post("/", validateRequest(createBookZodSchema), createBook);
bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBookById);
bookRouter.put("/:bookId", updateBook);
bookRouter.delete("/:bookId", deleteBook);

export default bookRouter;
