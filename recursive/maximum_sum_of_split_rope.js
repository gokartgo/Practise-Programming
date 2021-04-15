function find_max(n) {
  if(n === 1) {
    return 1
  }
  if(n === 2 || n === 3) {
    return n
  }
  const n1 = parseInt(n / 2)
  const n2 = n % 2 !== 0 ? n1 + 1 : n1
  return find_max(n1) * find_max(n2)
}

find_max(30)

// const fix = 6
// let max = 0

// function find_max(n, sum, answer) {
//   if(sum > fix) {
//     return
//   }
//   if(answer > max) {
//     max = answer
//   }

//   for(let i = n; i >= 1; i--) {
//     find_max(i, sum + i, answer * i)
//   }
// }

// find_max(30, 0, 30, 1)
// console.log(max)

// 6 0 --> 0
// 5 1 --> 5
// 4 2 --> 8
// 4 1 1 --> 4
// 3 3 --> 9
// 3 2 1
// 3 1 1 1
// 2 2 2
// 2 2 1 1
// 2 1 1 1 1
