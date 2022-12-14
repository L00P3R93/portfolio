const router = require('express').Router()
const controllers = require('../../controllers')

module.exports = (() => {
    // POST operation for `/mail/contact` route
    router.route('/').post(controllers.mailTransport.smtp.submitContact)

    return router
})()