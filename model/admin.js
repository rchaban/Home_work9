var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schemaAdmin = Schema({
    admniname: {type: String, default: "Admin"},
    password: {type: String, default: 'secret'},
    permission: Boolean

}, {collection: 'Admin'});


mongoose.schemas.Admin = schemaAdmin;