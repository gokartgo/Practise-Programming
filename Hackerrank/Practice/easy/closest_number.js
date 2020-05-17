'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    let min,answer = [],index_answer = 0
    arr.sort((a,b) => a-b)
    min = arr[1] - arr[0]
    console.log(arr)
    for(let i=0;i<arr.length-1;i++) {
        if(arr[i+1] - arr[i] == min) {
            answer[index_answer++] = arr[i]
            answer[index_answer++] = arr[i+1]
        } else if(arr[i+1] - arr[i] < min) {
            min = arr[i+1] - arr[i]
            answer = []
            index_answer = 0
            answer[index_answer++] = arr[i]
            answer[index_answer++] = arr[i+1]
        }
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
