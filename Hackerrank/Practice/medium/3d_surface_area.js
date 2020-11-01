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

// Complete the surfaceArea function below.
function surfaceArea(A) {
    let answer = 0
    for(let i = 0;i<A.length;i++) {
        for(let j = 0;j<A[0].length;j++) {
            let surface = A[i][j] * 4 + 2, main
            if(A[i+1]) {
                surface = A[i+1][j] > A[i][j] ? surface - A[i][j] : surface - A[i+1][j]
            }
            if(A[i-1]) {
                surface = A[i-1][j] > A[i][j] ? surface - A[i][j] : surface - A[i-1][j]
            }
            if(A[i][j+1]) {
                surface = A[i][j+1] > A[i][j] ? surface - A[i][j] : surface - A[i][j+1]
            }
            if(A[i][j-1]) {
                surface = A[i][j-1] > A[i][j] ? surface - A[i][j] : surface - A[i][j-1]
            }
            answer += surface
        }
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const HW = readLine().split(' ');

    const H = parseInt(HW[0], 10);

    const W = parseInt(HW[1], 10);

    let A = Array(H);

    for (let i = 0; i < H; i++) {
        A[i] = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));
    }

    let result = surfaceArea(A);

    ws.write(result + "\n");

    ws.end();
}
