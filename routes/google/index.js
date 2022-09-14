const router = require('express').Router()
const googleRoutes = require('./recaptcha-api')

module.exports = (() => {
    //Form Mail Routes
    router.use('/verify', googleRoutes)

    return router
})()