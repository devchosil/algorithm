// A+B - 5
// 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 입력: 입력은 여러 개의 테스트 케이스로 이루어져 있다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 입력의 마지막에는 0 두 개가 들어온다.  - while문 사용해서 문제 풀기!!
// 출력: 각 테스트 케이스마다 A+B를 출력한다.

//1 
//처음에 백준에서 틀렸다는 결과가 나왔는데, trim()을 안붙여줘서 틀렸음
//
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
for(i=0;i<input.length-1;i++) {
  let num = input[i].split(' ').map(x=>x*1);
  console.log(num[0]+num[1]);
}

// 2
// let result = '';

// for(i=0;i<input.length-1;i++) {
//   let num = input[i].split(' ').map(x=>x*1);
//   result += String(num[0]+num[1])+'\n';
// }

// console.log(result);

//3 while문 사용
let i = 0;
while(input[i] !== '0 0') {
  console.log(input[i].split(' ')[0]*1+input[i].split(' ')[1]*1);
  i++;
}