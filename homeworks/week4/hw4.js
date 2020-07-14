/* eslint linebreak-style: ["error", "windows"] */
const request = require('request');

const clientId = 's44s145uexjgeu9mqqa1s93oc1bnli';
const url = 'https://api.twitch.tv/kraken';

request({
  method: 'GET',
  url: `${url}/games/top`,
  headers: {
    'Client-ID': clientId,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
}, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }

  const data = JSON.parse(body);
  const games = data.top;
  games.forEach((game) => {
    console.log(`${game.viewers} ${game.game.name}`);
  });
});
