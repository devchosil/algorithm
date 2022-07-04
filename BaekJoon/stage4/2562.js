// 최댓값
// 문제: 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
// 예를 들어, 서로 다른 9개의 자연수 3, 29, 38, 12, 57, 74, 40, 85, 61이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
// 입력: 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.
// 출력: 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

//Math.min, Math.max는 배열넣으면 동작X
//배열에서 최대값, 최소값 구할때 1) apply메서드 사용 or 2)반복문, 조건문
//배열에서 최대값, 최소값 인덱스 1)findIndex 사용 2)반복문, 조건문

//1
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(x=>x*1);
//최대값 구하기
let maxNum = Math.max(...input);
//배열.finexIndex 메소드 사용: findIndex는 주어진 함수를 만족하는 배열의 첫번째 요소에 대한 인덱스 반환, 없으면 -1반환
//findIndex(배열요소 => 배열요소>=최대값) : 배열요소=>최대값의 값은 최대값임
let index = input.findIndex(element => element>=maxNum);

console.log(`${maxNum}\n${index+1}`);

//2
// let maxNum = Math.max.apply(null,input); //null꼭 써줘야함
// let index = input.findIndex(x => x>=maxNum);

console.log(`${maxNum}\n${index+1}`);

//3
//배열의 첫번째값, 첫번째인덱스(0) 변수로 주기
//let maxNum = input[0];
let maxIndex = 0;

for(i=0;i<input.length;i++) {  //배열 총길이만큼 반복
  if(input[i] > maxNum) {
    maxNum=input[i];
    maxIndex = i;
  }
}

console.log(maxNum);
console.log(maxIndex+1);

