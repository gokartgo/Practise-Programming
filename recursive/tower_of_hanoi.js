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