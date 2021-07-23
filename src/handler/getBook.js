const books = require('../books');

const getBooksHandler = () => {
  const resultBooks = [];

  books.map((book) => {
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
  const {id} = request.params;

  const book = books.filter((book) => book.id === id)[0];
  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        note,
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

module.exports = {getBooksHandler, getBookByIdHandler};