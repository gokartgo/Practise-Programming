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

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    const arr_count = [], brr_count = [], answer = []
    let answer_index = 0
    for(let i=0;i<=10000;i++) {
        arr_count[i] = 0
        brr_count[i] = 0
    }
    for(let i=0;i<brr.length;i++) {
        if(i < arr.length) {
            arr_count[arr[i]]++
        }
        brr_count[brr[i]]++
    }
    for(let i=0;i<=10000;i++) {
        if(brr_count[i] - arr_count[i] > 0) {
            answer[answer_index++] = i
        }
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
