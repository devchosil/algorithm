// 모든 순열
// 문제 )
// N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.

let input = 3;

let arr = [];
for(let i=1;i<=3;i++) arr.push(i);
let visited = new Array(input).fill(false);
let selected = [];
let answer = '';
function dfs(arr, depth) {
    if(depth === input) {
        let result = [];
        for(let i of selected) result.push(arr[i]);
        for(let x of result) answer += x + ' ';
        answer += '\n';
    }

    for(let i=0;i<arr.length;i++) {
        if(visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr,depth+1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(arr,0)
console.log(answer);