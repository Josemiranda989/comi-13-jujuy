// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

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


/*** GET ALL PRODUCTS ***/
router.get('/', productsController.list);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.createForm);
router.post('/create', upload.single('image'), productsController.processCreate);


/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsController.editForm);
router.put('/edit/:id', upload.single('image'), productsController.processEdit);


/*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productsController.delete);


module.exports = router;
