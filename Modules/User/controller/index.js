const axiosInstance = require('../../../config/axios');

async function userRegister(req, res, next) {
  const randonTraceId = (
    '000000' + Math.floor(Math.random() * 1000000 + 1)
  ).slice(-6);
  const accountOpeningPayload = {
    AccountOpeningRequest: {
      MerchantType: '0088',
      TraceNo: randonTraceId,
      CompanyName: req.body.companyName,
      DateTime: '20210105201527',
      CNIC: req.body.cnic,
      CnicIssuanceDate: '20140624',
      MobileNo: req.body.phoneNo,
      MobileNetwork: 'UFONE',
      EmailId: req.body.email,
    },
  };
  try {
    const response = await axiosInstance.post(
      '/accountopening-blb',
      accountOpeningPayload,
      { headers: { Authorization: `Bearer ${'uvi8ACxFmDzDEX38dbnSPdw3pKfz'}` } }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

async function userLogin(req, res, next) {}

module.exports = {
  userRegister,
  userLogin,
};
