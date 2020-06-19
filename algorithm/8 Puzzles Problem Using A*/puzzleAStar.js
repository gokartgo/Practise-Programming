let initialState = [
  [2,8,3],
  [1,6,4],
  [7,0,5]
]
const finalState = [
  [1,2,3],
  [8,0,4],
  [7,6,5]
]

let x, y, p, q, finish = false

function findPathDifferent(state,arr_sum,level,type) {
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
    sum += Math.abs(x - p) + Math.abs(y - q)
  }
  sum += level
  arr_sum.push({ sum, type })
}

function switchArrayIndex(mock_state,zero_row,zero_col, switch_row, switch_col) {
  let temp = mock_state[zero_row][zero_col]
  mock_state[zero_row][zero_col] = mock_state[switch_row][switch_col]
  mock_state[switch_row][switch_col] = temp
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

function findPuzzle(state, level, arr_before_sum) {
  let zero_row,zero_col,state1 = [],state2 = [],state3 = [],state4 = [],min = Infinity, arr_sum = [],check = 0
  for(let i=0;i<3;i++) {
    state1[i] = []
    state2[i] = []
    state3[i] = []
    state4[i] = []
    for(let j=0;j<3;j++) {
      state1[i][j] = state[i][j]
      state2[i][j] = state[i][j]
      state3[i][j] = state[i][j]
      state4[i][j] = state[i][j]
      if(state[i][j] === 0) {
        zero_row = i
        zero_col = j
      }
      if(state[i][j] === finalState[i][j]) {
        check++
      }
    }
  }
  if(check === 9) {
    console.log('finish')
    finish = true
    return
  }
  if(state[zero_row][zero_col+1]) {
    switchArrayIndex(state1, zero_row, zero_col, zero_row, zero_col+1)
    findPathDifferent(state1, arr_sum, level, 0)
  }
  if(state[zero_row+1] && state[zero_row+1][zero_col]) {
    switchArrayIndex(state2, zero_row, zero_col, zero_row + 1, zero_col)
    findPathDifferent(state2, arr_sum, level, 1)
  }
  if(state[zero_row-1] && state[zero_row-1][zero_col]) {
    switchArrayIndex(state3, zero_row, zero_col, zero_row - 1, zero_col)
    findPathDifferent(state3, arr_sum, level, 2)
  }
  if(state[zero_row][zero_col-1]) {
    switchArrayIndex(state4, zero_row, zero_col, zero_row, zero_col-1)
    findPathDifferent(state4, arr_sum, level, 3)
  }
  min = findMin(min,arr_sum)
  for(let i=0;i<arr_before_sum.length;i++) {
    if(min > arr_before_sum[i]) {
      return
    }
  }
  let all_state = [state1,state2,state3,state4]
  for(let i=0;i<arr_sum.length;i++) {
    if(arr_sum[i].sum === min) {
      arr_sum[i].sum = Infinity
      console.log(all_state[arr_sum[i].type], level+1, arr_sum,min)
      if(level < 7) {
        findPuzzle(all_state[arr_sum[i].type], level+1, arr_sum)
        console.log(level)
      }
    }
    console.log('finish ',finish)
    if(finish) {
      return
    }
  }
}

findPuzzle(initialState, 0, [{sum:Infinity,type:0},{sum:Infinity,type:1},{sum:Infinity,type:2},{sum:Infinity,type:3}])
