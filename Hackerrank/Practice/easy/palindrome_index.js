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

// Complete the palindromeIndex function below.
function palindromeIndex(s) {
   let isPalindrome = true,answer = 0,start,last
    for(let i=0;i<s.length/2;i++) {
        if(s[i] !== s[s.length - i -1]) {
            isPalindrome = false
            start = i
            last = s.length - i -1
            break
        }
    }
    if(isPalindrome) {
        return -1
    }
    let checkStart = '',checkEnd = ''
    for(let i=0;i<s.length;i++) {
        if(i !== start) {
            checkStart += s[i]
        }
        if(i !== last) {
            checkEnd += s[i]
        }
    }
    let isPalindromeStart = true,isPalindromeLast = true
    for(let i=0;i<checkStart.length/2;i++) {
        if(checkStart[i] !== checkStart[checkStart.length - i -1]) {
            isPalindromeStart = false
        }
        if(checkEnd[i] !== checkEnd[checkEnd.length - i -1]) {
            isPalindromeLast = false
        }
    }
    if(isPalindromeStart) {
        return start
    }
    if(isPalindromeLast) {
        return last
    }
    return -1
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}
