// 아스키 코드
// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
// 입력: 알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.
// 출력: 입력으로 주어진 글자의 아스키 코드 값을 출력한다.

//charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
//str.charCodeAt()  - 아스키코드 값 출력
//charAt() 함수는 문자열에서 특정 인덱스에 위치하는  유니코드 단일문자를 반환
//str.charAt()   - 아스키코드 값에 해당하는 문자 반환

let input = require('fs').readFileSync('example.txt').toString().trim();

console.log(input.charCodeAt(0));