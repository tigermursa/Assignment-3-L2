import express from "express";

import { createBook, getAllBooks, getBookById } from "./book.controller";
import { createBookZodSchema } from "./book.validation";
import validateRequest from "../../middleware/validateRequest";

const bookRouter = express.Router();

bookRouter.post("/", validateRequest(createBookZodSchema), createBook);
bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBookById);

export default bookRouter;
