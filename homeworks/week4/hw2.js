/* eslint linebreak-style: ["error", "windows"] */
const request = require('request');

const args = process.argv;
const url = 'https://lidemy-book-store.herokuapp.com';

function listBooks() {
  request.get(
    `${url}/books?_limit=20`,
    (error, response, body) => {
      if (error) {
        console.log('error:', error);
        return;
      }
      const data = JSON.parse(body);
      for (let i = 0; i < data.length; i += 1) {
        console.log(`${data[i].id} ${data[i].name}`);
      }
    },
  );
}

function readBook(bookId) {
  request.get(
    `${url}/books/${bookId}`,
    (error, response, body) => {
      if (error) {
        console.log('error:', error);
        return;
      }
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

function deleteBook(bookId) {
  request.delete(
    `${url}/books/${bookId}`,
    (error) => {
      if (error) {
        console.log('error:', error);
        return;
      }
      console.log(`已刪除第${bookId}本書`);
    },
  );
}

function createBook(bookName) {
  request.post(
    {
      url: `${url}/books`,
      form: {
        name: bookName,
      },
    },
    (error) => {
      if (error) {
        console.log('error:', error);
        return;
      }
      console.log(`已新增：${bookName}`);
    },
  );
}

function updateBook(bookId, newName) {
  request.patch(
    {
      url: `${url}/books/${bookId}`,
      form: {
        name: newName,
      },
    },
    (error) => {
      if (error) {
        console.log('error:', error);
        return;
      }
      console.log(`已更新第${bookId}本書`);
    },
  );
}

switch (args[2]) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBook(args[3]);
    break;
  case 'delete':
    deleteBook(args[3]);
    break;
  case 'create':
    createBook(args[3]);
    break;
  case 'update':
    updateBook(args[3], args[4]);
    break;
  default:
    console.log('請輸入相關指令: list, read, delete, create and update');
    break;
}
