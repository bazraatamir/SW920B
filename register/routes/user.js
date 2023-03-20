const express = require('express');
const router = express.Router();


const {createUser,login} = require('../controllers/index')
// const {getUsers,createUser,editUser,deletedUser} = require('../controllers');

router.route('/').post(createUser);
router.route('/login').post(login)

module.exports = router

//MVC = model view controller