const mongoose = require('mongoose');

const trendingLoccationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    images:[{
        type:String,
        required:true
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('trendingLocation',trendingLoccationSchema);
