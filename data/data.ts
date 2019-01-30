// tslint:disable-next-line:no-var-requires
const jsonBooks = require("./books.json");
// tslint:disable-next-line:no-var-requires
const jsonReviews = require("./reviews.json");

export class  BookStore {

     public static books = jsonBooks;
     public static reviews = jsonReviews;
}
