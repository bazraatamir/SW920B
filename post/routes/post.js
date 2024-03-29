const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/protect')
const {createPost,getPosts} = require('../controllers/post')

router.route('/').get(getPosts)
router.route('/').post( protect, createPost);

module.exports = router