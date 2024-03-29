//더하기 사이클 - 어 려 워 !
// 문제: 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다.
//먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 다음 예를 보자.
// 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.
// 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.
// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.

// 입력: 첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.
// 출력: 첫째 줄에 N의 사이클 길이를 출력한다.

/* 일의자리+십의자리 더한 후, 원래 수의 일의자리*10 + 새로운 수의 일의자리를 더함
  이 과정을 반복하면서 count++ 해주고,
  원래수와 새로운수가 같아지면 반복문 break
*/
//1
let input = require('fs').readFileSync('example.txt').toString().trim()*1;

//초기 숫자 num 변수에 input을 넣고 시작!!
let num = input; 
let count = 0;
let sum = 0;

while(true) {
  count++;
  sum = Math.floor(num/10) + num%10;
  num = (num%10)*10+sum%10;

  if(input === num) break;
}

console.log(count);

// //2 틀림
// let tens = Math.floor(input/10);
// let ones = input%10;
// let count = 0;
// let newNum = 0;

// while(input !== newNum) {
//   newNum = ones*10 + (tens+ones)%10;
//   count++;
//   if(input === newNum) break;
//   ones = newNum%10;
//   tens = Math.floor(newNum/10)
// }

// console.log(count);
