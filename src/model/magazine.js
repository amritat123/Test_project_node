const { Schema , model } = require('mongoose');

const modelSchema = new Schema ({
    fileId: {
        type: Schema.Types.ObjectId,
        ref: 'file',
    },
    year: Number,
    month:Number,
    status : {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


const magazineModel = model('magazine', modelSchema);
module.exports = magazineModel;
