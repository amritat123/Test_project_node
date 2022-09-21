const { Schema , model } = require('mongoose');

const modelSchema = new Schema ({
    name: String,
    email: String,
    subject: String,
    message: String,

    status : {
        type : Boolean,
        default: true 
    }

}, { timestamps: true });

const contectusModel = model('contectus', modelSchema);
module.exports = contectusModel;