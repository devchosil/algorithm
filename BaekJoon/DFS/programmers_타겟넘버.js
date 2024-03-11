//  n개의 음이 아닌 정수들이 있습니다.
//  이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 
//  예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
//  -1+1+1+1+1 = 3
//  +1-1+1+1+1 = 3
//  +1+1-1+1+1 = 3
//  +1+1+1-1+1 = 3
//  +1+1+1+1-1 = 3
//  사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 
//  숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return하도록 solution 함수를 작성해주세요

//  제한사항
//  주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
//  각 숫자는 1 이상 50 이하인 자연수입니다.
//  타겟 넘버는 1 이상 1000 이하인 자연수입니다.

const numbers = [4, 1, 2, 1];
const target = 4;

// 왜 dfs지..? -> 타겟 넘버가 나올 떄까지 계속 조합을 파고들기
// 모든 수가 음수있을수는 없다. -> 음수가 존재할 수 있는 경우의 수는 모든 정수-1

// 탈출조건: numbers array 다돌았을 때
// answer + 1 조건: numbers array 다돌고 + target이 합계와 같을 때

function solution (numbers,target) {
    let answer = 0;

    function dfs(count,sum) {
        if (count === numbers.length) {
            if (target === sum) {
                answer++;
            }
            return;
        }

        // 처음에 아래처럼 했다가 에러났음
        // if (count === length && target === sum) {
        //     answer++;
        //     return;
        // }

        dfs(count+1, sum + numbers[count]);
        dfs(count+1, sum - numbers[count]);
    }

    dfs(0,0);

    return answer;
}

console.log(solution(numbers,target));