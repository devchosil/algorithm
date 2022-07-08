let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');

//1. 아무것도 안쓰면 0이 나와야 하는데 1이 나옴
//console.log(input.length);

//2. 이것도 
// let count = 0;

// for(i=0; i<input.length; i++) {
//     if(input[i] === ' ') {
//         count++;
//     }
// }

// if(input[0]===' ' && input[input.length]===' ') {
//     count--;
// } else if(input[0]!==' ' && input[input.length]!==' ') {
//     count++;
// }

// console.log(count);