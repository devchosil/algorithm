// 빠른 A+B
// 입력
// 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.
// 출력
// 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

/* for문으로 배열요소를 돌려주고, 배열요소를 split로 나누어준 후에 
  문자열에 결과값을 넣어준다.
  빠른 A+B에서는 for문 안에서 console.log()를 사용해서 하나하나 출력해주면 시간초과가 됨
*/
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let answer = ''

for(let i = 1; i <= input[0]; i++) {
    tmp = input[i].split(' ')
    answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n"
}

console.log(answer);