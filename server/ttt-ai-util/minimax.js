var tools = require('./checkWin')

let board = Array(3).fill(null).map(() => Array(3).fill(null))
let human = 'o', ai = 'x'
let scores = {
  [ai]: 10,
  [human]: -10,
  tie: 0,
}

module.exports = {  
  aiAssign: function( user) {
    let i, j
    board = Array(3).fill(null).map(() => Array(3).fill(null))
    human = user
    ai = user === 'x' ? 'o' : 'x'
    if (user === 'o') {
      i = ~~(Math.random() * 3)
      j = ~~(Math.random() * 3)
      board[i][j] = ai
    }
    scores = {
      [ai]: 10,
      [human]: -10,
      tie: 0,
    }
    return {i, j}
  },
  userMove: function( i, j ) {
    board[i][j] = human
  },
  play: function() {
    let bestScore = -Infinity
    let move = null

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board[i][j]) {
          board[i][j] = ai
          let score = minimax()
          board[i][j] = null
          if (score > bestScore) {
            bestScore = score
            move = { i, j }
          }
        }
      }
    }
    if (move !== null)
      board[move.i][move.j] = ai
    return move
  }
}

function minimax(isMax) {
  let winner = tools.checkWin(board)
  if (winner) {
    return scores[winner]
  }

  if (isMax) {
    let bestScore = -Infinity
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board[i][j]) {
          board[i][j] = ai
          let score = minimax(false)
          board[i][j] = null
          bestScore = Math.max(bestScore, score)
        }
      }
    }
    return bestScore
  } else {
    let bestScore = Infinity
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board[i][j]) {
          board[i][j] = human
          let score = minimax(true)
          board[i][j] = null
          bestScore = Math.min(bestScore, score)
        }
      }
    }
    return bestScore
  }
}