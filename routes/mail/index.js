const router = require('express').Router()
const mailRoutes = require('../../controllers')

module.exports = (() => {
    router.route('/').post(controllers.queryManager.messages.create)

    return router
})()