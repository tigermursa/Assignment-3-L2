import { z } from "zod";

export const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }),
    author: z.string({ required_error: "Author is required" }),
    genre: z.enum(
      ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
      {
        required_error: "Genre is required",
      }
    ),
    isbn: z.string({ required_error: "ISBN is required" }),
    description: z.string().optional(),
    copies: z
      .number()
      .int()
      .nonnegative({ message: "Copies must be a non-negative integer" }),
    available: z.boolean().optional(),
  }),
});
