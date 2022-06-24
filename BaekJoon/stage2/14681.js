//사분면 고르기
//입력: 첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다.
//출력: 점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let x =input[0]*1;
let y =input[1]*1;

// if(x>0 && y>0) {
//   console.log(1);
// } else if(x<0 && y>0) {
//   console.log(2);
// } else if(x<0 && y<0) {
//   console.log(3);
// } else {
//   console.log(4);
// }

if(x > 0) y > 0 ? console.log(1) : console.log(4)
if(x < 0) y > 0 ? console.log(2) : console.log(3)
