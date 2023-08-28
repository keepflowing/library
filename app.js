// const baseUrl = "https://covers.openlibrary.org/b/isbn/"
const libraryDisplay = document.querySelector("#library");

class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }

    static getAuthor(book) {
      return book.author;
    }

    get title() {
      return this._title;
    }

    set title(val) {
      if (val.length < 1) {
        alert("Title needs to be atleast one character.")
        return;
      }
      this._title = val;
    }
}

const library = (() => {
  const books = [];

  const init = () => {
    libraryDisplay.innerHTML = "";
    for (let i in books) {
      let currBook = createBookElement(books[i]);
      libraryDisplay.append(currBook);
    }
  }
  
  const createBookElement = (book) => {
    let div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = 
    ` <h2>${book.title}</h2>
      <h3>${book.author}</h3>
      <p>${book.year}</p> `;
    return div;
  }

  const addBook = (book) => {
    books.push(book);
  } 

  return {init, addBook, books}

})();

//9780547928227
let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 1936)
library.addBook(theHobbit);