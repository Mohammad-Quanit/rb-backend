require("dotenv").config();
const axios = require("axios");


const axiosInstance = axios.create({
  baseURL: process.env.JS_BASE_URL,
  // timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

module.exports = axiosInstance;