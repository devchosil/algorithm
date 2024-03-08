// 유기농 배추 - ⭐ 네트워크 유형 ⭐
// 차세대 영농인 한나는 강원도 고랭지에서 유기농 배추를 재배하기로 하였다. 농약을 쓰지 않고 배추를 재배하려면 배추를 해충으로부터 보호하는 것이 중요하기 때문에, 한나는 해충 방지에 효과적인 배추흰지렁이를 구입하기로 결심한다. 이 지렁이는 배추근처에 서식하며 해충을 잡아 먹음으로써 배추를 보호한다. 특히, 어떤 배추에 배추흰지렁이가 한 마리라도 살고 있으면 이 지렁이는 인접한 다른 배추로 이동할 수 있어, 그 배추들 역시 해충으로부터 보호받을 수 있다. 한 배추의 상하좌우 네 방향에 다른 배추가 위치한 경우에 서로 인접해있는 것이다.

// 한나가 배추를 재배하는 땅은 고르지 못해서 배추를 군데군데 심어 놓았다. 배추들이 모여있는 곳에는 배추흰지렁이가 한 마리만 있으면 되므로 서로 인접해있는 배추들이 몇 군데에 퍼져있는지 조사하면 총 몇 마리의 지렁이가 필요한지 알 수 있다. 예를 들어 배추밭이 아래와 같이 구성되어 있으면 최소 5마리의 배추흰지렁이가 필요하다. 0은 배추가 심어져 있지 않은 땅이고, 1은 배추가 심어져 있는 땅을 나타낸다.

// 이 문제는 연결 요소(connected component)의 개수를 계산하는 문제
// 각 위치에서 [상,하,좌,우]의 위치로 간선이 연결되어 있는 그래프로 이해할 수 있음

// 연결 요소는 일종의 '묶음'으로 이해해보자
// 왼쪽 위부터 오른쪽 아래까지 확인하며, 처리되지 않은 원소에 대하여 DFS를 호출한다.

// let input =
//   `1\n4 3 5\n0 0\n1 0\n3 1\n2 2\n3 2`.split(
//     "\n"
//   );

let input = '2\n10 8 17\n0 0\n1 0\n1 1\n4 2\n4 3\n4 5\n2 4\n3 4\n7 4\n8 4\n9 4\n7 5\n8 5\n9 5\n7 6\n8 6\n9 6\n10 10 1\n5 5'.split('\n');

// 1. DFS 메소드 정의하기
// 2. 그래프 생성, 반복하기

// 그래프 만들 때, 배추가 심겨있는 위치는 1로 표시
// 가로축은 y로 세로축은 x로 표시 (배열로 만드니까)

function dfs(graph, n, m, x, y) {
  // 주어진 범위를 벗어나면 종료
  if(x<0 || y<0 || x>=n || y>=m) return false;

  if(graph[x][y]===1) { // 배추가 심겨져 있다면
    graph[x][y] = -1 // -1로 방문표기!!

    // 인접 위치도 들른 후(상하좌우), true 반환해주기
    dfs(graph, n, m, x-1, y);
    dfs(graph, n, m, x+1, y);
    dfs(graph, n, m, x, y-1);
    dfs(graph, n, m, x, y+1);
    return true;
  }

  // 주어진 범위 안이면서 && 배추가 안심겨져 있을 때 false 반환
  return false;
}

let testCases = Number(input[0]);
// input[0]은 테스트케이스 수, input[1]은 첫번째 케이스 n,m,k
// input[2]부터는 첫번째 케이스의 위치
let line = 1; // index 표기
while(testCases--) {
  let answer = 0;

  let [m,n,k] = input[line].split(' ').map(Number);
  let graph = [];

  for(let i=0;i<n;i++) {
    let horizon = Array(m);
    graph.push(horizon);
  }

  for(let i=line+1;i<=line+k;i++) {
    const [x,y] = input[i].split(' ').map(Number);
    graph[y][x] = 1;
  }

  for(let i=0;i<n;i++) {
    for(let j=0;j<m;j++) {
      if(dfs(graph,n,m,i,j)) answer++;
    }
  }
  line += k+1;
  console.log(answer);
}


// 강의 풀이
// function dfs(graph, n, m, x, y) { // 깊이 우선 탐색(DFS) 수행
//   // 주어진 범위를 벗어나는 경우에는 즉시 종료
//   if (x <= -1 || x >= n || y <= -1 || y >= m)
//   return false;
//   // 현재 노드를 아직 처리하지 않았다면
//   if (graph[x][y] == 1) {
//     // 해당 노드 방문 처리
//     graph[x][y] = -1;
//     // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
//     // 이 부분에서 아직 방문안한 위치에 방문해서 -1 처리해줌
//     // 아래 반복문에서 해당 위치에 도달했을 때 이미 -1이라서 false를 return하게 됨
//     dfs(graph, n, m, x - 1, y);
//     dfs(graph, n, m, x, y - 1);
//     dfs(graph, n, m, x + 1, y);
//     dfs(graph, n, m, x, y + 1);
//     return true;
//   }
//   return false;
// }

// let testCases = Number(input[0]); // 테스트 케이스의 수
// let line = 1;
// while (testCases--) {
//   // 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 위치의 개수(K)
//   let [m, n, k] = input[line].split(' ').map(Number);

//   // 그래프 정보
//   let graph = []; 
//   for (let i = 0; i < n; i++) {
//     graph[i] = new Array(m);
//   }
//   for (let i = 1; i <= k; i++) {
//     let [y, x] = input[line + i].split(' ').map(Number);
//     graph[x][y] = 1;
//   }

//   let answer = 0; // 연결 요소(connected component)의 수 계산
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       // console.log("i",i,"j",j,dfs(graph, n, m, i, j))
//       if (dfs(graph, n, m, i, j)) answer++; // 현재 위치에서 DFS 수행
//     }
//   }
//   line += k + 1; // 다음 테스트 케이스로 이동
// }
