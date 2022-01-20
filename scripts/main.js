// array to store books
let myLibrary = [];

// object constructor for a new book
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

// take user input for new book data and push it to the library array
function addBookToLibrary() {
    const newBook = new Book(prompt("Enter book title..", "The Hobbit"), prompt("Enter book author..", "J.R.R. Tolkien"), prompt("Enter number of pages..", "295"), prompt("Read:Y/N", "Y"));
    myLibrary.push(newBook);
}

// Onstart sample books
window.onload = function () {
    const sample1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Y");
    myLibrary.push(sample1);
    const sample2 = new Book("Harry Potter", "J.K Rowling", "504", "N");
    myLibrary.push(sample2);
    display();
}

// function to show current library
const container = document.querySelector('#libContainer');
function display() {
    console.log(myLibrary);
    newGrid();
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        const newCard = document.createElement('div');
        const newCardTitle = document.createElement('h2');
        const newCardText = document.createElement('div');

        const newCardText1 = document.createElement('div');
        const newCardText2 = document.createElement('div');
        const newCardText3 = document.createElement('div');

        newCardTitle.textContent = myLibrary[i].title;
        newCardText1.textContent = "By " + myLibrary[i].author;
        newCardText2.textContent = myLibrary[i].pages + " pages";
        newCardText3.textContent = "Read: " + myLibrary[i].read;

        newCard.classList.add("card");

        newCard.appendChild(newCardTitle);
        newCardText.appendChild(newCardText1);
        newCardText.appendChild(newCardText2);
        newCardText.appendChild(newCardText3);
        newCard.appendChild(newCardText);

        container.appendChild(newCard);
    }
}


//
function newGrid() {
    let allBoxes = container.getElementsByClassName('card');
    [].forEach.call(document.querySelectorAll('.card'), function (e) {
        e.parentNode.removeChild(e);
    });
}
//


// button to add a new book
const newB = document.getElementById("newButton");
newB.addEventListener("click", function () {
    addBookToLibrary();
    display();
});





