const router = require('express').Router();

const {index} = require('../controllers/mainController')

/* user */
router
    .get('/register')