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
  let answer = []
  for (let i = 0; i < alice.length; i++) {
    let max = 0
    let min = scores.length - 1
    let index = Math.ceil((min + max) / 2)
    while (true) {
      if (alice[i] < scores[index] && alice[i] > scores[index + 1]) {
        answer[i] = index + 2
        break
      } else if (
        (alice[i] > scores[index] && alice[i] < scores[index - 1]) ||
        (alice[i] === scores[index])
      ) {
        answer[i] = index + 1
        break
      } else if (alice[i] > scores[index]) {
        min = index - 1
        index = Math.floor((min + max) / 2)
      } else if (alice[i] < scores[index]) {
        max = index + 1
        index = Math.ceil((min + max) / 2)
      } else {
        index < 0 ? index = 0 : index = index
        answer[i] = index + 1
        break
      }
    }
  }

  return answer
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

  let new_scores = []
  let index_new_scores = 0
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] !== scores[i + 1]) {
      new_scores[index_new_scores++] = scores[i]
    }
  }

  let result = climbingLeaderboard(new_scores, alice);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
