Library Management

This project is a backend system built with TypeScript, Express, Mongoose, and Zod to manage a library. It provides RESTful APIs to handle books and borrowing operations.

Tech Stack

- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose
- Zod (for validation)

API Endpoints

1. Create a Book

- Method: POST
- Endpoint: /api/books
- Description: Add a new book to the library.
- Request Body Example:
  {
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "stock": 10
  }

2. Get All Books

- Method: GET
- Endpoint: /api/books
- Description: Fetch all books from the library.

3. Update a Book

- Method: PATCH
- Endpoint: /api/books/:id
- Description: Update book information by ID.
- Example URL: /api/books/68699732fe28f563975155c1
- Request Body Example:
  {
  "title": "The Great Gatsby - Updated",
  "stock": 5
  }

4. Delete a Book

- Method: DELETE
- Endpoint: /api/books/:id
- Description: Remove a book by ID.
- Example URL: /api/books/68698e627f7e510ce2fba45a

5. Borrow a Book

- Method: POST
- Endpoint: /api/borrow
- Description: Borrow a book with quantity and due date.
- Request Body Example:
  {
  "book": "68699732fe2XXX3975155c1",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
  }

6. Get Borrow Summary

- Method: GET
- Endpoint: /api/borrow
- Description: Get a list of all borrowed books and their details.

Getting Started

Prerequisites

- Node.js installed
- MongoDB connection URI set in .env

Installation
npm install

Run the Server
npm run dev

Features

- Full CRUD operations for books
- Borrow system with quantity and due date
- Data validation using Zod
- Centralized error handling
