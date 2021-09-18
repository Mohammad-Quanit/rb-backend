const axiosInstance = require('../../../config/axios');

async function getAccessToken(req, res, next) {
  try {
    const response = await axiosInstance.get('/oauth-blb?grant_type=client_credentials', { headers: {"Authorization" : `Basic ${process.env.BASIC_TOKEN}`} });
    res.json(response.data)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = getAccessToken;