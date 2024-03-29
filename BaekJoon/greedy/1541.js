// 잃어버린 괄호

// 문제)
// 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
// 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
// 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

// 입력)
// 첫째 줄에 식이 주어진다. 식은 ‘0’~‘9’, ‘+’, 그리고 ‘-’만으로 이루어져 있고, 가장 처음과 마지막 문자는 숫자이다. 그리고 연속해서 두 개 이상의 연산자가 나타나지 않고, 5자리보다 많이 연속되는 숫자는 없다. 수는 0으로 시작할 수 있다. 입력으로 주어지는 식의 길이는 50보다 작거나 같다.

let input = "55-50+40";

// -가 있을 때, - 바로 앞에서 괄호, 뒤에 -가 있으면 괄호 닫기 업으면 끝까지
// let arr = input.split("-").map((val) => val.split("+"));
// let sumArr = Array(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     let nunmber = Number(arr[i][j]);
//     sum += nunmber;
//   }
//   sumArr[i] = sum;
// }

// let answer = 0;
// sumArr.forEach((num, index) => {
//   if (index === 0) {
//     answer += num;
//   } else {
//     answer -= num;
//   }
// });

// console.log(answer);

// 답안 예시)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 뺄셈(-) 연산자를 기준으로 나누어 여러 그룹 만들기
let groups = input[0].split("-");
let answer = 0;
for (let i = 0; i < groups.length; i++) {
  // 각 그룹 내부에서 덧셈(+) 연산 적용
  let cur = groups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) answer += cur; // 첫 번째 그룹은 항상 덧셈(+)
  else answer -= cur; // 두 번째 그룹부터 뺄셈(-)
}
console.log(answer);
