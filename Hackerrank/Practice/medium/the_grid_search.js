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

// Complete the gridSearch function below.
function gridSearch(G, P) {
    let check = 'NO'
    for (let i = 0; i < G.length - P.length + 1; i++) {
        for (let j = 0; j < G[0].length - P[0].length + 1; j++) {
            if (G[i][j] === P[0][0]) {
                for (let k = 0; k < P.length; k++) {
                    check = 'YES'
                    for (let l = 0; l < P[0].length; l++) {
                        if(G[i + k][j + l] !== P[k][l]) {
                            check = 'NO'
                        }
                    }
                    if(check === 'NO') {
                        break
                    }
                    if (k === P.length - 1) {
                        return 'YES'
                    }
                }
            }
        }
    }
    return check
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);

        ws.write(result + "\n");
    }

    ws.end();
}
