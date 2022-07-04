// 나머지
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
// 입력: 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.
// 출력: 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

//1.Set사용, 2.indexOf사용, 3.includes사용(true or false 출력)
//indexOf(찾을 요소, 검색이 시작되는 인덱스-생략가능) 배열내 최초의 인덱스 반환, 찾는 요소가 없으면 -1반환

//1 Set사용
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(x=>x*1);
let arr = [];
for(i=0; i<input.length; i++) {
  arr.push(input[i]%42);
}
//서로 다른 숫자가 몇개 있는지 출력 -> 중복되는 수 없애기 -> 배열을 set으로 변환
let newSet = new Set(arr);
//Set을 배열로 변환
let newArr = [...newSet];

console.log(newArr.length);

//2
const userNum = [];

input.forEach(x => {
     const num = x % 42;
    
    if (userNum.indexOf(num) === -1) {
        userNum.push(num);
    }
});

console.log(userNum.length);

//3
let numbers = [];

for(let i=0; i<input.length; i++) {
    if(numbers.indexOf(input[i]%42)===-1) {
        numbers.push(input[i]%42);
    }
}
console.log(numbers.length);

//4
let arr = [];

for(i=0;i<input.length;i++) {
  let leftNum = input[i] % 42;

  if(!arr.includes(leftNum)) {
    arr.push(leftNum);
  }
}
console.log(arr.length)
