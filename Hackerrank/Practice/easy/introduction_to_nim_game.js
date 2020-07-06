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

// Complete the nimGame function below.
function nimGame(pile) {
    let sum = pile[0]
    for(let i=1;i<pile.length;i++) {
        sum = sum^pile[i]
    }
    if(sum === 0) {
        return 'Second'
    }
    return 'First'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine(), 10);

        const pile = readLine().split(' ').map(pileTemp => parseInt(pileTemp, 10));

        let result = nimGame(pile);

        ws.write(result + "\n");
    }

    ws.end();
}
