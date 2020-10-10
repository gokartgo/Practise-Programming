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

// Complete the biggerIsGreater function below.
function biggerIsGreater(w) {
    let number_w = [], check_no_answer = 0
    for(let i=0;i<w.length;i++) {
        number_w[i] = w.charCodeAt(i) - 97
    }
    for(let i=0;i<number_w.length - 1;i++) {
        if(number_w[i] >= number_w[i+1]){
            check_no_answer++
            continue
        }
        break
    }
    if(check_no_answer === number_w.length - 1) {
        return 'no answer'
    }
    console.log('------')
    console.log(w, w.length)
    console.log(number_w)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const w = readLine();

        let result = biggerIsGreater(w);

        ws.write(result + "\n");
    }

    ws.end();
}
