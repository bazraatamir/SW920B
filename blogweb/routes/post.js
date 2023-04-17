const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/protect')
const {createPost,getPosts,getPost,deletePost} = require('../controllers/post')

router.route('/').get(getPosts)
router.route('/:id').get(getPost)
router.route('/').post( protect, createPost);
router.route('/:id').delete(deletePost)

module.exports = router