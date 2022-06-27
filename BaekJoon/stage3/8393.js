//합
// 문제: n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// 입력: 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
// 출력: 1부터 n까지 합을 출력한다.

//1 조건문 사용
const input = require('fs').readFileSync('example.txt').toString()*1;
let result = 0;

for(i=1;i<=input;i++) {
  result += i;
}

console.log(result);

//2 수학 식 사용
// let n = parseInt(input);

// console.log((n*(n+1))/2);
