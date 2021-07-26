'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'highestValuePalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER n
 *  3. INTEGER k
 */

function highestValuePalindrome(s, n, k) {
  let wrong = [], wrong_index = 0, wrong_object = {}
  // Write your code here
  for (let i = 0; i < parseInt(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      wrong[wrong_index++] = i
      wrong_object[i] = true
    }
  }

  if (wrong.length > k) {
    return -1
  }
  let s_array = s.split('')
  for (let i = 0; i < wrong.length; i++) {
    if (parseInt(s_array[wrong[i]]) > parseInt(s_array[s_array.length - wrong[i] - 1])) {
      s_array[s_array.length - wrong[i] - 1] = s_array[wrong[i]]
      k--
    } else {
      s_array[wrong[i]] = s_array[s_array.length - wrong[i] - 1]
      k--
    }
  }

  let i = 0

  while (k > 0 && i < parseInt(s_array.length / 2)) {
    if (s_array[i] !== '9' && (k - 2 >= 0 || wrong_object[i])) {
      s_array[i] = '9'
      s_array[s_array.length - i - 1] = '9'
      wrong_object[i] ? k-- : k -= 2
    }

    i++
  }

  if (k >= 1) {
    k--
    if (s_array.length % 2 === 1) {
      s_array[parseInt(s_array.length / 2)] = '9'
    }
  }

  return s_array.join('')
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const s = readLine();

  const result = highestValuePalindrome(s, n, k);

  ws.write(result + '\n');

  ws.end();
}
