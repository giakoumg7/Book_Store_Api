import { RequestHandler } from "express";
import { BookStore } from "../../data/data";
import { BookDetails } from "../../model/shared/bookDetails";

export const getBook: RequestHandler = (req, res, next) => {
    const bookID = req.params.id;
    const selectedBook = BookStore.books.find((element: any) => element.id === bookID);
    if (selectedBook) {

        const selectedReviews = BookStore.reviews.filter((item: any) => item.bookID === bookID);
        res.json(new BookDetails(selectedBook, selectedReviews));

    } else {

        res.json({status: "failed", message: "Book not found"});

    }
};
