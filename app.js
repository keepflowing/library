const myLibrary = [];

function Book(title, author, year) {
    return {title, author, year}
}

function addBookToLibrary() {
  // do stuff here
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 1936)

myLibrary.push(theHobbit)