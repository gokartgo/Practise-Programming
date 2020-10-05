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

// Complete the encryption function below.
function encryption(s) {
    let s_no_space = '', s_split = s.split(' '),s_no_space_length
    let L_floor,L_ceil, prepare_answer = [], answer = ''
    for(let i=0;i<s_split.length;i++) {
        s_no_space += s_split[i]
    }
    s_no_space_length = s_no_space.length
    L_floor = Math.floor(Math.sqrt(s_no_space_length))
    L_ceil = Math.ceil(Math.sqrt(s_no_space_length))
    if(L_floor * L_ceil < s_no_space_length) {
        L_floor = L_ceil
    }
    for(let i = 0;i<L_floor;i++) {
        prepare_answer[i] = []
        for(let j=0;j<L_ceil;j++) {
            if(s_no_space[(L_ceil*i)+j]) {
                prepare_answer[i][j] = s_no_space[(L_ceil*i)+j]
            } else {
                break
            }
        }
    }
    console.log(prepare_answer)
    for(let i = 0;i<prepare_answer[0].length;i++) {
        for(let j = 0;j<prepare_answer.length;j++) {
            if(prepare_answer[j][i]) {
                answer += prepare_answer[j][i]
            } else {
                break
            }
        }
        i < prepare_answer[0].length - 1 ? answer += ' ' : answer
    }

    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
