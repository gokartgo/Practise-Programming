'use strict';

const fs = require('fs');

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

/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Write your code here
    if(k === 1) {
        return 1
    }
    let check = [], answer = 0
    for(let i = 0;i<k; i++) {
        check[i] = 0
    }
    for(let i = 0;i<s.length;i++) {
        check[s[i]%k]++
    }
    if(check[0] > 1) {
        check[0] = 1
    }
    if(k%2 === 0 && check[k/2] > 1) {
        check[k/2] = 1
    }
    for(let i = 0;i<k-1; i++) {
        for(let j = i+1;j<k; j++) {
            if( (i + j) % k === 0 ) {
                if( check[i] >= check[j] ) {
                    check[j] = 0
                } else {
                    check[i] = 0
                }
            }
        }
    }
    
    for(let i = 0;i<check.length;i++) {
        answer += check[i]
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}
