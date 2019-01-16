import { Review } from "./reviews";
import { BookSummary } from "./bookSummary";

export class BookDetails extends BookSummary {
    public bookCategory: [string];
    public bookDescription: [string];
    public price: [number];
    public reviews: Review[];
    constructor(bookData: any, reviewData: any) {
        super(bookData);
        this.bookCategory = bookData.bookCategory;
        this.bookDescription = bookData.tourDescription;
        this.price = bookData.price;
        this.reviews = reviewData.map((item: any) => new Review(item));
    }
}
