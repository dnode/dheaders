'use strict';

let headers = [
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Download-Options', 'noopen'],
  ['X-Frame-Options', 'DENY'],
  ['X-UA-Compatible', 'IE=edge,chrome=1'],
  ['X-XSS-Protection', '1; mode=block']
];
module.exports = (req, res, next) => {
  for (let header of headers) {
    res.setHeader(header[0], header[1]);
  }
  next();
};
