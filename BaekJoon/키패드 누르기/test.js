function solution() {
    const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
    const hand = "right";
    var answer = '';
    
    // 왼오 손가락의 처음 위치 - 손꾸락 위치도 변경해조야지
    let left = [3, 0]
    let right = [3, 2]

    const keypad = [
    [3,1], //,2여기가 * 0 # 라인
    [0,0],[0,1],[0,2],  //1,2,3
    [1,0],[1,1],[1,2],  //4,5,6
    [2,0],[2,1],[2,2],  //7,8,9
 ];

    const clickByLeft = (num) => {
        left[0] = keypad[num][0];
        left[1] = keypad[num][1];
        return "L";
    }
    const clickByRight = (num) => {
        right[0] = keypad[num][0];
        right[1] = keypad[num][1];
        return "R";
    }

    const answerArr = numbers.map((v,i)=>{
        if(v===1||v===4||v===7) return clickByLeft(v)
        else if(v===3||v===6||v===9) return clickByRight(v);
        else {
            const distanceL = Math.abs(left[0]-keypad[v][0]) + Math.abs(left[1]-keypad[v][1]);
            const distanceR = Math.abs(right[0]-keypad[v][0]) + Math.abs(right[1]-keypad[v][1]);

            if(distanceL<distanceR) return clickByLeft(v);
            else if(distanceL>distanceR) return clickByRight(v);
            else{
                if(hand==="left") return clickByLeft(v);
                else return clickByRight(v);
                }
            }
        }
    );

    console.log(answerArr.join(""));

    return answer;
}

solution()