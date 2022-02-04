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
    const sample1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Yes");
    myLibrary.push(sample1);
    const sample2 = new Book("Harry Potter", "J.K Rowling", "504", "No");
    myLibrary.push(sample2);
    display();
}

// function to show current library
const container = document.querySelector('#libContainer');
function display() {
    console.log(myLibrary);
    newGrid();
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].id = i;
        console.log(myLibrary[i]);

        const newCard = document.createElement('div');
        const newCardTitle = document.createElement('h2');
        const newCardText = document.createElement('div');
        const newCardDelete = document.createElement('span');

        const newCardAuthor = document.createElement('div');
        const newCardPages = document.createElement('div');
        const newCardRead = document.createElement('div');

        newCardTitle.textContent = myLibrary[i].title;
        newCardDelete.textContent = "x";

        newCardAuthor.textContent = "By " + myLibrary[i].author;
        newCardPages.textContent = myLibrary[i].pages + " pages";
        newCardRead.textContent = "Read: " + myLibrary[i].read;

        newCard.classList.add("card");
        newCardDelete.classList.add("cardDelete")

        newCard.appendChild(newCardTitle);
        newCard.appendChild(newCardDelete);

        newCardText.appendChild(newCardAuthor);
        newCardText.appendChild(newCardPages);
        newCardText.appendChild(newCardRead);
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


// // button to add a new book
// const newB = document.getElementById("newButton");
// newB.addEventListener("click", function () {
//     addBookToLibrary();
//     display();
// });





// Get the modal
var modal = document.getElementById("newModal");

// Get the button that opens the modal
var btn = document.getElementById("newButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user presses the 'submit' button, add the book to the library
function validate() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.querySelector('input[name="read"]:checked').value;
  const newBook = new Book(title, author, pages, read);
  console.log(newBook);
  myLibrary.push(newBook);
  display();
  modal.style.display = "none";

}