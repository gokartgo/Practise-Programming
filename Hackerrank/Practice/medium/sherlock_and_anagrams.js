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
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
    // Write your code here
    let check1 = [], check2 = [], answer = 0
    // index
    for(let i = 0;i<s.length - 1;i++) {
      // size of string
      for(let j = i;j < s.length - 1;j++) {

        // set up check 1
        for(let l = i; l < j+1; l++) {
          check1[s[l].charCodeAt(0) - 97] = check1[s[l].charCodeAt(0) - 97] ? check1[s[l].charCodeAt(0) - 97] += 1 : 1
        }
        // compare each index
        for(let k = j + 1;k<s.length;k++) {
          // set up check 2 and set size of string
          for(let m = k;m >= k - j + i ;m--) {
            check2[s[m].charCodeAt(0) - 97] = check2[s[m].charCodeAt(0) - 97] ? check2[s[m].charCodeAt(0) - 97] += 1 : 1
          }
          
          // check answer

          answer++
          for(let l = 0;l<26;l++) {
            if(check2[l] !== check1[l]) {
              answer--
              break
            }
          }
          check2 = []
        }
        check1 = []
      }
    }

  return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = sherlockAndAnagrams(s);

        ws.write(result + '\n');
    }

    ws.end();
}
