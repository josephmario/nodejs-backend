const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const employeeRoutes = require('./routes/employee');
app.use('/api/employees', employeeRoutes);

const clientRoutes = require('./routes/client');
app.use('/api/client', clientRoutes);

const projectRoutes = require('./routes/project');
app.use('/api/project', projectRoutes);

const activityRoutes = require('./routes/activity');
app.use('/api/activity', activityRoutes);

const timeSheetRoutes = require('./routes/timesheet');
app.use('/api/timesheet', timeSheetRoutes);