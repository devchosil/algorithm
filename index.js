let input = require('fs').readFileSync('example.txt').toString().trim();

const alphabet = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

let result = 0;
let count = 0;

for(i=0;i<input.length;i++) {

  for(j=0;j<alphabet.length;j++) {
    alphabet[j].includes(input[i]) ? count=j+3 : 0
  }
  result += count;
}

console.log(result);