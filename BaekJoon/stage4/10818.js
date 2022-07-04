//최소, 최대
// 문제: N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
// 입력: 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
// 출력: 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

//1 답은 나오는데 백준에서 메모리 초과
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let N = input[0]*1;
let arr = [];

for(i=0;i<N;i++) {
  let numbers = input[1].split(' ');
  arr.push(numbers[i]*1);
}

console.log(Math.min(...arr), Math.max(...arr));   //Math.min, Math.max는 배열넣으면 동작X

//2
//input[1]자체가 배열이기 때문에 또 한번 더 배열을 만들어서 넣어줄 필요가 X -> map 이용
let numbers = input[1].split(' ').map(x=>x*1);
console.log(Math.min(...numbers),Math.max(...numbers)); 