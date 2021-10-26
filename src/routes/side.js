const express = require('express');

const dealsService = require('../services').DealsService();

const router = express.Router();

router.get('/', function (req, res, next) {
  const vm = {
    deals: {
      destinations: dealsService.getBestDestinations(3),
      flights: dealsService.getFlightDeals(4)
    },
    layout: false
  };
  res.render('side', vm);
});

module.exports = router;