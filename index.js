const input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
let result = 0;

let A = input[0]*1;
let B = input[1]*1;
let C = input[2]*1;

if(A===B && B===C) {
  result = 10000 + A*1000;
} else if(A===B || B===C || A===C) {
  if(A===B || A===C) {
    result = 1000 + A*100;
  } else if(B===C) {
    result = 1000 + B*100;
  }
} else if(A!==B && B!==C) {
  result = Math.max(A,B,C);
  result = result*100;
}
console.log(result);