function power_of_sum(number, base, power) {
    if (Math.pow(base, power) > number) {
        return 0
    }
    if (Math.pow(base, power) === number) {
        return 1
    }
    return power_of_sum(number, base + 1, power) + power_of_sum(number - Math.pow(base, power), base + 1, power)
}

console.log(power_of_sum(100, 1, 2))