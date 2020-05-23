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

// Complete the gridChallenge function below.
function gridChallenge(grid) {
    let grid_num = []
    for(let i=0;i<grid.length;i++) {
        grid_num[i] = []
        for(let j = 0;j<grid[i].length;j++) {
            grid_num[i][j] = grid[i][j].charCodeAt(0)
        }
        grid_num[i].sort((a,b) => a-b)
    }
    for(let i=0;i<grid_num[0].length;i++) {
        for(let j=0; j<grid_num.length - 1; j++) {
            if(grid_num[j][i] > grid_num[j+1][i]) {
                return 'NO'
            }
        }
    }
    return 'YES'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        let result = gridChallenge(grid);

        ws.write(result + "\n");
    }

    ws.end();
}
