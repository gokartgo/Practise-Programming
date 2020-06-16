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

let h = 0, x, y, p, q
for(let i = 0;i<9;i++) {
  for(let j=0;j<3;j++) {
    for(let k = 0;k<3;k++) {
      if(initialState[j][k] === i || initialState[j][k] === '_') {
        x = j
        y = k
      }
      if(finalState[j][k] === i || finalState[j][k] === '_') {
        p = j
        q = k
      }
    }
  }
  console.log(x,y,p,q)
  h += Math.abs(x - p) + Math.abs(y - q)
}

console.log(h)