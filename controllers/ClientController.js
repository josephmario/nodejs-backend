const Client = require('../models/Client')

exports.registerClient = async (req, res) => {
    try {
        const { client_name, description } = req.body;
        const client = new Client({ client_name, description });
        await client.save();
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.viewClient = async (req, res) => {
    try{
        Client.find()
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

exports.detailsClient = async (req, res) => {
    try{
        const { clientID } = req.body  
        Client.findById(clientID)
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

exports.updateClient = async (req, res) => {
    try{
        const { clientID, client_name, description } = req.body  
        const updateData = {
            client_name: client_name, description: description
        }
        Client.findByIdAndUpdate(clientID, {$set: updateData})
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

