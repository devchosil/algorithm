//Array.from()는 얕게 복사?!
//** 시작column, 끝column, 시작row, 끝row 숫자로 지정한 후 작업 */
function solution(n) {
    var answer = [[]];
    let array = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let counter = 1;
    let startCol = 0; //Column 인덱스
    let endCol = n-1;
    let startRow = 0; //Row 인덱스
    let endRow = n-1;

    while(startCol<=endCol && startRow<=endRow) {
        //Top row
        for(let i=startCol;i<=endCol;i++) {
            array[startRow][i] = counter;
            counter++;
        }
        startRow++;

        //Right Column
        for(let i=startRow;i<=endRow;i++) {
            array[i][endCol] = counter;
            counter++;
        }
        endCol--;

        //Bottom Row
        for(let i=endCol;i>=startCol;i--) {
            array[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //left column
        for(let i=endRow;i>=startRow;i--) {
            array[i][startCol] = counter;
            counter++;
        }
        startCol++;

    }





    // }
    // for(let i=0;i<n;i++) {
    //     for(let j=0;j<n;j++) {
    //         if(j==n-1) {
    //             array[i][j] = n+i;
    //         } 
    //         else {
    //             array[i][j] = j+1;
    //         }
    //     }

    //     let count=-1;
    //     for(let j=n-1;j>=0;j--) {    
    //         if(i==n-1) {
    //             array[i][j] = 2*n+count;
    //             count++;
    //         }
    //     }
    
    // }

    return array;
}

console.log(solution(5));

