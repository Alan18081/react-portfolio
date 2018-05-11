const path = require('path');

module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  staticPath: path.join(__dirname,'../client/public/uploads'),
  email: process.env.EMAIL
};