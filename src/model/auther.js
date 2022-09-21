const { schema , model, Schema } = require('mongoose');

const modelSchema = new Schema ({
    profileImg: String,
    name : String,
    about: String,

    status: {
        type : Boolean ,
        default: true,
    }
}, { timestamps:true });

const authorModel = model('author' , modelSchema);
module.exports = authorModel;

