let input = require('fs').readFileSync('example.txt').toString().trim()*1;

let num = input;
let count = 0;
let sum = 0;

while(true) {
  count++;
  sum = Math.floor(num/10) + num%10;
  num = (num%10)*10+sum%10;

  if(input === num) break;
}

console.log(count);