const router = require('express').Router();
const { generateOTP, verifyOTP } = require('../Modules/OTP/controller')

router.post('/generateotp', generateOTP)

router.post('/verifyotp', verifyOTP)


module.exports = router; 