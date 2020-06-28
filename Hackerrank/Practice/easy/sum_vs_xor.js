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

// Complete the sumXor function below.
function sumXor(n) {
    if(n === 0) {
        return 1
    }

    let answer = 0
    let binary = n.toString(2)
    for(let i=0;i<binary.length;i++) {
        if(binary[i] === '0') {
            answer++
        }
    }

    return Math.pow(2,answer)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = sumXor(n);

    ws.write(result + '\n');

    ws.end();
}
