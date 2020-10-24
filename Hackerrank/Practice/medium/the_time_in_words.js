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

// Complete the timeInWords function below.
function timeInWords(h, m) {
    let hour = h, minute = m, past_to = 'past', time_unit = 'minute'
    let string_time = ['o\' clock', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half past']

    if (m > 30) {
        minute = 30 - minute % 30
        past_to = 'to'
        hour = h === 12 ? 1 : ++hour
    } else if (m === 0  || m === 30) {
        past_to = ''
    }

    hour = string_time[hour]
    minute = string_time[minute]

    if (past_to && m !== 15 && m !== 45) {
        time_unit = m === 1 ? time_unit : `${time_unit}s`
        past_to = `${time_unit} ${past_to}`
    }

    let answer = past_to ? `${minute} ${past_to} ${hour}` : `${minute} ${hour}`
    answer = m === 0 ? `${hour} ${minute}` : answer

    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");



    ws.end();
}
