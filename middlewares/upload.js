const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file,cb) => {
        return cb(null, './public/images/products')
    },
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}_MLJL2_${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage
})

module.exports = upload