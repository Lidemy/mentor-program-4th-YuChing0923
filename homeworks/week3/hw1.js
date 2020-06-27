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
  for (let i = 1; i <= input[0]; i += 1) {
    console.log('*'.repeat(i));
  }
};

rl.on('close', () => {
  solve(lines);
});

/* test */
solve([5]);
/* test */
