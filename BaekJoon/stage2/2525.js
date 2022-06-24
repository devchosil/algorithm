// 오븐시계
// 입력: 첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.
// 출력: 첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

//1
let hour = input[0].split(' ')[0]*1;
let minute = input[0].split(' ')[1]*1;
let time = input[1]*1;

let plusMin = minute+time;
let result = [0,0];

if(plusMin/60 < 1) { 
  result[0] = hour;
  result[1] = plusMin;
} else {
  if(hour+Math.floor(plusMin/60)>23) {
    result[0] = hour - 24;
    result[1] = plusMin%60;
  } else {
    result[0] = hour+Math.floor(plusMin/60);
    result[1] = plusMin%60;
  }
}

console.log(result[0], result[1]);


//2
// let hour = input[0].split(' ')[0]*1;
// let minute = input[0].split(' ')[1]*1;
// let time = input[1]*1;

// let plusMin = minute+time;

// if(plusMin/60 < 1) { 
//   console.log(`${hour} ${plusMin}`);
// } else {
//   let finalHour = hour+Math.floor(plusMin/60);
//   let finalMin = plusMin%60;

//   finalHour > 23 ? console.log(`${finalHour-24} ${finalMin}`) : console.log(`${finalHour} ${finalMin}`)
// }


//3
// let now = input[0].split(' ').map(x=>x*1);
// let needTime = +input[1];

// function solution(now, needTime) {
//   let time = [now[0], now[1]+needTime];
//   let hour = time[0]; 
//   let minute = time[1];

//   if(minute>=60) {
//     hour += Math.floor(minute/60);
//     hour = hour%24;   //24시부터는 0으로 출력 -> hour%24..
//     minute = minute%60;
//   }

//   console.log(hour, minute);
// }

// solution(now, needTime);