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

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    let array_answer=[],answer = 0
    for(let i=0;i<26;i++) {
        array_answer[i] = 0
    }
    for(let i=0;i<s.length;i++) {
        array_answer[s[i].charCodeAt(0) - 97]++
    }
    for(let i=0;i<26;i++) {
        if(array_answer[i] % 2 !== 0) {
            answer++
        }
    }
    if(answer > 1) {
        return 'NO'
    }
    return 'YES'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}
