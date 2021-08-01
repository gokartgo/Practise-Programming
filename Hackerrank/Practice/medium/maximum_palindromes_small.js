// knowledge
// Permutations with Repetition
// modulo inverse with prime a^p-2 mod p = a^-1 mod p
// multiply large number programming
// modulo large number programming
// exponentiation by squaring

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
    for(let i = 0;i<s.length;i++) {
        s_array[i] = s[i].charCodeAt(0) - 97;
    }
    let sum = 1
    for(let i = 1; i<=100000; i++) {
        sum = sum * i % 1000000007
        mod_factorial[i] = sum
    }
}

function modulo(a, b) {
  let answer = 0
  for(let i = a.length - 1; i >= 0;i--) {
    answer = ( answer * 10 % b + a[i] % b ) % b
  }

  return answer
}


function multiply(first,second) {
  let answer = [], first_i = 0, second_i = 0
  for(let i = second.length - 1; i >= 0; i--) {
    let carry = 0
    second_i = 0

    for(let j = first.length - 1; j >= 0; j--) {
      let value = parseInt(first[j]) * parseInt(second[i]) + carry

      answer[first_i + second_i] = answer[first_i + second_i] || 0

      value += answer[first_i + second_i]

      carry = parseInt( value / 10 )

      answer[first_i + second_i] = value % 10

      second_i++
    }

    if(carry > 0) {
      answer[first_i + second_i] = carry
    }

    first_i++
  }
  let check = [], l = 0
  for(let k = answer.length - 1; k>=0;k--) {
    check[l++] = answer[k]
  }

  return answer
}

const modulo_multiply = (a,b) => {
  if(a * b > Number.MAX_SAFE_INTEGER) {
    return modulo(multiply(a.toString(), b.toString()), 1000000007)
  } else {
    return a * b % 1000000007
  } 
}

const powerMod = (base, power, mod) => {
  if(power === 1) {
    return base
  }
  const result = powerMod(base, parseInt(power / 2), mod)
  const sum = modulo_multiply(result, result)
  return power % 2 === 0 ? sum : modulo_multiply(sum, base)
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
    for(let i = l - 1;i<r;i++) {
        if(counting[s_array[i]]) {
            counting[s_array[i]]++
        } else {
            counting[s_array[i]] = 1
        }
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
        modulo_divisor =  modulo_multiply(modulo_divisor, mod_factorial[duplicate[i]])
    }

    modulo_divisor = powerMod(modulo_divisor, 1000000005, 1000000007)

    let answer = modulo_multiply(mod_factorial[palindromes], modulo_divisor)

    if(different > 1) {
        answer = modulo_multiply(answer, different)
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
