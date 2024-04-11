const TimeSheet = require('../models/TimeSheet')

exports.registerTimeSheet = async (req, res) => {
    try {
        const { client_id, project_id, activity_id, date, hours } = req.body;
        const timeSheet = new TimeSheet({ client_id, project_id, activity_id, date, hours });
        await timeSheet.save();
        res.status(201).json(timeSheet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
