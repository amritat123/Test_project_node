const { Schema , model } = require('mongoose');

const modelSchema = new Schema({
    newsId :{
        type : Schema.Types.ObhjectId,
        ref: 'news',
        unique:true
    },
    views: [{
        ipAddress: {
            type: String,

        },
        date: {
            type : Date,
            default: Date.now()
        }
    }],
},{ timestamps:false });

const newsHitModel = model('news_hit' , modelSchema);
module.exports = newsHitModel;