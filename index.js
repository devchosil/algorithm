const input = require('fs').readFileSync('example.txt').toString()*1;
let num = 1;
let range = 1;

function solution (N) {
  while(num<N) {
    num += 6*range;
    range++;
  }

  return console.log(range);
}

solution(input);