'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the balancedSums function below.
function balancedSums(arr) {
    let tail = arr.length - 1, head = 0
    let head_sum = 0, tail_sum = 0
    for(let i=0;i<arr.length;i++) {
        if(head === arr.length-1 || tail === 0 || head === tail) {
            break
        }
        if(arr[head] == 0) {
            head++
        } else if(arr[tail] == 0) {
            tail--
        } else {
            if(head_sum < tail_sum) {
                head_sum += arr[head++]
            } else if(tail_sum <= head_sum) {
                tail_sum += arr[tail--]
            }
        }
    }
    if(head_sum === tail_sum) {
        return 'YES'
    }
    return 'NO'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
