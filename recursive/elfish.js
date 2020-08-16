function elfish(check, letter) {
    if (check === '') {
        return true
    }
    if (letter.includes(check[0])) {
        return elfish(check.slice(1), letter)
    } else {
        return false
    }

}

console.log(elfish('elf', 'hello world'))