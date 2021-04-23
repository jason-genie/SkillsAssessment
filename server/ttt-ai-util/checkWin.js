const winPatterns = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
]
module.exports = {
  checkWin: function(cells) {
    let isTie = true
  
    for (let pattern of winPatterns) {
      const [[i0, j0], [i1, j1], [i2, j2]] = pattern
      let c1 = cells[i0][j0],
        c2 = cells[i1][j1],
        c3 = cells[i2][j2]
  
      if (c1 && c2 && c3) {
        if (c1 === c2 && c2 === c3) return c1
      } else {
        isTie = false
      }
    }
  
    return isTie ? 'tie' : null
  }
}
