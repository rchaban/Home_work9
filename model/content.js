var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schemaPost = Schema({
    text: String,
    creator: {type: String, ref: 'user'}
}, {collection: 'Post'});

mongoose.schemas.Post = schemaPost;
