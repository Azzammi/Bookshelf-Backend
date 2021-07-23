const {addNewBookHandler} = require('./handler/addNewBook');
const {getBooksHandler, getBookByIdHandler} = require('./handler/getBook');


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
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: () => {},
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: () => {},
  },
];

module.exports = routes;
