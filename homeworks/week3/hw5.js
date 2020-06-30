/* eslint linebreak-style: ["error", "windows"] */
/* global BigInt */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

const solve = (input) => {
  const numberArr = input.slice(1);
  const resultArr = numberArr.map((number) => {
    const numA = BigInt(number.split(' ')[0]);
    const numB = BigInt(number.split(' ')[1]);
    const state = BigInt(number.split(' ')[2]);
    let result;
    if (numA === numB) {
      result = 'DRAW';
    } else if ((numA * state) > (numB * state)) {
      result = 'A';
    } else {
      result = 'B';
    }
    return result;
  });
  resultArr.forEach((result) => {
    console.log(result);
  });
};

rl.on('close', () => {
  solve(lines);
});

/* test */
solve(['3', '1 2 1', '1 2 -1', '2 2 1']);
/* test */
