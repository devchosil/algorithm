//알람시계
// 입력: 첫째줄에 두 정수 H와 M을 입력
// 출력: 45분 일찍 알람 설정하기

let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
let H =input[0]*1; let M =input[1]*1;

// if(M>=0 && M<45) {
//   if(H==0) {
//     H=23;
//     M=M+15;
//   } else {
//     H=H-1;
//     M=M+15;
//   }
// } else {
//   M=M-45
// }

// console.log(`${H} ${M}`);

if(M>=0 && M<45) H==0 ? console.log(`23 ${M+15}`) : console.log(`${H-1} ${M+15}`)
if(M>=45 && M<60) console.log(`${H} ${M-45}`)