// counting sort
// extended euclidean algorithm find s&t
// modMultiply greekForgreek

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
 * Complete the 'initialize' function below.
 *
 * The function accepts STRING s as parameter.
 */
const s_array = []
const mod_factorial = [1]
function initialize(s) {
    // This function is called once before all queries.
    s_array[0] = new Array(26)
    for(let i = 0;i<26;i++) {
      s_array[0][i] = 0
    }

    for(let i = 1;i<=s.length;i++) {
      s_array[i] = new Array(26)
      for(let j = 0;j<26;j++) {
        s_array[i][j] = s_array[i - 1][j]
      }
      s_array[i][s[i-1].charCodeAt(0) - 97]++
    }

    let sum = 1
    for(let i = 1; i<=100000; i++) {
        sum = sum * i % 1000000007
        mod_factorial[i] = sum
    }
}


function modMultiply(a,b) {
  let first, second, m = 1000000007
  if(a * b < Number.MAX_SAFE_INTEGER) {
      return a * b % m
  }
  if(a > b) {
    first = a
    second = b
  } else {
    first = b
    second = a
  }
  first = first % m
  let res = 0
  while(second > 0) {
    if(second & 1 > 0) { // second % 2 === 1
      res = (res + first) % m
    }

    first = first * 2 % m
    second = second >> 1 // second = parseInt(second / 2)
  }

  return res
}

const extendedGcd = (a, b) => {
  let r1 = a, r2 = b, s1 = 1, s2 = 0, t1 = 0, t2 = 1, q, r, s, t
  
  while(r2 > 0) {
    q = parseInt(r1 / r2)
    r = r1 % r2
    s = s1 - s2 * q
    t = t1 - t2 * q

    r1 = r2
    r2 = r

    s1 = s2
    s2 = s

    t1 = t2
    t2 = t
  }

  if(s1 < 0) {
    s1 += b
  }
  if(t1 < 0) {
    t1 += a
  }

  return t1
}

/*
 * Complete the 'answerQuery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function answerQuery(l, r) {
    let palindromes = 0, different = 0, counting = [], duplicate_index = 0, duplicate = []
    // Return the answer for this query modulo 1000000007.
    for(let i = 0;i<26;i++) {
      counting[i] = s_array[r][i] - s_array[l - 1][i]
    }

    // get number of palindromes
    for(let i = 0;i<counting.length;i++) {
        if(counting[i]) {
          let number_duplicate = parseInt(counting[i] / 2)
          palindromes += number_duplicate
          duplicate[duplicate_index++] = number_duplicate
          if(counting[i] % 2 === 1) {
            different++
          }
        }
    }

    // get modulo inverse of divisor
    let modulo_divisor = 1
    for(let i = 0;i<duplicate.length;i++) {
        modulo_divisor =  modMultiply(modulo_divisor, mod_factorial[duplicate[i]])
    }

    modulo_divisor = extendedGcd(1000000007, modulo_divisor)

    let answer = modMultiply(mod_factorial[palindromes], modulo_divisor)

    if(different > 1) {
        answer = modMultiply(answer, different)
    }

    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    initialize(s);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const l = parseInt(firstMultipleInput[0], 10);

        const r = parseInt(firstMultipleInput[1], 10);

        const result = answerQuery(l, r);

        ws.write(result + '\n');
    }

    ws.end();
}
