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

// Complete the lonelyinteger function below.
function lonelyinteger(a) {
    let count_sort = []
    for(let i=0;i<=100;i++) {
        count_sort[i] = 0
    }
    for(let i=0;i<a.length;i++) {
        count_sort[a[i]]++
    }
    for(let i=0;i<=100;i++) {
        if(count_sort[i] === 1) {
            return i
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = lonelyinteger(a);

    ws.write(result + "\n");

    ws.end();
}
