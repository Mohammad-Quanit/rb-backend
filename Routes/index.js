const AppRoutes = require("express")();
const getAccessToken = require("../Modules/Auth/controller");
const { generateOTP, verifyOTP } = require("../Modules/OTP/controller");
const { sendMoneyToBank } = require("../Modules/SendMoney/controller");
const { userRegister } = require("../Modules/User/controller");

AppRoutes.use("/v1/auth/getaccesstoken", getAccessToken);

AppRoutes.use("/v1/account/register", userRegister);

AppRoutes.use("/v1/otp/generateotp", generateOTP);
AppRoutes.use("/v1/otp/verifyotp", verifyOTP);

AppRoutes.use("/v1/transfer", sendMoneyToBank);


module.exports = AppRoutes;
