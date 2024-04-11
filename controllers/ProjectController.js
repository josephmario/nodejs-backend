const Project = require('../models/Project')

exports.registerProject = async (req, res) => {
    try {
        const { project_name, description } = req.body;
        const project = new Project({ project_name, description });
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.viewProject = async (req, res) => {
    try{
        Project.find()
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

exports.detailsProject = async (req, res) => {
    try{
        const { projectID } = req.body  
        Project.findById(projectID)
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

exports.updateProject = async (req, res) => {
    try{
        const { projectID, project_name, description } = req.body  
        const updateData = {
            project_name: project_name, description: description
        }
        Project.findByIdAndUpdate(projectID, {$set: updateData})
        // Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

