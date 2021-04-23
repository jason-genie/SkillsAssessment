var aiUtil = require('../ttt-ai-util/minimax')

exports.tttAiAssign = (req, res, next) => {
    res.send(aiUtil.aiAssign(req.query.mark))
}
exports.getTttAiMove = (req, res, next) => {
    aiUtil.userMove(req.query.i, req.query.j)
    res.send(aiUtil.play())
}