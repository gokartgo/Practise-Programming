// function tower_of_hanoi(s, a, d, level) {
//   if(level === 0) {
//     return
//   }
//   tower_of_hanoi(s, d, a, level - 1)
//   console.log(`${s} -> ${d}`)
//   tower_of_hanoi(a, s, d, level - 1)
// }

function tower_of_hanoi(n, source, auxiliary, dest) {
    if (n === 1) {
        console.log(source, '------>', dest)
        return
    }
    tower_of_hanoi(n - 1, source, dest, auxiliary)
    console.log(source, '------>', dest)
    tower_of_hanoi(n - 1, auxiliary, source, dest)
}

tower_of_hanoi(3, 'A', 'B', 'C')