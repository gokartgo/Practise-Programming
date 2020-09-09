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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let score = scores.sort((a,b) => a - b),index = 1, score_object = {}
    
    for(let j=score.length - 1;j>=0;j--) {
        if(!score_object[`${score[j]}`]) {
            score_object[`${score[j]}`] = index++
        }
    }

    for(let i=0;i<alice.length;i++) {
        rank = 1
        scores_check = {}
        for(let j=0;j<scores.length;j++) {
            if(alice[i] < scores[j] && !scores_check[`${scores[j]}`]) {
                rank++
                scores_check[`${scores[j]}`] = true
            }
        }
        answer[index++] = rank
    }
    return answer
    // let scores_check = {}, rank = 1, answer = [], index = 0
    // for(let i=0;i<alice.length;i++) {
    //     rank = 1
    //     scores_check = {}
    //     for(let j=0;j<scores.length;j++) {
    //         if(alice[i] < scores[j] && !scores_check[`${scores[j]}`]) {
    //             rank++
    //             scores_check[`${scores[j]}`] = true
    //         }
    //     }
    //     answer[index++] = rank
    // }
    // return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
