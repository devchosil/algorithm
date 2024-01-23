// A+B - 4
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력: 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 출력: 각 테스트 케이스마다 A+B를 출력한다.

//테스크케이스의 끝을 알리는 값이 존재하지 않을때 EOF에러 처리에 관한 문제임
//EOF는 End Of File로 더이상 읽을 수 있는 데이터가 없음을 나타냄
// -> 어떻게 체크 하냐면 1.데이터.length 사용  2. 예외처리문 사용

//1. 데이터.length 사용
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let i = 0;
while(i<input.length) {
  console.log(input[i].split(' ')[0]*1+input[i].split(' ')[1]*1);
  i++;
}

//2. 예외처리문 사용
let i = 0;
while(true) {
    try{
        let numbers = input[i].split(' ');
        console.log(Number(numbers[0]) + Number(numbers[1]))
        i++;    
    } catch {
        break;    
    }
}