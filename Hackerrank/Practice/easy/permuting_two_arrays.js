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

// Complete the twoArrays function below.
function twoArrays(k, A, B) {
    let index_a = 0,index_b = -1,choose_a = -1,choose_b = -1, min = 10000000000
    while(A.length > 0) {
        min = 10000000000
        choose_b = -1
        for(let i=0;i<A.length;i++) {
            if(A[index_a] + B[i] >= k && A[index_a] + B[i] < min) {
                min = A[index_a] + B[i]
                choose_b = i
                if(min === k) {
                    break
                }
            }
        }
        if(choose_b !== -1) {
            A.splice(index_a,1)
            B.splice(choose_b,1)
        } else {
            return 'NO'
        }
        if(index_a === 10) {
            console.log(A.length)
            return
        }
    }
    return 'YES'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

        const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));

        let result = twoArrays(k, A, B);

        ws.write(result + "\n");
    }

    ws.end();
}
