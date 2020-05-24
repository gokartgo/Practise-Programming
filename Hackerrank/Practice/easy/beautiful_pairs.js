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

// Complete the beautifulPairs function below.
function beautifulPairs(A, B) {
    let array_A = [],array_B = [],answer = 0
    for(let i = 0;i<=1000;i++) {
        array_A[i] = 0
        array_B[i] = 0
    }
    for(let i = 0;i<A.length;i++) {
        array_A[A[i]]++
    }
    for(let i = 0;i<B.length;i++) {
        array_B[B[i]]++
    }
    for(let i = 0;i<=1000;i++) {
        let number = 0
        if(array_A[i] > array_B[i]) {
            number = array_B[i]
        } else if(array_A[i] < array_B[i]) {
            number = array_A[i]
        } else if(array_A[i] === array_B[i]) {
            number = array_A[i]
        }
        if(number !== 0) {
            array_A[i] -= number
            array_B[i] -= number
            answer += number
        }
    }
    let check_A = 0,check_B = 0
    for(let i = 0;i<=1000;i++) {
        if(array_A[i]) {
            check_A++
        }
        if(array_B[i]) {
            check_B++
        }
        if(check_A && check_B) {
            return answer + 1
        }
    }
    if(!check_A && !check_B) {
        return answer - 1
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

    const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));
   
    let result = beautifulPairs(A, B);

    ws.write(result + "\n");

    ws.end();
}
