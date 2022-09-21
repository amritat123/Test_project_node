const { schema , model, Schema } = require('mongoose');

const modelSchema = new Schema ({
    catagoryId : {
        type : Schema.Types.ObjectId,
        ref : 'catagory'
    },
    title: String,
    slug : {
        type : String,
        unique: true
    },
    status : {
        type : Boolean,
        default : true

    }

}, { timestamps: true });

const  subCatagoryModel = model('subCatagory', modelSchema);
module.exports = subCatagoryModel;
