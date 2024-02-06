module.exports = function (req, res, next) {
    let user = 'admin'
    if (user == 'admin') {
        console.log('segui adelante');
        next()
    } else {
        res.redirect('/')
        console.log('no podes entrar');

    }
}