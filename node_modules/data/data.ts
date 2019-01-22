const jsonBooks = require("./books.json");
const jsonReviews = require("./reviews.json");

export class  BookStore {

     static books = jsonBooks;
     static reviews = jsonReviews;
}
