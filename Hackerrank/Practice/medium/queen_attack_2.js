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

// Complete the queensAttack function below.
// n is size board
function queensAttack(n, k, r_q, c_q, obstacles) {
    let answer = []
    answer[0] = c_q - 1 // <-
    answer[1] = n - c_q // ->
    answer[2] = n - r_q // |^
    answer[3] = r_q - 1 // |v
    answer[4] = n - r_q >= c_q - 1 ? c_q - 1 : n - r_q // \^
    answer[5] = r_q >= c_q ? c_q - 1 : r_q - 1 // /v
    answer[6] = n - r_q >= n - c_q ? n - c_q : n - r_q // /^
    answer[7] = r_q - 1 >= n - c_q ? n - c_q : r_q - 1 // \v
    console.log(answer)
    // for(let i = 0;i<obstacles.length;i++) {
    //     if( r_q === obstacles[i][0] && c_q > obstacles[i][1] ) { // <-
            
    //     } else if ( r_q === obstacles[i][0] && c_q < obstacles[i][1] ) { // ->

    //     } else if ( r_q < obstacles[i][0] && c_q === obstacles[i][1] ) { // |^
            
    //     } else if ( r_q > obstacles[i][0] && c_q === obstacles[i][1] ) { // |v
            
    //     } else if ( r_q < obstacles[i][0] && c_q > obstacles[i][1] ) { // \^
            
    //     } else if ( r_q > obstacles[i][0] && c_q > obstacles[i][1] ) { // /v
            
    //     } else if ( r_q < obstacles[i][0] && c_q < obstacles[i][1] ) { // /^
            
    //     } else if ( r_q > obstacles[i][0] && c_q < obstacles[i][1] ) { // \v
            
    //     }
    // }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const r_qC_q = readLine().split(' ');

    const r_q = parseInt(r_qC_q[0], 10);

    const c_q = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    let result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + "\n");

    ws.end();
}
