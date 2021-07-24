const {addNewBookHandler} = require('./handler/addNewBook');
const {
  getBooksHandler,
  getBookByIdHandler,
  getBooksAllHandler,
} = require('./handler/getBook');
const {editBookByIdHandler} = require('./handler/editBook');
const {deleteBookByIdHandler} = require('./handler/deleteBook');


const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNewBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/booksAll',
    handler: getBooksAllHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
