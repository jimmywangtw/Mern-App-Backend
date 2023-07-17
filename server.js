require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')

// express app
const app = express()
const port = process.env.PORT || 8000

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(port, () => {
            console.log('connected to db & listening on port ' + process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })


