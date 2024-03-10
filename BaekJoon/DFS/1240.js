// 노드사이의 거리
//문제)
//N개의 노드로 이루어진 트리가 주어지고 M개의 두 노드 쌍을 입력받을 때 두 노드 사이의 거리를 출력하라.

// 입력)
// 첫째 줄에 노드의 개수 N과 거리를 알고 싶은 노드 쌍의 개수 M이 입력되고 다음
// N-1개의 줄에 트리 상에 연결된 두 점과 거리를 입력받는다.
// 그 다음 줄에는 거리를 알고 싶은 M개의 노드 쌍이 한 줄에 한 쌍씩 입력된다.

// 출력)
// M개의 줄에 차례대로 입력받은 두 노드 사이의 거리를 출력한다.

// 풀이 과정
// 1. 트리 정보 만들기
// 2. dfs 함수 만들기
// 3. 반복문으로 dfs 반복 수행

let input = "4 2\n2 1 2\n4 3 2\n1 4 3\n1 2\n3 2".split("\n");

// n개의 노드, m개의 두 노드쌍
let [n, m] = input[0].split(" ").map(Number);
// 트리 정보 넣을 배열
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  // 트리의 연결선은 노드-1
  let [x, y, n] = input[i].split(" ").map(Number);
  // 노드에 연결된 노드와 두 노드 사이의 거리 넣어줌 [연결노드, 거리]
  graph[x].push([y, n]);
  graph[y].push([x, n]);
}

// console.log("graph", graph);

// 방문 처리, 거리 더해주기
function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  //   console.log("------------------------");
  console.log("x", x);
  for (let [y, cost] of graph[x]) {
    // .... ????
    console.log("y", y);
    // console.log("cost", cost);
    dfs(y, dist + cost);
  }
}

// dfs 수행 반복
for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i].split(" ").map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0);
  //   console.log(distance[y]);
}
