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

// Complete the organizingContainers function below.
function organizingContainers(container) {
    let row_sum = [], column_sum = [], row_sort, column_sort
    for(let i = 0;i < container.length; i++) {
        row_sum[i] = 0
        column_sum[i] = 0
    }
    for(let i = 0;i < container.length; i++) {
        for(let j = 0;j < container.length; j++) {
            row_sum[i] += container[i][j]
        }
    }


    for(let i = 0;i < container.length; i++) {
        for(let j = 0;j < container.length; j++) {
            column_sum[i] += container[j][i]
        }
    }

    row_sort = row_sum.sort((a,b) => a - b)
    column_sort = column_sum.sort((a,b) => a - b)

    for(let i = 0;i<row_sort.length; i++) {
        if(row_sort[i] !== column_sort[i]) {
            return 'Impossible'
        }
    }
    return 'Possible'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }

        let result = organizingContainers(container);

        ws.write(result + "\n");
    }

    ws.end();
}
