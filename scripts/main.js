let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + read;
    }
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}





const book1 = new Book ("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(book1.info());