module.exports = (req, res, next) => {

    req.session.count = "req.session.count * 2"

    next()
}