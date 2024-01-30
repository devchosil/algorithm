function solution() {
    const players = ["mumu", "soe", "poe", "kai", "mine"];
    const callings = ["kai", "kai", "mine", "mine"];
    let answer;

    const playMap = new Map();
    const scoreMap = new Map();

    players.map((v,i)=>{
        playMap.set(v,i);
        scoreMap.set(i,v);
    })

    callings.map((v,i)=>{
        const up = [v, playMap.get(v), playMap.get(v)-1]; //이름, 현재 등수, 새로운 등수
        // 추월당한 사람 이름
        const down = [scoreMap.get(up[2]),up[2],up[1]]; //이름, 현재 등수, 새로운 등수

        playMap.set(v,up[2]);
        playMap.set(down[0],down[2]);

        scoreMap.set(up[2],v);
        scoreMap.set(down[2],down[0]);
    })

    answer = [...scoreMap].map(v=>v[1])

    return answer;
}

console.log(solution());

//다른사람 풀이1
function solution(players, callings) {
    let idx;
    let name1;
    let name2;
    const idxList = {}

    players.forEach((name,index)=>idxList[name]=index)
    for(let call of callings){
        idx = idxList[call]
        name1 = players[idx]
        name2 = players[idx-1]
        idxList[call]-=1
        idxList[name2]+=1
        players[idx] = name2
        players[idx-1] = name1
    }    

    return players;
}

//다른사람 풀이 2
function solution(players, callings) {
    let maps = {};
    for(let i = 0; i < players.length; i++){
        maps[players[i]] = i;
    }
    callings.forEach(v => {
        let num = maps[v];
        let temp = players[num-1];
        players[num-1] = v;
        players[num] = temp;
        maps[v]--;
        maps[players[num]]++;
    })
    return Object.entries(maps).sort((a,b) => a[1] - b[1]).map(v => v[0]);
}