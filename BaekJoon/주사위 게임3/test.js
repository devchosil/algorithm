// function solution(a, b, c, d) {
//     var answer = 0;
//     let array = [a,b,c,d];
//     let removeDuplicate = [...new Set(array)];

    
    
//     //1.모두 같을때
//     if(removeDuplicate.length===1) {
//         answer = 1111 * removeDuplicate[0];
//     }

//     //2. 2,2이거나 3,1일때
//     if(removeDuplicate.length===2) {
//         //2-1. 둘둘같을때
//         if(array.filter(x=>removeDuplicate[0]).length==2) {
//             answer = (removeDuplicate[0]+removeDuplicate[1])*Math.abs(removeDuplicate[0]-removeDuplicate[1]);
//         } else {
//         //2-2. 셋 같을때  (10 × p + q)2  p가 3개쪽
//             let p;
//             let q;
//             if(array.filter(x=>removeDuplicate[0]).length==3) {

//             }
//         }
//     }

//     //3. 2개만 같을때 1,1,2
//     if(removeDuplicate.length===3) {

//     }  


//     //4. 모두 다를때
//     let tmpNum = array[0];
//     if(removeDuplicate.length===4) {
//         array.forEach(element => {
//             if(tmpNum>element) {
//                 tmpNum = element;
//             } else {
//                 tmpNum;
//             }
//         });
//         answer = tmpNum;
//     }

//     return answer;
// }

function solution(a, b, c, d) {
    var answer = 0;
    let array = [a,b,c,d].sort((a,b)=>a-b);  //오름차순, 정렬하면 맨앞, 맨뒤가 같으면 모두 같고, 다르면 모두같지않음을 알 수 있다
    let removeDup = [...new Set(array)];

    //const sameNum =
    //1. 모두 같을때
    if(array[0]===array[3]) {
        answer = array[0]*1111;
        return answer;
    }
    //2. 세개 같을때
    else if(array[0]===array[2]||array[1]===array[3]) {
        let p;
        let q;
        if(array[0]===array[2]) {
            p=array[0];
            q=array[3];
        } else if(array[1]===array[3]) {
            p=array[3];
            q=array[0];
        }
        // for(let i=0;i<array.length-1;i++) {
        //     for(let j=1;j<array.length;j++) {
        //         if(array[i]===array[j]) {
        //             p = array[i];
        //             q = array.filter(x=>x!==array[i])[0];
        //         }
        //     }
        // }
        answer = Math.pow(10*p+q,2);
        return answer;
    }
    //3. 둘둘 같을때
    else if(array[0]===array[1]&&array[2]===array[3]) {
        answer = (array[0] + array[2]) * Math.abs(array[0] - array[2]);
        return answer;
    }

    //4. 2개, 1개, 1개 일때
    else if(removeDup.length===3) {
        let q;
        let r;
        for(let i=0;i<3;i++) {
            for(let j=1;j<4;j++) {
                if(array[i]===array[j]) {
                    q = array.filter(x=>x!==array[i])[0]
                    r = array.filter(x=>x!==array[i])[1]
                    answer = q*r;
                    return answer;
                    //console.log(q,r);
                }
            }
        }

    }

    //5. 모두 다를때
    else {
        answer = array[0];
        return answer;
    }

    //return answer;
}


console.log(solution(6,3,3,6));