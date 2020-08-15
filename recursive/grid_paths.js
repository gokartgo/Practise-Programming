function grid_paths(m, n) {
    if (m === 1 || n === 1) {
        return 1
    }
    return grid_paths(m - 1, n) + grid_paths(m, n - 1)
}

console.log(grid_paths(3, 4))