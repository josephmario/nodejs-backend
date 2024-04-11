const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProjectSchema = new Schema({
    project_name: {
        type: String
    },
    description:{
        type: String
    },
    
},{timestamps: true})

const Project = mongoose.model('Project', ProjectSchema)
module.exports = Project