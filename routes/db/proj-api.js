const router = require('express').Router()
const controllers = require('../../controllers')

module.exports = (() => {
    router.route('/').get(controllers.queryManager.projects.findAll)

    return router
})()
