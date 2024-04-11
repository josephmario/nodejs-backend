const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ActivitySchema = new Schema({
    activity_name: {
        type: String
    },
    description:{
        type: String
    },
    
},{timestamps: true})

const Activity = mongoose.model('Activity', ActivitySchema)
module.exports = Activity