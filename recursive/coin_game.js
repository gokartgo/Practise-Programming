function is_player_first_winner(coin) {
  if(coin === 0 || coin === 1 || coin === 2 || coin === 4) {
    return true
  }
  if(coin === 3) {
    return false
  }
  
  if(
    is_player_first_winner(coin - 1) &&
    is_player_first_winner(coin - 2) &&
    is_player_first_winner(coin - 4)
  ) {
    return false
  } else {
    return true
  }
}

// console.log(is_player_first_winner(8))

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

  const one = is_player_first_winner(coin - 1)
  const two = is_player_first_winner(coin - 2)
  const four = is_player_first_winner(coin - 4)

  if(!one && !two && !four) {
    return coin_game(coin - 1, level + 1) +
    coin_game(coin - 2, level + 1) +
    coin_game(coin - 4, level + 1)
  }
  if(one) {
    sum += coin_game(coin - 1, level + 1)
  }
  if(two) {
    sum += coin_game(coin - 2, level + 1)
  }
  if(four) {
    sum += coin_game(coin - 4, level + 1)
  }

  return sum
}

console.log(coin_game(10, 0))