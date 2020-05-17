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

// Complete the gemstones function below.
function gemstones(arr) {
    let arr_string = [],answer = 0
    for(let i=0;i<26;i++) {
        arr_string[i] = 0
    }
    for(let i=0;i<arr[0].length;i++) {
        arr_string[arr[0][i].charCodeAt(0) - 97] = 1
    }
    for(let i=1;i<arr.length;i++) {
        for(let j=0;j<arr[i].length;j++) {
            if(arr_string[arr[i][j].charCodeAt(0) - 97] === 0) {
                continue
            }
            if(arr_string[arr[i][j].charCodeAt(0) - 97] === 1) {
                arr_string[arr[i][j].charCodeAt(0) - 97]++
            }
        }
        for(let i=0;i<26;i++) {
            if(arr_string[i] === 1) {
                arr_string[i] = 0
            }
            if(arr_string[i] === 2) {
                arr_string[i] = 1
            }
        }
    }
    for(let i=0;i<26;i++) {
        if(arr_string[i] === 1) {
            answer++
        }
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    let result = gemstones(arr);

    ws.write(result + "\n");

    ws.end();
}
