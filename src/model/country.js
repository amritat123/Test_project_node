const { Schema, model } = require('mongoose');

const modelSchema = new Schema ({
    name: String,
    code: {
        type: String,
        unique: true
    },
}, { timestamps: true});

const countryModel = model('country', modelSchema);
module.exports = countryModel;