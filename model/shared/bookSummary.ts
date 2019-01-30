
export class BookSummary {
    public id: [string];
    public title: [string];
    public author: [string];
    // tslint:disable-next-line:variable-name
    public publication_year: [string];
    public category: [string];
    public description: [string];
    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.publication_year = data.publication_year;
        this.category = data.category;
        this.description = data.description;
    }
}
