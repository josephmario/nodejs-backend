const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = new User({username, password});
        await user.save();
        res.status(201).send({ user })
    } catch (error){
        res.status(400).send(error)
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).send({error: 'Login Failed! Check authentication credentials'})
        }
        const token = jwt.sign({ _id: user._id }, 'secretkey', {expiresIn: '2h'});
        res.status(200).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
}