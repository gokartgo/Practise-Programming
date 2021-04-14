// examaple 4 (n) | 3 (m)
// * * * + *
// * * + * *
// * * + * + *
// * + * + * + *

function count_way_partition(n, m) {
    if (n === 0) {
        return 1
    }
    if (n < 0 || m === 0) {
        return 0
    }
    return count_way_partition(n, m - 1) + count_way_partition(n - m, m)
}

console.log(count_way_partition(26, 26))
