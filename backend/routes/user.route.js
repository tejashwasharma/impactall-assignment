const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');

userRouter.get('/:id', userController.getById);

module.exports.userRouter = userRouter;