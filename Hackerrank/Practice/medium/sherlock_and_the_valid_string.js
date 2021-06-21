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
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    // Write your code here
    let s_count = [], s_count_clean = {}, index = 0, check = 0
    for(let i = 0;i<s.length;i++) {
        if(s_count[s[i].charCodeAt() - 97]) {
            s_count[s[i].charCodeAt() - 97]++
        } else {
            s_count[s[i].charCodeAt() - 97] = 1   
        }
    }
   
    for(let i = 0;i<s_count.length; i++) {
        if(s_count[i]) {
            if(!s_count_clean[s_count[i]]) {
                s_count_clean[s_count[i]] = 1
            } else {
                s_count_clean[s_count[i]]++
            }
        }
    }
    // s_count_clean is number of duplicate string ex aaabbbcccddde => { 3:4, 1:1 }
    const object_keys = Object.keys(s_count_clean)

    if(
        object_keys.length === 1 ||
        (
            object_keys.length === 2 && (
                s_count_clean[object_keys[0]] === 1 ||
                s_count_clean[object_keys[1]] === 1
            ) && (
                Math.abs(object_keys[0] - object_keys[1]) === 1 ||
                (s_count_clean[object_keys[0]] === 1 && object_keys[0] === '1') ||
                (s_count_clean[object_keys[1]] === 1 && object_keys[1] === '1')
            )
        )
    ) {
        return 'YES'
    } else {
        return 'NO'
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}
