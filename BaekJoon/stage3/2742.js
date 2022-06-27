// 기찍 N
// 문제: 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 입력: 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
// 출력: 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

//for문 안에 console.log를 넣으면 시간 초과됨!!
const input = require('fs').readFileSync('example.txt').toString()*1;
let result = '';

for(i=input;i>=1;i--) {
  result += i + '\n'
}
console.log(result);