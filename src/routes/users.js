var express = require('express');
var router = express.Router();

const userController = require('../controllers/users');

router
  .get('/', userController.getData)
  .post('/', userController.postData)
  .patch('/:bookid', userController.updateData)
  .delete('/:bookid', userController.deleteData)

module.exports = router;