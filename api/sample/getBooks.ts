import { RequestHandler } from "express";
import { BookStore } from "../../data/data";

export const getBooks: RequestHandler = ( req, res, next) => {

    res.json(BookStore.books);

};
