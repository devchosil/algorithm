//A+B
//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

let input = require('fs').readFileSync('example.txt').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a+b);
