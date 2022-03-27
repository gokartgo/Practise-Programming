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
 * Complete the 'hackerlandRadioTransmitters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY x
 *  2. INTEGER k
 */

function hackerlandRadioTransmitters(x, k) {
    // Write your code here
    let index = 0, k1 = k * 2, min = Infinity, max = 0, answer = 0, check = 0
    for(let i = 0; i < x.length; i++) {
        if(min > x[i]) {
            min = x[i]
        }
        if(max < x[i]) {
            max = x[i]
        }
    }
    const object_x = x.reduce((prev, cur) => {
        prev[cur] = 1
        return prev
    }, {})

    check = min

    while(check <= max) {
        if(!object_x[check]) {
            check++
            continue
        }
        let step
        for(let i = check; i <= check + k; i++) {
            if(object_x[i]) {
                step = i - check
            }
        }
        
        check += step
        check += k
        // if(object_x[check + k]) {
        //     check += k1
        // } else {
            
        // }
        
        check++
        answer++
    }
    
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const x = readLine().replace(/\s+$/g, '').split(' ').map(xTemp => parseInt(xTemp, 10));

    const result = hackerlandRadioTransmitters(x, k);

    ws.write(result + '\n');

    ws.end();
}
