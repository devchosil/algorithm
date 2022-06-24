//주사기 세개
//문제
// 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
// 예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.
// 3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

// 입력: 첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다. 
// 출력: 첫째 줄에 게임의 상금을 출력 한다.

//1 - 작동은 한데 코드 파악이 어려움
const input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
let result = 0;

if(input[0]===input[1] && input[1]===input[2]) {
  result = 10000+input[0]*1000;
} else if(input[0]===input[1] || input[1]===input[2] || input[2]===input[0]) {
  if(input[0]===input[1] || input[0] === input[2]) {
    result = 1000+input[0]*100;
  } else if(input[1]===input[2]) {
    result = 1000+input[1]*100;
  }
} else if(input[0]!==input[1] && input[1]!==input[2]) {
  result = Math.max(input[0],input[1],input[2]);
  result = result*100;
}
console.log(result);

//2 변수주기
// const input = require('fs').readFileSync("./dev/stdin").toString().trim().split(' ');
// let result = 0;

// let A = input[0]*1;
// let B = input[1]*1;
// let C = input[2]*1;

////3개 모두 같은 경우 
// if(A===B && B===C) {       
//   result = 10000 + A*1000;
////3개 모든 같은 경우 제외하고
// } else if(A===B || B===C || A===C) {
//   if(A===B || A===C) {
//     result = 1000 + A*100;
//   } else if(B===C) {
//     result = 1000 + B*100;
//   }
////3개 다 다른경우
// } else if(A!==B && B!==C && A!==C) {
//   result = Math.max(A,B,C);
//   result = result*100;
// }
// console.log(result);