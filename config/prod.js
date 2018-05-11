const path = require('path');

module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  staticPath: path.join(__dirname,'../client/public/uploads'),
  email: process.env.EMAIL,
  cloudName: 'dkvyhy1hr',
  cloudKey: '785611567955674',
  cloudSecret: '0oc_djHhKTlL2mZZmeG8JyMS8v8'
};