const { Schema, model } = require('mongoose');

const modelSchema = new Schema ({
    image: String,
    type: {
        type:String,
        enum: ['header' , 'top', 'right' , 'aricleFooter' ],
    },
    link : String ,
    openIn : {
        type: String,
        enum: ['sameTab', 'newTab'],
        default: 'newTab'
    },
    status: {
        type: Boolean,
        default : true
    }
} , {timestamp : true});

const adsModel = model('ads' , modelSchema);
module.exports = adsModel;