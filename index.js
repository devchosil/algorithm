const input = require('fs').readFileSync('example.txt').toString();

let num = input[0]*1;
let fiveBag = Math.floor(num/5);

while(num>0) {
  num -= fiveBag*5;
}

if(num%3 === 0) {
  num += 1;
} else {
  num = -1;
}

console.log(num);