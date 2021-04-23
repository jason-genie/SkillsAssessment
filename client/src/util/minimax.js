import checkWin from './checkWin'

let scores, board, human, ai

function aiAssign(cells, user) {
  board = cells
  human = user
  ai = user === 'x' ? 'o' : 'x'
  scores = {
    [ai]: 10,
    [human]: -10,
    tie: 0,
  }
}

function play() {
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
  return move
}

function minimax(isMax) {
  let winner = checkWin(board)
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

export { play as default, aiAssign }
