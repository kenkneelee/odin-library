let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + read;
    }
    // the constructor...
}

function addBookToLibrary() {
    const newBook = new Book(prompt("Enter book title..", "The Hobbit"), prompt("Enter book author..", "J.R.R. Tolkien"), prompt("Enter number of pages..", "295"), prompt("Read:Y/N", "Y"));
    myLibrary.push(newBook);
}

function display() {
    console.log(myLibrary);
}


const newB = document.getElementById("newButton");
newB.addEventListener("click", function () {
    addBookToLibrary();
    display();
});

console.log(myLibrary);