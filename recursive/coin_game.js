function is_player_first_winner(coin) {
  if(coin === 1 || coin === 2 || coin === 4) {
    return true
  }
  if(coin === 3 || coin <= 0) {
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

// for(let i=1;i<=15;i++) {
//   console.log(is_player_first_winner(i, true ,false))
// }

function coin_game(coin) {
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
  // actually we can use mod 3 for find winner but i try to use all recursive
  const one = is_player_first_winner(coin - 1)
  const two = is_player_first_winner(coin - 2)
  const four = is_player_first_winner(coin - 4)

  if(one && two && four) {
    return coin_game(coin - 1) +
    coin_game(coin - 2) +
    coin_game(coin - 4)
  }
  if(!one) {
    sum += coin_game(coin - 1)
  }
  if(!two) {
    sum += coin_game(coin - 2)
  }
  if(!four) {
    sum += coin_game(coin - 4)
  }

  return sum
}

console.log(coin_game(10, 0))