// 단어의 개수
// 문제: 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

// 입력: 첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열의 길이는 1,000,000을 넘지 않는다. 단어는 공백 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. 또한 문자열은 공백으로 시작하거나 끝날 수 있다.
// 출력: 첫째 줄에 단어의 개수를 출력한다.

//1. 각 단어를 배열 요소로 보고 split(" ")으로 받아서 배열길이를 구함
let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');

console.log(input[0]===""?0:input.length);


//2. 아무것도 안쓰면 0이 나와야 하는데 1이 나옴
// let count = 0;

// for(i=0; i<input.length; i++) {
//     if(input[i] === ' ') {
//         count++;
//     }
// }

// if(input[0]===' ' && input[input.length]===' ') {
//     count--;
// } else if(input[0]!==' ' && input[input.length]!==' ') {
//     count++;
// }

// console.log(count);