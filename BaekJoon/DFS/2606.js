// 바이러스 -  ⭐ 네트워크 유형 ⭐
// 문제 )신종 바이러스인 웜 바이러스는 네트워크를 통해 전파된다.
// 한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다.
// 예를 들어 7대의 컴퓨터가 <그림 1>과 같이 네트워크 상에서 연결되어 있다고 하자.
// 1번 컴퓨터가 웜 바이러스에 걸리면 웜 바이러스는 2번과 5번 컴퓨터를 거쳐 3번과 6번 컴퓨터까지 전파되어 2, 3, 5, 6 네 대의 컴퓨터는 웜 바이러스에 걸리게 된다.
// 하지만 4번과 7번 컴퓨터는 1번 컴퓨터와 네트워크상에서 연결되어 있지 않기 때문에 영향을 받지 않는다.
// 어느 날 1번 컴퓨터가 웜 바이러스에 걸렸다. 컴퓨터의 수와 네트워크 상에서 서로 연결되어 있는 정보가 주어질 때,
// 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 출력하는 프로그램을 작성하시오.

// 내풀이
// let input = '7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7';

// let graphArr = [];
// let graph = input.split('\n').map(val=>val.split(' ').map(Number));
// let answer;

// for(let i=2; i<graph.length; i++) {
//     graphArr.push(graph[i]);
// }

// const visited = Array(parseInt(graph[0])+1).fill(false);

// function dfs(inputArr, v, visited) {
//     visited[v] = true;,
//     for(value of inputArr) {,
//         if(value.includes(v)) {
//             let anotherVal = value.filter(val => val !== v)[0];
//             if(!visited[anotherVal]) { // 이부분을 바로 못떠올려서 계속 고민했음
//                 dfs(inputArr, anotherVal, visited);
//             }
//             // console.log("value",value);

//             // console.log("value",value);
//             // let anotherVal = value.filter(val => val !== v)[0];
//             // console.log("value",value);
//             // dfs(inputArr, parseInt(anotherVal), visited);
//             // console.log("anotherVal",anotherVal);
//         }
//     }
// }

// dfs(graphArr, 1, visited);

// console.log(visited.filter(val=>val===true).length-1);

// 강의 풀이 - dfs 기본 풀이 형식에 맞춰서 array 만들어서 풀이
let input = '7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7'.split('\n');
let n = Number(input[0]); // 정점의 개수(N)
let m = Number(input[1]); // 간선의 개수(M)

let graph = []; // 그래프 정보 입력
for (let i = 1; i <= n; i++) graph[i] = [];

for (let i = 2; i <= m + 1; i++) {
let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

let cnt = 0;
let visited = new Array(n + 1).fill(false);
function dfs(x) { // 깊이 우선 탐색(DFS) 수행
    visited[x] = true; // 현재 노드를 방문 처리
    cnt++;
    for (y of graph[x]) { // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
        if (!visited[y]) dfs(y);
    }
}
dfs(1);

// 한번 더 풀이
// let input = "7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7".split("\n");

// let N = Number(input[0]); //정점의 개수
// let M = Number(input[1]); //간선의 개수

// let graph = []; // 그래프 정보 입력
// for (let i = 1; i <= N; i++) graph[i] = [];
// for (let i = 2; i <= M+1; i++) {
//     let [x, y] = input[i].split(" ").map(Number);
//     graph[x].push(y);
//     graph[y].push(x);
// }

// console.log("전체 그래프",graph);
// let visited = Array(N + 1).fill(false);
// let count = 0;
// function dfs(x) {
//     visited[x] = true; // 현재 노드 방문 처리
//     count++;
//     console.log(visited);
//     for (y of graph[x]) {  // 현재 노드와 연결된 다른 노드 재귀적 방문
//         if (!visited[y]) dfs(y);
//     }
// }

// dfs(1);

// // console.log(count - 1);
