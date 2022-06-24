let input = require('fs').readFileSync('example.txt').toString().split(' ');

let A = input[0]*1;
let B = input[1]*1;;

if(A>B) {
  console.log(">");
} else if(A<B){
  console.log("<");
} else {
  console.log("==")
}