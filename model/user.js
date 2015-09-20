var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schemaUser = Schema({
    _id: Number,
    username: {type: String, default: 'Test'},
    age: {type: Number},
    email: {type: String, unique: true},
    password: {type: String, unique: true},
    post: [{ type: String, ref: 'post'
    }]

}, {collection: 'User', version: false});


mongoose.schemas.User = schemaUser;