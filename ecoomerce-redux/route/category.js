const express = require('express');
const router = express.Router();
const {getCategories,getCategory,createCategory} = require('../controller/cotegoryCotroller')

router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategory)

module.exports = router