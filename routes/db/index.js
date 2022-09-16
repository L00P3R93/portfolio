const router = require('express').Router()
const msgRoutes = require('./msg-api')
const projRoutes = require('./proj-api')

module.exports = (() => {
    //Database Routes
    router.use('/messages', msgRoutes)
    router.use('/projects', projRoutes)

    return router
})()