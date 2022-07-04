// 숫자의 개수
// 문제: 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오. 예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
//입력: 첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.
// 출력: 첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다. 마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.

//배열.filter? filter를 쓰면 조건에 해당하는 '요소만' 출력하니까 filter는 X
//배열.includes? 특정요소를 포함하고 있는지 true or false만 출력해서 X
//이중 for문 내부에 조건문 사용하자

//1 
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(x=>x*1);

let result = String(input[0]*input[1]*input[2]).split('');
let arr = [0,1,2,3,4,5,6,7,8,9];
//콘솔창에 0~9에 해당하는 숫자를 출력해야 하니까, 바깥 for문에 arr.length로 두기
for(i=0; i<arr.length; i++) {
  for(j=0; j<result.length; j++) {
    if(arr[i]===result[j]*1) {
      count++;
    } 
  }
  console.log(count);
}


//2
// let result = String(input[0]*input[1]*input[2]).split('');

for(i=0; i<10; i++) {     //굳이 0~9를 배열로 안만들어줘도돼.. i로 비교하면되니끼
  let count=0;
  for(j=0; j<result.length; j++) {
    if(i===result[j]*1) {
      count++;
    } 
  }
  console.log(count);
}