const router = require('express').Router();
const getAccessToken = require('../Modules/Auth/controller')

router.get('/getaccesstoken', getAccessToken)

module.exports = router; 