module.exports = function(app){
    var bodyParser = require('body-parser');

    var userRouter = require('./user');
    var adminRouter = require('./admin');

    app.use(bodyParser.json());
    app.get('/', function(req, res, next){
        console.log('OK');
        res.status(200).send('Home work');
    })

    app.use('/user', userRouter);
    app.use('/admin', adminRouter);
}