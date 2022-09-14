require('dotenv').config()

const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection
    .on('error', console.error.bind(console, 'An error was encountered connection to MONGODB Atlas.'))
    .once('connected', () => {
        console.log('Connection to MongoDB Atlas Opened!')
    })
    .close(() => {
        console.log('Connection to MongoDB Atlas closed.')
    })