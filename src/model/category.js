const { Schema , model }= require('mongoose');

const modelSchema = new Schema({
    title: String,
    slug : {
        type: String,
        unique: true
    },
    status : {
        type : String,
        default: true
    },
    forfront : {
        type : Boolean,
        default: true
    }
}, {timestamps: true });

const categoryModel = model ('category', modelSchema);
module.exports = categoryModel;
 