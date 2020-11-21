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

// Complete the bomberMan function below.
function bomberMan(n, grid) {


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rcn = readLine().split(' ');

    const r = parseInt(rcn[0], 10);

    const c = parseInt(rcn[1], 10);

    const n = parseInt(rcn[2], 10);

    let grid = [];

    for (let i = 0; i < r; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = bomberMan(n, grid);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
