// recursive with memorize
const memorize = []
let aa = ''
let bb = ''
const setup_memorize = () => {
  for(let i = 0;i<3001;i++) {
    memorize[i] = []
  }
}
for(let i = 0;i<3000;i++) {
  aa = aa + "a"
  bb = bb + "b"
}
let count = 0
// const lgc = (a, b, a_i, b_i) => {
//   count++
//   if(!a[a_i] || !b[b_i]) {
//     return 0
//   } else if(a[a_i] === b[b_i]) {
//     return 1 + lgc(a, b, a_i + 1, b_i + 1)
//   } else {
//     return Math.max(lgc(a, b, a_i + 1, b_i),lgc(a, b, a_i, b_i + 1))
//   }
// }

const lgc = (a, b, a_i, b_i) => {
  count++
  if(!a[a_i] || !b[b_i]) {
    return 0
  } else if(a[a_i] === b[b_i]) {
    if(memorize[a_i][b_i] === undefined) {
      memorize[a_i][b_i] = 1 + lgc(a, b, a_i + 1, b_i + 1)
    }

    return memorize[a_i][b_i]
  } else {
    if(memorize[a_i][b_i] === undefined) {
      memorize[a_i + 1][b_i] = lgc(a, b, a_i + 1, b_i)
    }
    if(memorize[a_i][b_i] === undefined) {
      memorize[a_i][b_i + 1] = lgc(a, b, a_i, b_i + 1)
    }
    return Math.max(memorize[a_i + 1][b_i],memorize[a_i][b_i + 1])
  }
}

setup_memorize()
console.log(lgc(aa, bb, 0,0))
console.log(count)
