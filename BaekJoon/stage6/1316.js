// 그룹 단어 체커
// 문제
// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

// 입력: 첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.
// 출력: 첫째 줄에 그룹 단어의 개수를 출력한다.

//1
let arr = [];

for(let i=1; i<input.length; i++) {
  arr.push(input[i]);
}

let answer = arr.length;
let temp = '';

arr.forEach((item) => {
  temp = item[0];
  for(let i=1; i<item.length; i++) {
    if(temp.includes(item[i]) && item[i-1] !== item[i]) {
      answer--;
      break;
    }
    temp += item[i];
  }
});

console.log(answer);


//2 이건 왜 안되지..? 위 풀이랑 똑같은거 같은데
/* temp = word[0]의 위치가 문제였음. let temp = 0;으로 선언한 후,
  단어 문자열 반복문 돌릴때, temp = word[0]으로 했는데
  처음부터 전체 배열 반복 돌릴때, let temp = word[0];으로 선언하니 맞음
*/
const N = input[0]*1;
let result = N;

for(i=1;i<=N;i++) {   
  let word = input[i];
  let temp = word[0];  
  //let temp = '';  처음풀이 

  for(j=1;j<word.length;j++) {
    //temp = word[0];   처음풀이
    if(temp.includes(word[j]) && word[j-1] !== word[j]) {
      result--;
      break;
    }
    temp += word[j];
  }
}

console.log(result);