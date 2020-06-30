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
  const numberArr = input.slice(1);
  const resultArr = numberArr.map((number) => {
    let result;
    if (Number(number) === 1) {
      result = 'Composite';
    } else if (Number(number) === 2) {
      result = 'Prime';
    } else {
      for (let j = 2; j < Number(number); j += 1) {
        if (number % j === 0) {
          result = 'Composite';
          break;
        } else {
          result = 'Prime';
        }
      }
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
solve(['5', '1', '2', '3', '4', '5']);
/* test */
