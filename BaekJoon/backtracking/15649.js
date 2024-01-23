// N과 M (1)
// 문제 )
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

let input = "3 2".split(" ").map(Number);
let [N, M] = input;

let arr = []; // 순열을 게산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= N; i++) arr.push(i);
let visited = new Array(N).fill(false);
let selected = []; // 현재 순열에 포함된 원소(element)의 인덱스

let answer = "";

console.log("visited", visited);
function dfs(arr, depth) {
  if (depth === M) {
    // 모든 순열을 확인하는 부분
    let result = []; // 순열 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 순열을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    // 하나씩 원소 인덱스를 확인하며
    if (visited[i]) continue; // 이밈 처리된 원소라면 무시(중복허용X)
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1); // 재귀함수 호출
    selected.pop(); // 현재 원소 선택 취소
    visited[i] = false; // 현재 원소 방문 처리 취소
  }
}

dfs(arr, 0);
console.log(answer);

// function recursive() {
//     if()
// }
