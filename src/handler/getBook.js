const books = require('../books');

const getBooksHandler = (request, h) => {
  const {name, reading, finished} = request.query;
  let filteredBooks = [];
  let booksUsed = [];
  const resultBooks = [];

  if (name) {
    filteredBooks = books.filter((book) =>
      book.name.toLowerCase().search(name.toLowerCase()) > -1);
  } else if (!name) {
    filteredBooks = books;
  }

  if (reading == 1) {
    filteredBooks = books.filter((book) => book.reading == true);
  } else if (reading == 0) {
    filteredBooks = books.filter((book) => book.reading == false);
  } else if (finished == 1) {
    filteredBooks = books.filter((book) => book.finished == true);
  } else if (finished == 0) {
    filteredBooks = books.filter((book) => book.finished == false);
  }

  booksUsed = filteredBooks.length > 0 ? filteredBooks : books;
  booksUsed.map((book) => {
    resultBooks.push({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    });
  });

  return {
    status: 'success',
    data: {
      books: resultBooks,
    },
  };
};

const getBookByIdHandler = (request, h) => {
  const {bookId} = request.params;
  const book = books.filter((book) => book.id === bookId)[0];
  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  };

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

const getBooksAllHandler = (request, h) => {
  return {
    status: 'success',
    data: {
      books: books,
    },
  };
};

module.exports = {getBooksHandler, getBookByIdHandler, getBooksAllHandler};
