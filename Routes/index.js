const AppRoutes = require("express")();
const authRoute = require("./auth.route");
const otpRoute = require("./otp.route");


AppRoutes.use("/v1/auth/", authRoute);
AppRoutes.use("/v1/otp/", otpRoute);


module.exports = AppRoutes;
