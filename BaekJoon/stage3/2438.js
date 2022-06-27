// 별 찍기 - 1
// 문제: 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 입력: 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// 출력: 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

//1
const input = require('fs').readFileSync('example.txt').toString()*1;
let result = '';

for(i=0;i<input;i++) {
  result += '*';      
  console.log(result);
}
//*뒤에 \n추가 후, 한번에 결과를 출력하는 방법을 고민했는데, 그러면 별 하나마다 줄바꿈이 발생
