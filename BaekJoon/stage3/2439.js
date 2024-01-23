// 별 찍기 - 2
// 문제: 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
// 입력: 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// 출력: 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

//*은 한개씩 늘어나고, 공백은 하나씩 줄어든다.

//1 repeat메소드 사용
//'문자'.repeat(count) 주어진 횟수만큼 문자 반복
const input = require('fs').readFileSync('example.txt').toString()*1;

for(i=1;i<=input;i++) {
  console.log(' '.repeat(input-i)+'*'.repeat(i));
}

//2 배열로 만들고, 다시 문자열로 반환
// Array -> join 사용
let arr = new Array(input).fill(' ');

for(i=input-1;i>=0;i--) {
  arr[i] = '*';   //점점 쌓임..
  console.log(arr.join(''));
}

// //3 for문 사용
let blank = '';
let star = '';

for(i=0; i<input; i++) {    
  star += '*';          // 별의 수가 하나씩 늘어남

  for(j=1; j<input-i; j++) {
    blank += ' ';       //blank수가 하나씩 늘어남, 줄이 바뀌면 전체 blank수는 하나씩 줄어듬
  }
  console.log(blank+star);
  blank='';             //줄바뀌면(i가 하나 늘어나면) blank 리셋
}

//4 blank랑 star를 따로 반복문으로 돌리고, 합치기
let star = '*';
let result = '';

for(i=0;i<input;i++) {
  let blank = ' '.repeat(input-i-1);
  result = blank+star;
  star += '*';
  console.log(result);
}