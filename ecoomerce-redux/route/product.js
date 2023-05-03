const express = require('express');
const router = express.Router();
const {getProduct,createProduct} = require('../controller/prodactController')

router.route('/').get(getProduct).post(createProduct);


module.exports = router