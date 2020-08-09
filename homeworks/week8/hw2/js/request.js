/* eslint linebreak-style: ["error", "windows"] */
const url = 'https://api.twitch.tv/kraken';
const clientId = 's44s145uexjgeu9mqqa1s93oc1bnli';

const getTopGames = (cb) => {
  const request = new XMLHttpRequest();
  request.open('GET', `${url}/games/top?limit=5`, true);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', clientId);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      cb(JSON.parse(request.responseText));
    }
  };
  request.send();
};

const getStreams = (gameName, cb) => {
  const request = new XMLHttpRequest();
  request.open('GET', `${url}/streams?game=${encodeURIComponent(gameName)}&limit=20`, true);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', clientId);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      cb(JSON.parse(request.responseText));
    }
  };
  request.send();
};

const appendStreams = (gameData) => {
  document.querySelector('.game__list .wrapper').querySelectorAll('.list__block').forEach((element) => {
    element.remove();
  });
  gameData.forEach((data) => {
    const streamBlock = document.createElement('div');
    streamBlock.classList.add('list__block');
    streamBlock.innerHTML = `
      <div class="game__img">
        <img src=${data.preview.large} alt="">
      </div>
      <div class="game__channel">
        <div class="user__img">
          <img src=${data.channel.logo} alt="">
        </div>
        <div class="channel__info">
          <div class="channel__status">${data.channel.status}</div>
          <div class="channel__name">${data.channel.name}</div>
        </div>
      </div>
    `;
    document.querySelector('.game__list .wrapper').append(streamBlock);
  });
};

const renewStream = (element, gameName) => {
  element.classList.add('active');
  document.querySelector('.list__title').innerHTML = gameName;
  getStreams(gameName, (data) => {
    appendStreams(data.streams);
  });
};

getTopGames((topGames) => {
  topGames.top.forEach((game, index) => {
    const newGame = document.createElement('li');
    const gameName = game.game.name;
    if (index === 0) {
      renewStream(newGame, gameName);
    }
    newGame.innerHTML = `<li><a href="#">${gameName}</a></li>`;
    document.querySelector('.navbar__list').append(newGame);
  });
});

document.querySelector('.navbar__list').addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'a') {
    const gameName = e.target.innerText;
    const parentLi = e.target.parentNode;
    parentLi.parentNode.parentNode.querySelectorAll('li').forEach((element) => {
      element.classList.remove('active');
    });
    renewStream(parentLi, gameName);
  }
});
