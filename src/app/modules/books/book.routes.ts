import express from "express";

import { createBook } from "./book.controller";
import { createBookZodSchema } from "./book.validation";
import validateRequest from "../../middleware/validateRequest";

const bookRouter = express.Router();

bookRouter.post("/", validateRequest(createBookZodSchema), createBook);

export default bookRouter;
