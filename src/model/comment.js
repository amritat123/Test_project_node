const { Schema , model } = require ('mongoose');

const modelSchema = new Schema ({
    newId : {
        type : Schema.Types.ObjectId,
        ref : 'news',
    },
    name : String,
    email: String,
    message : String,

    status: {
        type: Boolean,
        default: true
    }
} , { timestamps : true });


const commentModel = model('comment' , modelSchema);
module.exports = commentModel;