module.exports = ( function(){
    var express = require('express');
    var AdminHandlers = require('../handlers/admin');
    var UserHandlers = require('../handlers/user');

    var adminRouter = express.Router();
    var adminHandler = new AdminHandlers();

    adminRouter.get('/', adminHandler.create);

    return adminRouter;
}());
