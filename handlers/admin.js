var mongoose = require('mongoose');
var schemaUser = mongoose.schemas.User;
var schemaPost = mongoose.schemas.Post;
var schemaAdmin = mongoose.schemas.Admin;
var _User = mongoose.model('user', schemaUser);
var _Post = mongoose.model('post', schemaPost);
var _Admin = mongoose.model('admin', schemaAdmin);

var admins = function() {
    this.create = function (req, res, next) {
        var body = req.body;
        var admin = new _Admin(body);
        admin.save(function(err, user){
            if (err){
                return next(err);
            }
            res.status(200).send(user);
        })
    };
}


module.exports = admins;