/* eslint linebreak-style: ["error", "windows"] */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

const reverse = string => (string.split('').reverse().join(''));

const solve = (input) => {
  const string = input[0];
  const reverseString = reverse(string);
  const result = (string === reverseString) ? 'True' : 'False';
  console.log(result);
};

rl.on('close', () => {
  solve(lines);
});

/* test */
solve(['abbbba']);
solve(['ac']);
/* test */
