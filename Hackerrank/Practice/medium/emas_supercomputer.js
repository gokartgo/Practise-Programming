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

function find_cross(array_grid, row, column, position) {
    let edge_check, edge_number = 1, check = true, cross = false

    while (check) {
        edge_check = 0
        if(array_grid[row-edge_number] && array_grid[row-edge_number][column] > 0) {
            edge_check++
        }
        if(array_grid[row+edge_number] && array_grid[row+edge_number][column] > 0) {
            edge_check++
        }
        if(array_grid[row][column - edge_number] > 0) {
            edge_check++
        }
        if(array_grid[row][column + edge_number] > 0) {
            edge_check++
        }
        
        if(edge_check === 4) {
            cross = true
            array_grid[row-edge_number][column]++
            array_grid[row+edge_number][column]++
            array_grid[row][column - edge_number]++
            array_grid[row][column + edge_number]++
            edge_number++
            position.push([row, column, (edge_number - 1) * 4 + 1])
        } else {
            check = false
        }
    }
    
    if(cross) {
        array_grid[row][column]++
    }
}

function get_clone_array_grid(array_grid) {
    let clone = []
    for(let i = 0;i<array_grid.length; i++) {
        clone[i] = []
        for(let j=0;j<array_grid[0].length; j++) {
            clone[i][j] = array_grid[i][j]
        }
    }
    return clone
}

function find_best_two_position(array_grid, position) {
    let max = 0
    for(let i = 0; i<position.length - 1; i++) {
        for(let j = i; j<position.length; j++) {
            let clone_array_grid = get_clone_array_grid(array_grid)
            let first_row = position[i][0],
            first_column = position[i][1],
            second_row = position[j][0],
            second_column = position[j][1],
            first_size = parseInt(position[i][2]/4 + 1),
            second_size = parseInt(position[j][2]/4 + 1)
            
            clone_array_grid[first_row][first_column] = -1
            for(let k = 1; k < first_size; k++) {
                clone_array_grid[first_row - k][first_column] = -1
                clone_array_grid[first_row + k][first_column] = -1
                clone_array_grid[first_row][first_column - k] = -1
                clone_array_grid[first_row][first_column + k] = -1
            }
            clone_array_grid[second_row][second_column] = -1
            let overlap = false
            for(let k = 1; k < second_size; k++) {
                if(clone_array_grid[second_row - k] &&
                clone_array_grid[second_row - k][second_column] === -1) {
                    overlap = true
                    break
                }
                if( clone_array_grid[second_row + k] &&
                clone_array_grid[second_row + k][second_column] === -1) {
                    overlap = true
                    break
                }
                if(clone_array_grid[second_row][second_column - k] === -1){
                    overlap = true
                    break
                }
                if(clone_array_grid[second_row][second_column + k] === -1) {
                    overlap = true
                    break
                }
            }

            if(!overlap) {
                if(position[i][2] * position[j][2] > max) {
                    max = position[i][2] * position[j][2]
                }
            } else {
                if(position[i][2] > max) {
                    max = position[i][2]
                }
            }
        }
    }
    return max
}

// Complete the twoPluses function below.
function twoPluses(grid) {
    let array_grid = [], position = []
    for(let i=0; i<grid.length; i++) {
        array_grid[i] = []
        for(let j=0; j<grid[0].length; j++) {
            array_grid[i][j] = grid[i][j] === 'G' ? 1 : 0
        }
    }
    
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(array_grid[i][j] > 0) {
                find_cross(array_grid, i, j, position)
            }
        }
    }
    if(position.length === 0) {
        return 1
    }
    if(position.length === 1) {
        return position[0][2]
    }
    let answer = find_best_two_position(array_grid, position)
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = twoPluses(grid);

    ws.write(result + "\n");

    ws.end();
}
