import express from "express";
const app = express();

import * as bodyparser from "body-parser";
const jsonParser = bodyparser.json();

import {BookStore} from "./data/data";
import { apiGetListofBooks } from "./api/sample/apiGetListofBooks";
import { apiGetaSingleBook } from "./api/sample/apiGetaSingleBook";
import { apiAddBook } from "./api/sample/apiAddBook";

console.log(BookStore.books);

app.get("/", (req, res, next) => {
    res.send("BookStore API");
});

app.get("/books", apiGetListofBooks);  // Gets a list of book
app.get("/books/:id", apiGetaSingleBook); // Gets a single book with summary and reviews
app.post("/books/add", jsonParser, apiAddBook); // Adds a new book

app.listen(process.env.PORT || 8080, () => console.log("Server Started..."));
