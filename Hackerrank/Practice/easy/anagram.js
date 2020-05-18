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

// Complete the anagram function below.
function anagram(s) {
    if(s.length % 2 === 1) {
        return -1
    }
    let first,second,array_first=[],array_second=[],answer = 0
    first = s.substring(0,s.length/2)
    second = s.substring(s.length/2,s.length)
    for(let i=0;i<26;i++) {
        array_first[i] = 0
        array_second[i] = 0
    }
    for(let i=0;i<first.length;i++) {
        array_first[first[i].charCodeAt(0) - 97]++
        array_second[second[i].charCodeAt(0) - 97]++
    }
    for(let i=0;i<array_first.length;i++) {
        if(array_first[i] - array_second[i]>0) {
            answer+= (array_first[i] - array_second[i])
        }
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}
