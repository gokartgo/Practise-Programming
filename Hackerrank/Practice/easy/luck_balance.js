'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let sum = 0,imp_value = [], imp_value_index = 0
    for(let i=0;i<contests.length;i++) {
        sum += contests[i][0]
        if(contests[i][1] === 1) {
            k--
            imp_value[imp_value_index++] = contests[i][0]
        }
    }
    imp_value_index = 0
    imp_value.sort((a,b) => a - b)
    console.log(k,imp_value,sum)
    while(k < 0) {
        sum -= (imp_value[imp_value_index++] * 2) // not give luck and use luck cause to multiple by 2
        k++
    }
    return sum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    let contests = Array(n);

    for (let i = 0; i < n; i++) {
        contests[i] = readLine().split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    }

    const result = luckBalance(k, contests);

    ws.write(result + '\n');

    ws.end();
}
