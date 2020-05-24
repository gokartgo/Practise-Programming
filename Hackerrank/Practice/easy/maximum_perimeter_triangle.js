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

// Complete the maximumPerimeterTriangle function below.
function maximumPerimeterTriangle(sticks) {
    let answer = []
    sticks.sort((a,b) => a-b)
    for(let i=0;i<sticks.length-2;i++) {
        if(sticks[i] + sticks[i+1] > sticks[i+2]) {
            answer = [sticks[i],sticks[i+1],sticks[i+2]]
        }
    }
    if(answer.length === 0) {
        return [-1]
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const sticks = readLine().split(' ').map(sticksTemp => parseInt(sticksTemp, 10));

    let result = maximumPerimeterTriangle(sticks);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
