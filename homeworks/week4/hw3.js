/* eslint linebreak-style: ["error", "windows"] */
const request = require('request');

const args = process.argv;
const url = 'https://restcountries.eu/rest/v2';

const countryName = args[2];

if (!countryName) {
  console.log('請輸入國家名稱');
} else {
  request.get(
    `${url}/name/${countryName}`,
    (error, response, body) => {
      if (error) {
        console.log('error:', error);
        return;
      }
      const data = JSON.parse(body);

      if (data.status === 404) {
        console.log('找不到國家資訊');
      }

      data.forEach((info) => {
        console.log(`國家：${info.name}`);
        console.log(`首都：${info.capital}`);
        console.log(`貨幣：${info.currencies[0].code}`);
        console.log(`國碼：${info.callingCodes[0]}`);
      });
    },
  );
}
