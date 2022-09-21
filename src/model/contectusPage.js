const { Schema , model } = require('mongoose');

const modelSchema  = new Schema ({
    contects : [{
        title : String ,
        description : String,
        logoImg: String,
    }],
}, { timestamps : true });

const contectusPageModel = model ('contectusPage', modelSchema);
module.exports = contectusPageModel;