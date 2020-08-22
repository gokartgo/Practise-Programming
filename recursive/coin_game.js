function coin_game(coin, player_turn, player_wait) {
  // console.log('aaa',coin)
  if(coin === 3) {
    // console.log('3')
    return false
  }
  if(coin < 0 || coin === 1 || coin === 2 || coin === 4) {
    return true
  }
  if(
    coin_game(coin - 1, player_wait, player_turn) &&
    coin_game(coin - 2, player_wait, player_turn) &&
    coin_game(coin - 4, player_wait, player_turn)
  ) {
    return false
  } else {
    return true
  }
}

console.log(coin_game(8, 'a', 'b'))