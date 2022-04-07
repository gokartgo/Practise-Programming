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
 * Complete the 'gridlandMetro' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER k
 *  4. 2D_INTEGER_ARRAY track
 */

function plus(a,b) {
  let array_a = a.split('').reverse()
  let array_b = b.split('').reverse()
  let res = []
  let answer = ''
  let carry = 0
  const length = array_a.length >= array_b.length ? array_a.length : array_b.length

  for(let i = 0;i<length;i++) {
    array_a[i] = !array_a[i] ? 0 : array_a[i]
    array_b[i] = !array_b[i] ? 0 : array_b[i]
    res[i] = (parseInt(array_a[i]) + parseInt(array_b[i]) + carry) % 10
    carry = parseInt((parseInt(array_a[i]) + parseInt(array_b[i]) + carry) / 10)
  }
  if(carry != 0) {
    res[length] = carry
  }

  for(let i=res.length - 1;i>=0;i--) {
    answer += res[i]
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

  return answer
}

function gridlandMetro(n, m, k, track) {
    // Write your code here  
    const installed = {}, installed_index = {}, installed_key = []
    let row_count = 0
    const track_sort = track.sort((a,b) => a[1] - b[1])
    console.log(track_sort)
    for(let i = 0; i < track_sort.length; i++) {
        if(!installed[track_sort[i][0]]) {
            row_count++
            installed_key.push(track_sort[i][0])
            installed[track_sort[i][0]] = [{
                left: track_sort[i][1],
                right: track_sort[i][2] 
            }]
            installed_index[track_sort[i][0]] = 0
        } else {
            let installed_i = installed_index[track_sort[i][0]]
            if(installed[track_sort[i][0]][installed_i].right + 1 < track_sort[i][1]) {
                installed_index[track_sort[i][0]]++
                installed[track_sort[i][0]].push({
                    left: track_sort[i][1],
                    right: track_sort[i][2] 
                })
            } else {
                if(installed[track_sort[i][0]][installed_i].left > track_sort[i][1]) {
                    installed[track_sort[i][0]][installed_i].left = track_sort[i][1]
                }
                if(installed[track_sort[i][0]][installed_i].right < track_sort[i][2]) {
                    installed[track_sort[i][0]][installed_i].right = track_sort[i][2]
                }
            }
        }
    }
   
    let sum = 0
    for (let i = 0; i < installed_key.length; i++) {
        let use = 0
        installed[installed_key[i]].forEach(value => {
            use += value.right - value.left + 1
        })
        sum += (m - use)
    }
   
    let remain_row = n - row_count, result_mul = '0'
    if(remain_row > 0) {
        result_mul = multiply(remain_row.toString(), m.toString()).reverse().join('')
    }
    return plus(sum.toString(), result_mul)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const k = parseInt(firstMultipleInput[2], 10);

    let track = Array(k);

    for (let i = 0; i < k; i++) {
        track[i] = readLine().replace(/\s+$/g, '').split(' ').map(trackTemp => parseInt(trackTemp, 10));
    }

    const result = gridlandMetro(n, m, k, track);

    ws.write(result + '\n');

    ws.end();
}
