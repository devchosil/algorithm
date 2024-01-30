// 예산 - 상한선
function solution() {
    const input = '4\n120 110 140 150\n485'.toString().split('\n');

    let arr = input[1].split(' ').map(Number);
    let M = Number(input[2]);
    let start = 1;
    let end = arr.reduce((a,b) => Math.max(a,b));

    let result = 0; 
    while(start <= end) {
        let mid = parseInt((start+end)/2);
        let total = 0;

        for(x of arr) {
            total += Math.min(x,mid);
        }

        if(total < M) { // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
            start = mid + 1; 
            result = mid;
        } else { //조건을 만족하지 못한다면, 상한액을 감소시키기
            end = mid-1;
        }
    }

    console.log(result);
}

solution()