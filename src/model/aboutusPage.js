const { Schema , model } = require('mongoose');

const modelSchema  = new Schema ({
    title: String,
    slug:String,
    description: String,
    defaultImg: String,
    services:{
        title: String,
        contents:[{
            logoImg:String,
            content:String
        }]
    },
    team: {
        title: String,
        persons:[{
            name: String,
            profileImg: String,
            description: String,
            fbUrl: String,
            twitterUrl: String,
            linkedinUrl: String,
            youtubeUrl: String,
        }]
    },
    status:{
        type: Boolean,
        default:true
    }
},{timestamp: true });

const aboutPageModel = model('aboutus_page', modelSchema);
module.exports = aboutPageModel;
