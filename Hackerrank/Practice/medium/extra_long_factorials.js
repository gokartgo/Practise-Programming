'use strict';

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

function multiply(number, size, res) {
    let carry = 0

    for (let i = 0; i < size; i++) {
        let temp_res = res[i]
        res[i] = (number * res[i] + carry) % 10
        carry = Math.floor((number * temp_res + carry) / 10)
    }
    while (carry != 0) {
        res[size++] = carry % 10
        carry = Math.floor(carry / 10)
    }
    return size
}

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let size = 1, res = [1], temp = 1

    for (let i = 2; i <= n; i++) {
        size = multiply(i, size, res)
    }

    console.log(res.reverse().join(''))
}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
