const express = require('express');

const navbarService = require('../services').NavbarService();
const callService = require('../services').CallService();

const router = express.Router();

router.get('/', async (req, res, next) => {
  const vm = {
    nav: navbarService.getData(req),
    call: await callService.getCall(req)
  };
  res.render('call', vm);
});

module.exports = router;