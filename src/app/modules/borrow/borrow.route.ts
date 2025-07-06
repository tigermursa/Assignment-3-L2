import express from "express";
import { borrowBook, getBorrowSummary } from "./borrow.controller";

const borrowRoutes = express.Router();

borrowRoutes.post("/", borrowBook); //borrow book
borrowRoutes.get("/", getBorrowSummary); //get summary

export default borrowRoutes;
