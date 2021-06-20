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
 * Complete the 'lilysHomework' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function lilysHomework(arr) {
    // Write your code here
    let arr_sort = [], answer = 0, answer_1 = 0, arr_clone = [], arr_clone_1 = []
    for(let i = 0;i<arr.length;i++) {
        arr_sort[i] = arr[i]
        arr_clone[i] = arr[i]
        arr_clone_1[i] = arr[i]
    }
    arr_sort.sort((a,b) => a - b)

    for(let i = 0;i<arr.length;i++) {
        let value = arr_sort[i]
        for(let j=i;j<arr.length;j++) {
            if(value === arr_clone[j]) {
                if(j !== i) {
                    arr_clone[j] = arr_clone[i]
                    arr_clone[i] = value
                    answer++
                }
                break
            }
        }
    }

    arr_sort.sort((a,b) => b - a)
    
    for(let i = 0;i<arr.length;i++) {
        let value = arr_sort[i]
        for(let j=i;j<arr.length;j++) {
            if(value === arr_clone_1[j]) {
                if(j !== i) {
                    arr_clone_1[j] = arr_clone_1[i]
                    arr_clone_1[i] = value
                    answer_1++
                }
                break
            }
        }
    }
    
    return answer_1 > answer ? answer : answer_1
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = lilysHomework(arr);

    ws.write(result + '\n');

    ws.end();
}
