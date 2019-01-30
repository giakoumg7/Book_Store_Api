import * as bodyparser from "body-parser";
import { Request, Response, Router } from "express";
const jsonParser = bodyparser.json();
import { getBook } from "../api/sample/getBook";
import { getBooks } from "../api/sample/getBooks";
import { postBook } from "../api/sample/postBook";

const router: Router = Router();

router.get("/", (req, res, next) => {
    res.send("BookStore API");
});

router.post("/books", jsonParser, postBook);
router.get("/books/:id", getBook);
router.get("/books", getBooks);

export const BookController: Router = router;
