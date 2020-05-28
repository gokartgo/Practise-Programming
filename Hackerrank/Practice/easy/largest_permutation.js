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

// Complete the largestPermutation function below.
function largestPermutation(k, arr) {
  let index_array = [-1],check = 0
  for(let i=0;i<arr.length;i++) {
      index_array[arr[i]] = -1
  }
  for(let i=0;i<arr.length;i++) {
      index_array[arr[i]] = i // index_array[5] = 0 -> arr[0] = 5
  }
  for(let i=0;i<arr.length;i++) {
      if(arr[i] !== arr.length - i) {
          let temp_arr = arr[i]
          let temp2_index = index_array[arr.length - i]
          arr[index_array[arr.length - i]] = arr[i] // arr[5 -> 2] = arr[0 -> 3]
          arr[i] = arr.length - i // arr[3 -> 0] = 5
          index_array[arr.length - i] = i // index[5] = 0 
          index_array[temp_arr] = temp2_index // index[3] = index[5] -> 2
          check++
      }
      if(check === k) {
          return arr
      }
  }
  return arr
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = largestPermutation(k, arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
