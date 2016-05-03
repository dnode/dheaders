'use strict';

module.exports = (req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Download-Options': 'noopen',
    'X-Frame-Options': 'DENY',
    'X-UA-Compatible': 'IE=edge,chrome=1',
    'X-XSS-Protection': '1; mode=block'
  });
  next();
};
