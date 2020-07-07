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

// Complete the misereNim function below.
function misereNim(s) {
    let one = 0
    for(let i=0;i<s.length;i++) {
        if(s[i] === 1) {
            one++
        }
    }
    if(one === s.length) {
        if(s.length % 2 === 0) {
            return 'First'
        } else {
            return 'Second'
        }
    }
    let sum = s[0]
    for(let i=1;i<s.length;i++) {
        sum = sum^s[i]
    }
    if(sum === 0) {
        return 'Second'
    }
    return 'First'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const s = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));

        let result = misereNim(s);

        ws.write(result + "\n");
    }

    ws.end();
}
