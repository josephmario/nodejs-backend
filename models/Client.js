const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ClientSchema = new Schema({
    client_name: {
        type: String
    },
    description:{
        type: String
    },
    
},{timestamps: true})

const Client = mongoose.model('Client', ClientSchema)
module.exports = Client