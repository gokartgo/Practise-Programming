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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    let first,second,array_first=[],array_second=[],answer = 0
    first = s1
    second = s2
    for(let i=0;i<26;i++) {
        array_first[i] = 0
        array_second[i] = 0
    }
    for(let i=0;i<first.length;i++) {
        array_first[first[i].charCodeAt(0) - 97]++
    }
    for(let i=0;i<second.length;i++) {
        array_second[second[i].charCodeAt(0) - 97]++
    }
    for(let i=0;i<array_first.length;i++) {
        answer+= Math.abs(array_first[i] - array_second[i])
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
