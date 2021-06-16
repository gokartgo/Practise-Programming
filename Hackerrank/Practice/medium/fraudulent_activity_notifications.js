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
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */

function activityNotifications(expenditure, d) {
    // Write your code here
    let transaction_data = [], median, noti = 0
    for(let i = 0;i < d; i++) {
        if(transaction_data[expenditure[i]]){
            transaction_data[expenditure[i]]++
        } else {
            transaction_data[expenditure[i]] = 1
        }
    }
    
    for(let i = d;i < expenditure.length; i++) {
        let index = 0, index_value = null, index1_value = null
        for(let j = 0;j<=200;j++) {
            if(transaction_data[j]) {
                index += transaction_data[j]
            }
            if(d % 2 === 1 && index >= Math.ceil(d/2) && 2 * j <= expenditure[i]) {
                noti++
                break
            } else if(d % 2 === 0) {
                if(index >= d/2 && !index_value) {
                    index_value = j
                }
                if(index >= d/2 + 1 && !index1_value) {
                    index1_value = j
                }
                if(index_value && index1_value) {
                    if(index_value + index1_value <= expenditure[i]) {
                        noti++
                    }
                    break
                }
            }
        }
        
        transaction_data[expenditure[i-d]]--
        if(!transaction_data[expenditure[i]]) {
            transaction_data[expenditure[i]] = 1
        } else {
            transaction_data[expenditure[i]]++
        }
    }
    return noti
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const expenditure = readLine().replace(/\s+$/g, '').split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    const result = activityNotifications(expenditure, d);

    ws.write(result + '\n');

    ws.end();
}
