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
let number = []
let count = []
let numberCombination = []
let answer = 0
let exponent = 1
let check

function checkAnswer(number) {
    let sum = 0
    for(let i=0;i<number.length;i++) {
        sum+= Math.pow(number[i],exponent)
    }
    if(sum === check) {
        answer++
    }
}

function combination(start,number,count,level,numberCombination) {
    for(let i=start;i<number.length;i++) {
        if(count[i] === 0) {
            continue
        }
        count[i]--
        numberCombination[level] = number[i]
        let cloneNumberCombination = [...numberCombination]
        checkAnswer(cloneNumberCombination)
        combination(i,number,count,level+1,cloneNumberCombination)
        count[i]++
    }
}

// Complete the powerSum function below.
function powerSum(X, N, number) {
  /* my thinking
    let i
    answer = 0
    exponent = N
    check = X
    for(i=1;i<=X;i++) {
        if(Math.pow(i,N) > X) {
            break
        }
    }
    for(let j=0;j<i-1;j++) {
        number[j] = j+1
        count[j] = 1
    }
    combination(0,number,count,0,[])
    return answer
  */
    if(Math.pow(number,N) < X) {
        return powerSum(X,N,number+1) + powerSum(X - Math.pow(number,N),N,number+1)
    } else if(Math.pow(number,N) === X) {
        return 1
    } else {
        return 0
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const X = parseInt(readLine(), 10);

    const N = parseInt(readLine(), 10);

    let result = powerSum(X, N, 1);

    ws.write(result + "\n");

    ws.end();
}
