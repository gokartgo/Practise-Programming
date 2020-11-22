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

function detonating(number_grid, i, j) {
    if(number_grid[i][j + 1] && number_grid[i][j + 1] !== 3) {
        number_grid[i][j + 1] = -1
    }
    if(number_grid[i][j - 1] && number_grid[i][j - 1] !== 3) {
        number_grid[i][j - 1] = -1
    }
    if(number_grid[i - 1] && number_grid[i - 1][j] && number_grid[i - 1][j] !== 3) {
        number_grid[i - 1][j] = -1
    }
    if(number_grid[i + 1] && number_grid[i + 1][j] && number_grid[i + 1][j] !== 3) {
        number_grid[i + 1][j] = -1
    }
}

function setup_grid(number_grid) {
    for(let i = 0;i<number_grid.length; i++) {
        for(let j = 0;j<number_grid[0].length; j++) {
            if(number_grid[i][j] === -1) {
                number_grid[i][j] = 0
            }
            if(number_grid[i][j] === -2) {
                number_grid[i][j] = 3
            }
        }
    }
}

function answer_grid(number_grid) {
    let answer = []
    for(let i = 0;i<number_grid.length; i++) {
        answer[i] = ''
        for(let j = 0;j<number_grid[0].length; j++) {
            if(number_grid[i][j] === 0) {
                answer[i] += '.'
            } else {
                answer[i] += 'O'
            }
        }
    }

    return answer
}

// Complete the bomberMan function below.
function bomberMan(n, grid) {
    if(n > 4) {
        n = 4 + n%4
    }
    let number_grid = [], answer
    if(n === 1) {
        return grid
    }
    
    for(let i = 0;i<grid.length; i++) {
        number_grid[i] = []
        for(let j = 0;j<grid[0].length; j++) {
            if(grid[i][j] === 'O') {
                number_grid[i][j] = 2
            } else {
                number_grid[i][j] = 0   
            }   
        }
    }
    
    for(let k = 1;k < n;k++) {
        for(let i = 0;i<grid.length; i++) {
            for(let j = 0;j<grid[0].length; j++) {
                if(number_grid[i][j] === 0) {
                    number_grid[i][j] = 1
                } else if(number_grid[i][j] === 1) {
                    number_grid[i][j] = 2
                } else if (number_grid[i][j] === 2) {
                    number_grid[i][j] = -2
                } else if (number_grid[i][j] === 3) {
                    number_grid[i][j] = -1
                    detonating(number_grid, i, j)
                }
            }
        }
        setup_grid(number_grid)
    }
    
    answer = answer_grid(number_grid)
    
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rcn = readLine().split(' ');

    const r = parseInt(rcn[0], 10);

    const c = parseInt(rcn[1], 10);

    const n = parseInt(rcn[2], 10);

    let grid = [];

    for (let i = 0; i < r; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = bomberMan(n, grid);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
