const router = require('express').Router();

const {index} = require('../controllers/mainController')

router
.get('/', index)
.get('/admin', accessAdmin, admin)
.get('/not-entry', notEntry)

module.exports = router