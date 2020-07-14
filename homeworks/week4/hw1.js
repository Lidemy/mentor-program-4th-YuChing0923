/* eslint linebreak-style: ["error", "windows"] */
const request = require('request');

const url = 'https://lidemy-book-store.herokuapp.com';

request.get(
  `${url}/books?_limit=10`,
  (error, response, body) => {
    if (error) {
      console.log('error:', error);
      return;
    }
    let data;
    try {
      data = JSON.parse(body);
    } catch (jsonError) {
      console.log('error:', jsonError);
      return;
    }
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  },
);
