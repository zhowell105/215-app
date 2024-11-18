export class Citation {
    private authorName: AuthorName[];
    private publicationDate: Date;
    bookTitle: string;
    publisher: string;
    publisherLocation?: string;
    url?: string;

    constructor(authorName: AuthorName[], publicationDate: Date, bookTitle: string, publisher: string) {
        this.authorName = authorName;
        this.publicationDate = publicationDate;
        this.bookTitle = bookTitle;
        this.publisher = publisher;
    }

    get getPublicationYear(): string {
        return this.publicationDate.getFullYear().toString();
    }

    get getMonthAndDayDate(): string {
        return `${this.publicationDate.getMonth() + 1}/${this.publicationDate.getDate()}/${this.publicationDate.getFullYear()}`;
    }

    get author(): string {
        let authorString = "";
        this.authorName.forEach((author, index) => {
            authorString += `${author.lastName}, ${author.firstName}`;
            if (author.middleInitialArray) {
                author.middleInitialArray.forEach((middleInitial) => {
                    authorString += `${middleInitial}. `;
                });
            }
            if (author.suffix) {
                authorString += `${author.suffix}`;
            }
            if (index < this.authorName.length - 1) {
                authorString += ", ";
            }
        });
        return authorString;
    }
}

interface AuthorName {
    firstName: string;
    lastName: string;
    middleInitialArray?: string[];
    suffix?: string;
}
