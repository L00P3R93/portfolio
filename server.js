require ('dotenv').config()

// Node Dependencies
const express = require('express')
const path = require('path')
const routes = require('./routes')
const logger = require('morgan')
const mongoose = require('mongoose')

// HTTP port & MongoDB URI
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dev_portfolio_db'

//Express app
const app = express()

//Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Long server activity
app.use(logger('dev'))

//Serve static assets on production server.
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client', 'build')))
}

// App Routes
app.use(routes)

// Connect to database.
mongoose.connection
    .on('error', console.error.bind(
        console, 'An error was encountered connecting to the database.'))
    .on('connected', () => {
        console.log('Successfully connected to the database.')
    })

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Create fail-safe route handler.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

// Launch server and listen for requests.
app.listen(PORT, () => {
    console.log(`🌎 ==> API server running on port ${PORT} ...`)
})