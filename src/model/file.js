const { Schema , model } = require('mongoose');

const modelSchema = new Schema ({
    name: {
        type: String,
        unique: true
    },
} ,{ timestamps: false });

const fileModel = model('file', modelSchema);
module.exports= fileModel;