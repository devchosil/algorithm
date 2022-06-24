//곱셈
//(세 자리 수) × (세 자리 수)

let input = require('fs').readFileSync('example.txt').toString().split('\n');
let num1 = input[0]*1;
let num2 = input[1]*1;

let first = num1*(num2%10);
let second = num1*(Math.floor(num2/10)%10);
let third = num1*(Math.floor(num2/100));

console.log(first);
console.log(second);
console.log(third);
console.log(num1*num2);