const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/products')
    },
    filename: (req, file, cb) => {
        // let fileName = `${Date.now()}_img${(file.originalname)}`
        let fileName = `img_${Date.now()}${path.extname(file.originalname)}`
        cb(null, fileName)
    }
})

const upload = multer({ storage })

module.exports = upload