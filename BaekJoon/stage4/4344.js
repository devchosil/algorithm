// 평균은 넘겠지
// 문제: 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

// 입력: 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 출력: 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

//1
let N = input[0]*1;

for(i=1;i<=N;i++) {
  let scores = input[i].trim().split(' ').map(x=>x*1);  //trim 빼먹으면 공백이 \r로 배열에 들어감
  let sum = 0;
  let avg = 0;
  let numbers = scores[0];
  //scores.length로 작성했더니 sum 결과값이 NaN이 출력됨
  //숫자개수보다 scores.length가 길기 때문!
  for(j=1; j<=numbers; j++) { 
    sum += scores[j];
  }
  avg = sum/scores[0];
  scores.shift();
  let overAvg = scores.filter(x=>x>avg);
  console.log((overAvg.length/numbers*100).toFixed(3)+'%');  //toFixed()메소드는 고정 소수점 표기해줌
}


//2 리듀스 함수!!
let num = input[0] * 1;

for (let i = 1; i <= num; i++) {
    let score = input[i].split(' ');
    let num2 = score.shift() * 1;
    let count = 0;
    
    let avg = score.reduce((acc, v) => acc += v * 1, 0); //리듀스 함수로 점수 누적합 구함
    avg /= num2;  //평균 구함

    for (let j = 0; j < num2; j++) {
        if (score[j] > avg) {     //평균 이상인 점수 개수 구함
            count++;
        }
    }
    
    let result = ((count / num2) * 100).toFixed(3);
    console.log(result + "%");
}