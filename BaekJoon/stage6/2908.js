// 상수
// 문제
//상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
// 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

// 입력: 첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.
// 출력: 첫째 줄에 상수의 대답을 출력한다.

//1. 각자리 수를 구해서 더하기
let input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(x=>x*1);
let arr = [];

for(i=0; i<input.length; i++) {
  let ones = (input[i]%10)*100; 
  let tens = Math.floor((input[i]/10)%10)*10
  let hundreds = Math.floor(input[i]/100);

  arr.push(ones+tens+hundreds);
}

console.log(Math.max(...arr));

//2. 숫자를 문자열로 보고 풀이
let A = '';
let B = '';

for(i=2; i>=0; i--) {
  A += input[0][i];
  B += input[1][i];
}
console.log(Math.max(A, B));
혹은
console.log(A>B?A:B);

//3. 숫자를 문자열로 만들어 각 자리수를 쪼개 배열로 만듬
//reverse메소드로 배열값을 뒤집고, join메소드로 합치기
//Math.max 혹은 삼항연산자
const [A,B] = input.map(x=>[...x].reverse().join(''));
console.log(Math.max(A, B));
console.log(A>B?A:B);
