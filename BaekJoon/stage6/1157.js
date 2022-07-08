// 단어 공부
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// 입력: 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
// 출력: 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.


//완전 못 풀었음..
/* 문자열.charCodeAt(인덱스) 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
String.fromCharCode() 메서드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환 */
let input = require('fs').readFileSync('/dev/stdin').toString().toUpperCase();
//입력값을 모두 대문자로 바꿔줌

  function solution() {
    //알파벳 숫자만큼 0으로 채운 배열 만듬
    const result = new Array(26).fill(0);

    //입력값의 문자숫자만큼 반복
    for(let i=0;i<input.length;i++) {
      //배열[각 문자.charCodeAt(0):문자 하나니까... - 65] += 1;
      result[input[i].charCodeAt(0)-65] += 1;
    }

    //배열 요소 중에 가장 큰 숫자
    const max = Math.max(...result);

    //배열.filter(x => x===max).length === 1
    return result.filter(value => value===max).length ===1
          ? String.fromCharCode(result.findIndex(val => val === max)+65)
          : "?";
}

console.log(solution(input));