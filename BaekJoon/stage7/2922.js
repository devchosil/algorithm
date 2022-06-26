//벌집
// 위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.

// 입력: 첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.
// 출력: 입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력한다.

//1
const input = require('fs').readFileSync('example.txt').toString()*1;
let num = 1;     //첫번째 숫자 
let range = 1;   //범위

//범위1: 1,범위2: 2~7, 범위3: 8~19 ...

function solution (N) {
  while(num<N) {    //입력값보다 range이 작을때
    num += 6*range;
    range++;
  }

  return console.log(range);
}

solution(input);


//2 틀린 답 - +1되서 나옴..

// const input = Number(require('fs').readFileSync('/dev/stdin'));
// let num = 1; let range = 1;

// function solution (N) {
//   while(true) {
//     num += 6*range;     1, 1+6, 1+6+12,
//     range++;
//     if(num>N) break;    //입력값보다 숫자가 더 커질때 while문이 멈추기때문에 range가 원래답보다 +1됨
//   }
//   return console.log(range);
// }
// solution(input);
