let initialState = [
  [0,1,3],
  [4,2,5],
  [7,8,6]
]
const finalState = [
  [1,2,3],
  [4,5,6],
  [7,8,0]
]

let h = {sum: 0}, x, y, p, q
function findPathDifferent(state,obj) {
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
    obj.sum += Math.abs(x - p) + Math.abs(y - q)
  }
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

findPathDifferent(initialState,h)

function findPuzzle(state, level) {
  let zero_row,zero_col,mock_state = [[]],min = Infinity
  for(let i=0;i<3;i++) {
    for(let j=0;j<3;j++) {
      mock_state[i][j] = state[i][j]
      if(state[i][j] === 0) {
        zero_row = i
        zero_col = j
      }
    }
  }
  if(state[zero_row][zero_col+1]) {
    switchArrayIndex(mock_state, zero_row, zero_col, zero_row, zero_col+1)
    findPathDifferent(mock_state, sum)
    setDefaultData(state,mock_state)
  }
  if(state[zero_row+1][zero_col]) {
    let temp = mock_state[zero_row][zero_col], sum = 0
    mock_state[zero_row][zero_col] = mock_state[zero_row+1][zero_col]
    mock_state[zero_row+1][zero_col] = temp
    for(let i = 0;i<9;i++) {
      for(let j=0;j<3;j++) {
        for(let k = 0;k<3;k++) {
          if(mock_state[j][k] === i) {
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
  }
  if(state[zero_row-1][zero_col]) {
    
  }
  if(state[zero_row][zero_col-1]) {
    
  }
}

findPuzzle(initialState, 0)

console.log(h)