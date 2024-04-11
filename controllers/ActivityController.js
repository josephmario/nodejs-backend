const Activity = require('../models/Activity')

exports.registerActivity = async (req, res) => {
    try {
        const { activity_name, description } = req.body;
        const activity = new Activity({ activity_name, description });
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.viewActivity = async (req, res) => {
    try{
        Activity.find()
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

exports.detailsActivity = async (req, res) => {
    try{
        const { activityID } = req.body  
        Activity.findById(activityID)
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

exports.updateActivity = async (req, res) => {
    try{
        const { activityID, activity_name, description } = req.body  
        const updateData = {
            activity_name: activity_name, description: description
        }
        Activity.findByIdAndUpdate(activityID, {$set: updateData})
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

