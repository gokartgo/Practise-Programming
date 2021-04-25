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

/*
 * Complete the 'larrysArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY A as parameter.
 */

function larrysArray(A) {
    // Write your code here
    let array_index = {}
    for(let i = 0; i < A.length; i++) {
        array_index[A[i]] = i
    }
    for(let i = 0; i < A.length - 3; i++) {
        if(A[i] !== i+1) {
            for(let j = array_index[i+1]; j > i; j--) {
                    A[j] = A[j - 1]
            }
            A[i] = i + 1
            
            if((array_index[i+1] - i)  % 2 === 1) {
                let temp = A[i+1]
                A[i+1] = A[i+2]
                A[i+2] = temp
            }
            for(let j = i; j < A.length; j++) {
                array_index[A[j]] = j
            }
        }
    }
    console.log(A)
    if(
        (A[A.length - 3] - A[A.length - 2]) + (A[A.length - 2] - A[A.length - 1]) === -2 ||      (A[A.length - 3] - A[A.length - 2]) + (A[A.length - 2] - A[A.length - 1]) === 1
        
    ) {
        return 'YES'
    } else {
        return 'NO'
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

        const result = larrysArray(A);

        ws.write(result + '\n');
    }

    ws.end();
}
