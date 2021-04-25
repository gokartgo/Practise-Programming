'use strict';

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
 * Complete the 'almostSorted' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function almostSorted(arr) {
    // Write your code here
    let arr_sort = [], mis_indice = []
    for(let i = 0; i< arr.length; i++) {
        arr_sort[i] = arr[i]
    }
    arr_sort.sort((a,b) => a-b)
    for(let i = 0;i<arr_sort.length; i++) {
        if(arr[i] !== arr_sort[i]) {
            mis_indice.push(i+1)
        }
    }
    
    if(mis_indice.length === 0) {
        console.log('yes')
        return
    }

    if(mis_indice.length === 2) {
        console.log('yes')
        console.log('swap', mis_indice.join(' '))
        return
    }

    const start = mis_indice[0] - 1, end = mis_indice[mis_indice.length - 1] - 1, clone = []
    let clone_index = 0
    for(let i = start; i <= end; i++) {
        clone.push(arr[i])
    }
    
    for(let i = 0; i < parseInt(clone.length / 2); i++) {
        let temp = clone[clone.length - 1 - i]
        clone[clone.length - 1 - i] = clone[i]
        clone[i] = temp
    }
    
    for(let i = start; i<= end; i++) {
        arr[i] = clone[clone_index++]
    }

    for(let i = 0;i<arr_sort.length; i++) {
        if(arr[i] !== arr_sort[i]) {
            console.log('no')
            return
        }
    }
    console.log('yes')
    console.log('reverse', start + 1, end + 1)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    almostSorted(arr);
}
