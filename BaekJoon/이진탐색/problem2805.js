// 나무자르기
function solution() {
    const input = '4 7\n20 15 10 17'.toString().split('\n');
    
    let arr = input[1].split(' ').map(Number);
    let M = Number(input[0].split(' ')[1]);
    let start = 0;
    let end = arr.reduce((a,b)=>Math.max(a,b));

    let result = 0;
    while(start<=end) {
        let mid = parseInt((start+end)/2);
        let sum = 0;

        for(x of arr) {
            if(x>mid) {
                sum += x-mid;
            }
        }

        // if(sum <= M) {
        //     result = mid;
        //     start = mid + 1;
        // } else {
        //     end = mid-1;
        // }
        if(sum < M) {
            end = mid -1; //나무의 양이 부족할 경우 더 많이 자르기(높이 줄이기)
        } else {
            result = mid; //최대한 덜 잘랏을때가 정답이므로 result에 기록
            start = mid + 1;
        }
    }
    console.log(result);
}

solution()