//짝수 - 뒷부분 자름
//홀수 - 앞부분 자름
function solution(arr, query) {
    var answer = [];

    for(let i=0;i<query.length;i++) {
        if(i%2==0) {
            if(i==0) {
                answer = [...arr.slice(0,query[i]+1)];
            } else if(i>0) {
                answer = [...answer.slice(0,query[i]+1)]
            }
            // answer = arr.slice(0,query[i]+1) //slice는 시작부터 끝까지(끝 미포함!!) 복사
        } 
        else {
            answer = [...answer.slice(query[i],answer.length)]; 
        }
    }

    return answer;
}


function solution(arr, query) {
    return query.reduce((acc, val, idx) => {
        if(idx % 2){ // 홀수 인덱스 → 앞 부분 자르기
            return acc.slice(val); // query[i]번 인덱스 제외
        } else{ // 짝수 인덱스 → 뒷 부분 자르기
            return acc.slice(0, val+1); // query[i]번 인덱스 제외
        }
    }, arr);
}

function solution(arr, query) {
    let answer = [...arr];
    query.forEach((v,i) => {
        i % 2 === 0 ? answer.splice(query[i]+1, answer.length) : answer.splice(0, query[i]);
    })
    return answer;
}