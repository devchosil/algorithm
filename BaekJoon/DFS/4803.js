// 트리
// 문제)
// 그래프는 정점과 간선으로 이루어져 있다. 두 정점 사이에 경로가 있다면, 두 정점은 연결되어 있다고 한다. 연결 요소는 모든 정점이 서로 연결되어 있는 정점의 부분집합이다. 그래프는 하나 또는 그 이상의 연결 요소로 이루어져 있다.
// 트리는 사이클이 없는 연결 요소이다. 트리에는 여러 성질이 있다. 예를 들어, 트리는 정점이 n개, 간선이 n-1개 있다. 또, 임의의 두 정점에 대해서 경로가 유일하다.
// 그래프가 주어졌을 때, 트리의 개수를 세는 프로그램을 작성하시오.

// 입력)
// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스의 첫째 줄에는 n ≤ 500과 m ≤ n(n-1)/2을 만족하는 정점의 개수 n과 간선의 개수 m이 주어진다. 다음 m개의 줄에는 간선을 나타내는 두 개의 정수가 주어진다. 같은 간선은 여러 번 주어지지 않는다. 정점은 1번부터 n번까지 번호가 매겨져 있다. 입력의 마지막 줄에는 0이 두 개 주어진다.

// 출력)
// 입력으로 주어진 그래프에 트리가 없다면 "No trees."를, 한 개라면 "There is one tree."를, T개(T > 1)라면 "A forest of T trees."를 테스트 케이스 번호와 함께 출력한다.

// 포인트
// 1. 트리란 사이클이 없는 연결 요소 -> 트리의 정의에 따라 dfs를 이용해 트리의 개수 계산
// dfs 수행과정에서 인접 노드가 이미 방문한 노드라면 사이클임

// let input =
//   "6 3\n1 2\n2 3\n3 4\n6 5\n1 2\n2 3\n3 4\n4 5\n5 6\n6 6\n1 2\n2 3\n1 3\n4 5\n5 6\n6 4\n0 0\n".split(
//     "\n"
//   );

let input =
  "6 3\n1 2\n2 3\n3 4\n0 0\n".split(
    "\n"
  );

// 정점 n, 간선 m, m개의 줄에 간선 나타내는 두 정수

// 사이클 판별 재귀함수
function isCycle(x, prev) {
  // 현재 노드 방문 처리
  visited[x] = true;
  // 다음 노드(인접 노드)를 하나씩 확인하며
  for (let y of graph[x]) {
  if (!visited[y]) { // 다음 노드를 아직 방문하지 않았다면
  // 다음 노드 기준으로 사이클이라면
  if (isCycle(y, x)) return true; // 사이클 발생
  }
  // 방문한 적 있는 노드인데, 직전 노드가 아니라면(무방향 그래프)
  else if (y != prev) return true;
  }
  return false;
}

let line = 0;
let testCase = 1;
while (true) {
  let [n, m] = input[line].split(' ').map(Number); 
  if (n == 0 && m == 0) break; // 노드의 개수(N)와 간선의 개수(M)
  graph = []; // 트리 정보 입력받기
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  visited = new Array(n + 1).fill(false); // 방문 처리 배열
  let cnt = 0; // 그래프 내 트리의 개수
  for (let i = 1; i <= n; i++) { // 하나씩 노드를 확인하며
    console.log("visited[i]",i,visited[i]);
    if (!visited[i]) { // 연결 요소이면서
      console.log(i, isCycle(i, 0));
      if (!isCycle(i, 0)) cnt++;// 사이클이 아니라면 트리이므로, 카운트하기
    }
  }

  // if (cnt == 0) console.log(`Case ${testCase}: No trees.`);
  // else if (cnt == 1) console.log(`Case ${testCase}: There is one tree.`);
  // else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
  
  line += m + 1; // 다음 테스트 케이스로 이동
  testCase++;
}