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

// Complete the toys function below.
function toys(w) {
    let array_answer = [],answer = 0,max = 0
    for(let i=0;i<=10000;i++) {
        array_answer[i] = 0
    }
    for(let i=0;i<w.length;i++) {
        array_answer[w[i]] = 1
        if(w[i] > max) {
            max = w[i]
        }
    }
    for(let i=0;i<=max;i++) {
        if(array_answer[i] === 1) {
            answer++
            i+=4
        }
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const w = readLine().split(' ').map(wTemp => parseInt(wTemp, 10));

    let result = toys(w);

    ws.write(result + "\n");

    ws.end();
}
