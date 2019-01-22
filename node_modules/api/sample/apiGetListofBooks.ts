import { RequestHandler } from "express";
import { BookStore } from "../../data/data";

export const apiGetListofBooks: RequestHandler = ( req, res, next) => {

    res.json(BookStore.books);

};