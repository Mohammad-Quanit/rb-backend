const axiosInstance = require('../../../config/axios');
const { generateOTP } = require('../../OTP/controller');

async function sendMoneyToBank(req, res, next) {
  const randonTraceId = (
    '000000' + Math.floor(Math.random() * 1000000 + 1)
  ).slice(-6);

  const moneyTransferPayload = {
    HRAToWalletRequest: {
      processingCode: 'HRAToWallet',
      merchantType: '0088',
      traceNo: randonTraceId,
      companyName: 'NOVA',
      dateTime: '20210105201527',
      mobileNo: req.body.phoneNo,
      channelId: 'NOVA',
      terminalId: 'NOVA', 
      amount: req.body.amount,
      otpPin:
        'WjbGEHEJ5IrqOiH3z313KaO3iiHvEa4l5uNPPUoN9jOBPLGh0NxQ/TZA7Lnaw+9Uz+2ZI5QtCRyjak4kzZ+BG5O4ddYNJeKmoTCZI9+jghlr/Vu1HO5qtB2/Xm+OIAgRyPhgItGn7BpW9POdJZpdXrR/EiE1bn4jklsDPYNrIoEgmDsBFvv8wFl7JDyPEFFXuVIKJMUK3JWUbCKCkXo9yfZ3yLOJGcchARVE5XoSuwnY+Bq56t4AgPVHblLdr5Typw0CQUOUG3HXny1xyY+S8zplHM4hNuAGfGcgiGd6eCQpk7srkzeQ6wgpTSrNuV7LIgy+uEgWVu6l/mFL0lQWcA==',
      pinType: '03',
      reserved1: '',
      reserved2: '',
    },
  };

  try {
    const responseOTP = await await axiosInstance.post(
      '/hratowalletinquiry-blb2',
      moneyTransferPayload,
      { headers: { Authorization: `Bearer ${'EY59WGzboQgXiFnXTww0IW8lafdG'}` } }
    );

    const response = await axiosInstance.post(
      '/hratowallet-blb2',
      moneyTransferPayload,
      { headers: { Authorization: `Bearer ${'EY59WGzboQgXiFnXTww0IW8lafdG'}` } }
    );
    

    console.log(responseOTP.data, response.data)
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

module.exports = {
  sendMoneyToBank,
};
