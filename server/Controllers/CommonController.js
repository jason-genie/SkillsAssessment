
exports.get_random_number = (req, res, next) => {
    const random_number = Math.round(Math.random() * 9 + 1)
    res.send(random_number.toString())
}
exports.get_rps_opponents_move = (req, res, next) => {
    const random_number = Math.round(Math.random() * 2 + 0)
    res.send(random_number.toString())
}