require('dotenv').config()

// this causes app to require express package
const express = require('express')
const patientRoutes = require('./routes/patients')
const mongoose = require('mongoose')
// This starts up the express app, hence why it is a funtion.
const app = express()

// this function acts as middleware that logs  request as they come in.
// middleware refers to software that fires inetweeb requests.
// the next function is required in order to ensure it moves on to the enxt middleware.

//MIDDLEWARE
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// routess
// app.get('/', (req, res) =>{
//    res.json({mssg: 'Welcome to the app'})
// })

// this attaches all the routes from the patients.js file to the app
app.use('/api/patients', patientRoutes)

//connects to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    // This listens for requests. THis is effectively how you set what port you host the app on locally.
// we use the PORT variable from our dotenv file to hide environment variables
app.listen(process.env.PORT, () => {
    console.log('connected to db, and listening on port', process.env.PORT)
})
})

.catch((error) => {
    console.log(error)
})

