// 알파벳 찾기
// 문제: 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

// 입력: 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.
// 출력: 각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.
// 만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. 단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.

//아스키코드 소문자 a~z까지 알파벳 숫자 -> 97~122

//1 처음 풀이
const input = require("fs").readFileSync("/dev/stdin").toString().split('');
//a~z까지 배열을 직접 만들기
let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let result = [];

for(let i=0; i<arr.length; i++) {
  result.push(input.indexOf(arr[i]));  //배열.indexOf: 배열내 요소의 최초 인덱스 반환, 없으면 -1 반환
}
console.log(result.join(' '));

//2 다른풀이
let list = [];
for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {  //charCodeAt은 주어진 인덱스에 해당하는 정수 반환
  list.push(input.indexOf(String.fromCharCode(i)));  //String.fromCharCode(num) -> num에 해당하는 문자 반환
}

console.log(list.join(' '));

//밑에 처럼 풀이하면 중복되는 문자도 풀이에 포함돼서 올바른 답 안나옴 (더 뒤에있는 값 index 출력)
// let input = require('fs').readFileSync('example.txt').toString().trim();

// let result = [];
// for (let i = 97; i <= 122; i++) {
//   result.push(-1);
//   for (let j = 0; j < input.length; j++) {
//     if (i === input.charCodeAt(j)) {
//       result.splice(-1,1);           //배열에서 마지막 요소 제거 배열.splice(-1,1)
//       result.push(j);
//     }
//   }
// }

// console.log(result.join(' '));

