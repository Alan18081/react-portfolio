const express = require('express');
const mongoose = require('mongoose');
const cookiesSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const path = require('path');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookiesSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'client','build')));
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'client','build','main.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});
