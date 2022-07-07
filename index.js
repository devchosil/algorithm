let N = require('fs').readFileSync('example.txt').toString().trim()*1;

function solution(n) {
    let count = 0;
    for(i=1;i<=n;i++) {
        let hundreds = Math.floor(i/100);
        let tens = Math.floor(i/10)%10;
        let ones = i%10;

        if(i<100) {   //n이 한자리수 or 두자리수일 때
            count++;
        } else if(i>=100 && i<1000) {
            if(hundreds-tens === tens-ones) {
                count++;
            }
        }
    }
    console.log(count);
}

solution(N);
