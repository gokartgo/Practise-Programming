'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the decentNumber function below.
function decentNumber(n) {
    let count_three,count_five,answer = ''
    if(n%3 == 0) {
        count_three = n/3
        for(let i=0;i<count_three;i++) {
            answer+='555'
        }
        console.log(answer)
        return
    }
    count_three = parseInt(n/3) - 1
    while(count_three >= 0) {
        let check
        check = (n - count_three*3)%5
        if(check === 0) {
            for(let i=0;i<count_three;i++) {
                answer+='555'
            }
            count_five = (n - count_three*3)/5
            for(let i=0;i<count_five;i++) {
                answer+='33333'
            }
            console.log(answer)
            return
        }
        count_three--
    }
    console.log(-1)
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        decentNumber(n);
    }
}
