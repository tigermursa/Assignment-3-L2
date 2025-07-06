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

bookRouter.post("/", validateRequest(createBookZodSchema), createBook); //create
bookRouter.get("/", getAllBooks); //getAll
bookRouter.get("/:bookId", getBookById); //getById
bookRouter.put("/:bookId", updateBook); //update
bookRouter.delete("/:bookId", deleteBook); //delete

export default bookRouter;
