/* eslint linebreak-style: ["error", "windows"] */
const showResult = (prize) => {
  document.querySelector('.lottery').classList.remove('first', 'second', 'third', 'none');
  document.querySelector('.lottery').classList.add('result', prize.toLowerCase());
  const resultText = (prizeInfo) => {
    let content = '';
    switch (prizeInfo) {
      case 'FIRST':
        content = '恭喜你中頭獎了！日本東京來回雙人遊！';
        break;
      case 'SECOND':
        content = '二獎！90 吋電視一台！';
        break;
      case 'THIRD':
        content = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
        break;
      case 'NONE':
        content = '銘謝惠顧';
        break;
      default:
        break;
    }
    return content;
  };
  document.querySelector('.lottery__result').innerText = resultText(prize);
};

document.querySelector('.lottery__button').addEventListener('click', () => {
  const request = new XMLHttpRequest();
  const url = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
  request.open('GET', url, true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      let data;
      try {
        data = JSON.parse(request.responseText);
      } catch (error) {
        alert('系統不穩定，請再試一次');
        return;
      }

      if (!data.prize) {
        alert('系統不穩定，請再試一次');
        return;
      }
      showResult(data.prize);
    } else {
      alert('系統不穩定，請再試一次');
    }
  };
  request.onerror = function err() {
    alert('系統不穩定，請再試一次');
  };

  request.send();
});
