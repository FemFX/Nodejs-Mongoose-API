const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const listSchema = new Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
})
const List = mongoose.model('List', listSchema);
module.exports = List;