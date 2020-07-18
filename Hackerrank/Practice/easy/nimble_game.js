// hint like nim game but check from index of odd number and set index of odd number
// to be nim game data in part of even number we don't care because it can move 
// mirror with before person

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

// Complete the nimbleGame function below.
function nimbleGame(s) {
    let setNim = [], indexNim = 0, answer = 0
    for(let i=1;i<s.length;i++) {
        if(s[i] % 2 === 1) {
            setNim[indexNim++] = i
        }
    }
    if(s.length === 2) {
        if(s[1] % 2 === 1) {
            return 'First'
        } else {
            return 'Second'
        }
    }
    for(let i=0;i<setNim.length;i++) {
        answer ^= setNim[i]
    }
    if(answer === 0) {
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

        let result = nimbleGame(s);

        ws.write(result + "\n");
    }

    ws.end();
}
