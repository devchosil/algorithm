// 한수
// 문제
// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

// 입력: 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.
// 출력: 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

//1
let N = require('fs').readFileSync('example.txt').toString().trim()*1;

function solution(n) {
    let count = 0;
    for(i=1;i<=n;i++) {
        let hundreds = Math.floor(i/100);
        let tens = Math.floor(i/10)%10;
        let ones = i%10;

        if(i<100) {   //n이 한자리수 or 두자리수일 때
            count++;
        } else if(i>=100 && i<1000) {   //세자리수
            if(hundreds-tens === tens-ones) {
                count++;
            }
        }
    }
    console.log(count);
}

solution(N);


//2 다른풀이
const n = +input;

const arr = new Array(n + 1).fill(true);

for (let i = 0; i < n + 1; i++) {
  const numList = String(i).split('');
  if (numList.length < 3) {
    continue;
  } else {
    const d = numList[1] - numList[0];
    for (let j = 1; j < numList.length - 1; j++) {
      if (d !== numList[j + 1] - numList[j]) {
        arr[i] = false;
        break;
      }
    }
  }
}
console.log(arr.filter((is) => is).length - 1);