const axiosInstance = require('../../../config/axios');
const crypto = require('crypto');
// const { encryptStringWithRsaPublicKey } = require('../../../middlewares/crypto');

async function generateOTP(req, res, next) {
  const randonTraceId = (
    '000000' + Math.floor(Math.random() * 1000000 + 1)
  ).slice(-6);
  console.log(randonTraceId);
  const otpGeneratePayload = {
    GenerateOtpRequest: {
      MerchantType: '0088',
      TraceNo: randonTraceId,
      CNIC: req.body.cnic,
      MobileNo: req.body.phoneNo,
      DateTime: '20210105201527',
      CompanyName: 'NOVA',
      Reserved1: '02',
      TransactionType: '01',
    },
  };
  try {
    const response = await axiosInstance.post(
      '/generateotp-blb',
      otpGeneratePayload,
      { headers: { Authorization: `Bearer ${'LYwxXX6p4eKVJA67jJTwsHavq4KY'}` } }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

async function verifyOTP(req, res, next) {
  const randonTraceId = (
    '000000' + Math.floor(Math.random() * 1000000 + 1)
  ).slice(-6);
  const otpVerifyPayload = {
    VerifyOtpRequest: {
      MerchantType: '0088',
      TraceNo: randonTraceId,
      CompanyName: 'NOVA',
      DateTime: '20210105201527',
      CNIC: req.body.cnic,
      MobileNo: req.body.phoneNo,
      OtpPin: req.body.otp,
    },
  };
  try {
    // const response = await axiosInstance.post('/verifyotp-blb', otpVerifyPayload, { headers: {"Authorization" : `Bearer ${'WjixcPSyDN5fKNigqp75KcYW4kd1'}`} });
    // console.log(response);
    res.json({
      VerifyOtpResponse: {
        MerchantType: '0088',
        TraceNo: '955843',
        CompanyName: 'NOVA',
        DateTime: '20210105201527',
        ResponseCode: '98',
        ResponseDetails: ['successfull'],
      },
    });
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

module.exports = {
  generateOTP,
  verifyOTP,
};
