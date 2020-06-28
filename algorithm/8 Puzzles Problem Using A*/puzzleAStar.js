let initialState = [
  [0,8,7],
  [6,5,4],
  [3,2,1]
]
const finalState = [
  [8,6,5],
  [3,1,0],
  [2,4,7]
]

let x, y, p, q, finish = false

function findPathDifferent(state,arr_sum,level,index) {
  let sum = 0
  for(let i = 0;i<9;i++) {
    for(let j=0;j<3;j++) {
      for(let k = 0;k<3;k++) {
        if(state[j][k] === i) {
          x = j
          y = k
        }
        if(finalState[j][k] === i) {
          p = j
          q = k
        }
      }
    }
    Math.abs(x - p) + Math.abs(y - q) !== 0 && sum++
  }
  sum += level
  arr_sum.push({ sum,index })
}

function switchArrayIndex(state,mock_state,zero_row,zero_col, switch_row, switch_col) {
  const array_index = mock_state.length
  mock_state[array_index] = []
  for(let i=0;i<3;i++) {
    mock_state[array_index][i] = []
    for(let j=0;j<3;j++) {
      mock_state[array_index][i][j] = state[i][j]
    }
  }
  let temp = mock_state[array_index][zero_row][zero_col]
  mock_state[array_index][zero_row][zero_col] = mock_state[array_index][switch_row][switch_col]
  mock_state[array_index][switch_row][switch_col] = temp
}

function setDefaultData(state, mock_state) {
  for(let i=0;i<3;i++) {
    for(let j=0;j<3;j++) {
      mock_state[i][j] = state[i][j]
    }
  }
}

function findMin(min, arr_sum) {
  for(let i=0;i<arr_sum.length;i++) {
    if(min > arr_sum[i].sum) {
      min = arr_sum[i].sum
    }
  }
  return min
}

function findPuzzle(state, level) {
  let zero_row,zero_col,mock_state = [],min = Infinity, arr_sum = [],check = 0
  for(let i=0;i<state.length;i++) {
    check=0
    for(let j=0;j<3;j++) {
      for(let k=0;k<3;k++) {
        if(state[i][j][k] === 0) {
          zero_row = j
          zero_col = k
        }
        if(state[i][j][k] === finalState[j][k]) {
          check++
        }
      }
    }
    if(check === 9) {
      console.log('finish')
      finish = true
      return
    }
    if(state[i][zero_row][zero_col+1]) {
      switchArrayIndex(state[i],mock_state, zero_row, zero_col, zero_row, zero_col+1)
      findPathDifferent(mock_state[mock_state.length - 1], arr_sum, level,mock_state.length - 1)
    }
    if(state[i][zero_row+1] && state[i][zero_row+1][zero_col]) {
      switchArrayIndex(state[i],mock_state, zero_row, zero_col, zero_row + 1, zero_col)
      findPathDifferent(mock_state[mock_state.length - 1], arr_sum, level,mock_state.length - 1)
    }
    if(state[i][zero_row-1] && state[i][zero_row-1][zero_col]) {
      switchArrayIndex(state[i],mock_state, zero_row, zero_col, zero_row - 1, zero_col)
      findPathDifferent(mock_state[mock_state.length - 1], arr_sum, level,mock_state.length - 1)
    }
    if(state[i][zero_row][zero_col-1]) {
      switchArrayIndex(state[i],mock_state, zero_row, zero_col, zero_row, zero_col-1)
      findPathDifferent(mock_state[mock_state.length - 1], arr_sum, level,mock_state.length - 1)
    }
  }
  min = findMin(min,arr_sum)

  let all_state = []
  for(let i=0;i<arr_sum.length;i++) {
    if(arr_sum[i].sum === min) {
      all_state.push(mock_state[arr_sum[i].index])
    }
    if(finish) {
      console.log('----',finish)
      return
    }
  }
  console.log('-----------------------')
  for(let i=0;i<all_state.length;i++) {
    for(let j=0;j<3;j++) {
      console.log(all_state[i][j])
    }
    console.log('----------------------')
  }
  findPuzzle(all_state, level+1)
}

// set array metrix before findpuzzle
console.log([initialState])
findPuzzle([initialState], 0)
