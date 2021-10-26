const express = require('express');

const navbarService = require('../services').NavbarService();

const router = express.Router();

router.get('/', function (req, res, next) {
  const vm = {
    nav: navbarService.getData(req)
  };
  res.render('agent', vm);
});

module.exports = router;