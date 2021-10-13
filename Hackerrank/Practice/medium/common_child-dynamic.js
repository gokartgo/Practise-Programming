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
 * Complete the 'commonChild' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function commonChild(s1, s2) {
    // Write your code here
    let memorize = []
    memorize[0] = new Array(s1.length + 1)
    memorize[1] = new Array(s1.length + 1)
    
    for(let i = 0; i<memorize.length; i++) {
      for(let j = 0; j<memorize[0].length; j++) {
        memorize[i][j] = 0
      }
    }
    
    for(let i = 1; i<=s2.length;i++) {
      for(let j = 1; j<=s1.length;j++) {
        if(s2[i-1] === s1[j-1]) {
          memorize[1][j] = 1 + memorize[0][j-1]
        } else {
          memorize[1][j] = Math.max(memorize[1][j-1], memorize[0][j])
        }
      }
      
      for(let j = 0; j<memorize[0].length;j++) {
        memorize[0][j] = memorize[1][j]
        memorize[1][j] = 0
      }
    }
    
    return memorize[0][memorize[0].length - 1]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = commonChild(s1, s2);

    ws.write(result + '\n');

    ws.end();
}
