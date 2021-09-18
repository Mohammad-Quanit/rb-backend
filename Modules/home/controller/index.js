const router = require('express').Router();

let introHtml = `
  <h1>Welcome to Paybox API</h1>
`;

router.route("/").get((req, res) => res.send(introHtml));

module.exports = router;