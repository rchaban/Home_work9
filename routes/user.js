module.exports = ( function(){
    var express = require('express');
    var UserHandlers = require('../handlers/user');

    var userRouter = express.Router();
    var userHandler = new UserHandlers();

    userRouter.get('/', userHandler.getIP);

    userRouter.post('/:id', userHandler.create);
    userRouter.delete('/:id', userHandler.remove);

    return userRouter;
})();