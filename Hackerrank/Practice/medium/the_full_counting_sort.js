'use strict';

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
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {
    // Write your code here
    let obj = {}
    for(let i = 0; i < arr.length / 2; i++ ) {
        arr[i][1] = '-'
    }
    for(let i = 0; i < arr.length; i++) {
        if(!obj[arr[i][0]]) {
            obj[arr[i][0]] = []
        }
        obj[arr[i][0]].push(arr[i][1])
    }
    
    let key = Object.keys(obj), answer = ''
    for(let i = 0; i < key.length; i++) {
        answer += obj[key[i]].join(' ')
        if(i !== key.length - 1) {
            answer += ' '
        }
    }
    console.log(answer)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
