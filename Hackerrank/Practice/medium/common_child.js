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
const memorize = []
const setup_memorize = () => {
  for(let i = 0;i<1001;i++) {
    memorize[i] = new Array(1001)
  }
}

const lgc = (a, b, a_i, b_i) => {
  if(!a[a_i] || !b[b_i]) {
    return 0
  } else if(a[a_i] === b[b_i]) {
    if(memorize[a_i][b_i] === undefined) {
      memorize[a_i][b_i] = 1 + lgc(a, b, a_i + 1, b_i + 1)
    }

    return memorize[a_i][b_i]
  } else {
    if(memorize[a_i + 1][b_i] === undefined) {
      memorize[a_i + 1][b_i] = lgc(a, b, a_i + 1, b_i)
    }
    if(memorize[a_i][b_i + 1] === undefined) {
      memorize[a_i][b_i + 1] = lgc(a, b, a_i, b_i + 1)
    }
    return Math.max(memorize[a_i + 1][b_i],memorize[a_i][b_i + 1])
  }
}

function commonChild(s1, s2) {
    // Write your code here
  setup_memorize()
  return lgc(s1, s2, 0,0)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = commonChild(s1, s2);

    ws.write(result + '\n');

    ws.end();
}
