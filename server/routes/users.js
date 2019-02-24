var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next)=> {
  let users=["parliament","marlboro","mevius","camel","winston"];
  res.send(users);
});

module.exports = router;
