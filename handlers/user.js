var mongoose = require('mongoose');
var schemaUser = mongoose.schemas.User;
var schemaPost = mongoose.schemas.Post;
var _User = mongoose.model('user', schemaUser);
var _Post = mongoose.model('post', schemaPost);

var users = function() {
    this.create = function (req, res, next) {
        var body = req.body;
        var user = new _User(body);
        user._id = req.params.id;
        user.save(function(err, user){
            if (err){
                return next(err);
            }
            res.status(200).send(user);
        })
    };

    this.remove = function (req, res, next) {
        var id = req.params.id;
        _User.findByIdAndRemove(id, function (err, response) {
            if (err) {
                return next(err);
            }

            res.status(200).send(response);
        });
    }

    this.getIP = function (req, res, next) {
        console.log("LLLLLLLLLLLL");
        res.status(200).send(req.ip);
    };
}


module.exports = users;

