const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Task = require('./modal')
const cors = require('cors')
app.use(express.json())
app.use(cors())

let MONGO_DB = "mongodb+srv://okasha:truckdriver12345@taskmanager.who8n.mongodb.net/storedXSS?retryWrites=true&w=majority"


app.get('/api', async (req, res) => {
    try {
        const task = await Task.find()
        res.status(200).json({ status: true, data: task });
    }
    catch (err) {
        res.status(404).json({ status: false, error: err })
    }
})


app.post('/api', async (req, res) => {
    try {
        console.log(req.body)
        const task = await Task.create(req.body)
        res.status(200).json({ status: true, data: task });
    }
    catch (err) {
        res.status(404).json({ status: false, error: err })
    }
})

let PORT = 3123


mongoose.connect(MONGO_DB).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    })
}).catch((err) => {
    console.log("err ha bhai ", err)
})
