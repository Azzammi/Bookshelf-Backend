const books = require('../books');

const editBookByIdHandler = (request, h) => {
  const {bookId} = request.params;

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const updatedAt = new Date().toISOString();

  let message = '';
  if (!name) {
    message = 'Gagal memperbarui buku. Mohon isi nama buku';
  }
  if (readPage > pageCount) {
    message = 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount';
  }
  if (message) {
    const response = h.response({
      status: 'fail',
      message: message,
    });
    response.code(400);
    return response;
  }

  const index = books.findIndex((book) => book.id === bookId);
  if (index !== -1 ) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {editBookByIdHandler};
