
export class Review {
    public bookID: [number];
    public reviewtitle: [string];
    public stars: [number];
    constructor(data: any) {
        this.bookID = data.bookID;
        this.reviewtitle = data.reviewtitle;
        this.stars = data.stars;
    }
}
