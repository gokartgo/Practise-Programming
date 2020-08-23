function coin_game(coin, level) {
  let sum = 0

  if (coin === 1 || coin === 2 || coin === 0) {
    return 1
  }
  if (coin === 3) {
    return 2
  }
  if (coin < 0) {
    return 0
  }

  const one = (coin - 1) % 3 === 0
  const two = (coin - 2) % 3 === 0
  const four = (coin - 4) % 3 === 0

  if(!one && !two && !four) {
    return coin_game1(coin - 1, level + 1) +
    coin_game1(coin - 2, level + 1) +
    coin_game1(coin - 4, level + 1)
  }
  if(one) {
    sum += coin_game1(coin - 1, level + 1)
  }
  if(two) {
    sum += coin_game1(coin - 2, level + 1)
  }
  if(four) {
    sum += coin_game1(coin - 4, level + 1)
  }

  return sum
}

console.log(coin_game1(30, 0))