const router = require('express').Router()
const controllers = require('../../controllers')

module.exports = (() => {
    router.route('/').post(controllers.queryManager.messages.create)

    return router
})()