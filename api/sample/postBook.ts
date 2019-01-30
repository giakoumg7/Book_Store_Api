import { RequestHandler } from "express";
import { BookStore } from "../../data/data";

import * as uuid from "uuid/v4";

export const postBook: RequestHandler = ( req, res, next) => {
    const newBook = {

        id: uuid.default(),
        title: req.body.title || "",
        // tslint:disable-next-line:object-literal-sort-keys
        author: req.body.author || "",
        publication_year : req.body.publication_year || "" ,
        category  : req.body.category || "",
        description  : req.body.description || "" ,
        price : req.body.price || "",

    };

    BookStore.books.push(newBook);
    res.send("Book successfully added");

};
