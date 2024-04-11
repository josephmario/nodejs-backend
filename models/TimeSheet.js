const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TimeSheetSchema = new Schema({
    client_id: {
        type: String
    },
    project_id:{
        type: String
    },
    date:{
        type: Date, default: Date.now
    },
    hours: {
        type: Number, required: true, min: 0, max: 8
    },
    
},{timestamps: true})

const timeSheet = mongoose.model('TimeSheet', TimeSheetSchema)
module.exports = timeSheet