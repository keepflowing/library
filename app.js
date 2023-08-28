// const baseUrl = "https://covers.openlibrary.org/b/isbn/"
const myLibrary = [];

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

class ImportantBook extends Book {
  constructor(title, author, year) {
    super(title, author, year);
  }
}

function addBookToLibrary(book, library) {
  library.push(book)
}

//9780547928227
let theHobbit = new ImportantBook("The Hobbit", "J.R.R Tolkien", 1936)
addBookToLibrary(theHobbit, myLibrary);