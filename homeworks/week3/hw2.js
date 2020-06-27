/* eslint linebreak-style: ["error", "windows"] */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

const solve = (input) => {
  const startNum = Number(input[0].split(' ')[0]);
  const endNum = Number(input[0].split(' ')[1]);
  for (let i = startNum; i <= endNum; i += 1) {
    const numArr = i.toString().split('');
    const squareArr = numArr.map(number => number ** numArr.length);
    const total = squareArr.reduce(
      (acc, cur) => acc + cur,
      0,
    );
    if (total === i) {
      console.log(i);
    }
  }
};

rl.on('close', () => {
  solve(lines);
});

/* test */
solve(['5 200']);
/* test */
