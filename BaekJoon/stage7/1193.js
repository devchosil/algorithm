//분수찾기
// 문제: 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
// 1/1	1/2	1/3	1/4	1/5	…
// 2/1	2/2	2/3	2/4	…	…
// 3/1	3/2	3/3	…	…	…
// 4/1	4/2	…	…	…	…
// 5/1	…	…	…	…	…
// …	…	…	…	…	…
// 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
// X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

// 입력: 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
// 출력: 첫째 줄에 분수를 출력한다.

//1
const input = require('fs').readFileSync('example.txt').toString()*1;

function solution() {
  let range = 1;
  let sum = 1;

  while(sum<input) {
    range++;   //순서주의 - range++랑 sum+=range;순서바꾸면 답X
    sum+=range;
  }
  //input-(range-1까지 전체 숫자의 합. range주의)
  let order = input-range*(range-1)/2;

  if(range%2===1) {
    console.log(`${range-order+1}/${order}`);
  } else if(range%2===0) {
    console.log(`${order}/${range-order+1}`);
  }
}  

solution();


//2
// let range = 1;
// let num = 1;

// while (num < input) {
//   range++;
//   num = (range * (range + 1)) / 2;
// }

// let result = "";
// let order = input - (range * (range - 1)) / 2;

// if (range % 2 === 0) {
//   result = order + "/" + (range - order + 1);
// } else {
//   result = range - order + 1 + "/" + order;
// }
// console.log(result);