const { Schema , model } = require('mongoose');

const modelSchema = new Schema ({
    categoryId : {
        type : Schema.Types.ObjectId,
        ref: 'category'
    },
    authorId : {
        type: Schema.Types.ObjectId,
        ref: 'author'
    },
    image: String,
    thumbNail:String,

    title: {
        type : String
    },
    slug: {
        type: String
    },
    content: {
        type: String,
        unique:false
    },
    type: {
        type: String,
        enum: ['inTheNews', 'recentNews', 'ofCategory'],
        default : 'ofCatagory'
    },
    date : {
        type: Date,
        default:Date.now()
    },
    viewCount: {
        type: Number,
        default:0
    },
    status : {
        type: Boolean,
        default: true
    }
}, { timestamps: true});

const newsModel = model('news', modelSchema);
module.exports = newsModel;