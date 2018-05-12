const {redirectDomain} = require('../../../config/keys');

module.exports = (email,token) => `
  <html>
    <head>
      <style>
        body {
          font-family: Arial,sans-serif;
        }
        .wrapper {
          border: 1px solid #cccccc;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
        }
        h1 {
          text-align: center;
          font-size: 21px;
          color: #323232;
          margin-bottom: 20px;
        }
        .btn {
          background: none;
          border: 1px solid #FF1041;
          padding: 8px 20px;
          min-width: 220px;
          color: #FF1041;
          font-size: 15px;
          transition: all .5s ease;
          border-radius: 70px;
          cursor: pointer;
          text-decoration: none;
        }
        .btn:hover {
            background-color: #FF1041;
            color: #ffffff;
        }
        p {
          margin-bottom: 20px;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <i>Portfolio</i> 
        <h1>Reset password for ${email}</h1>
        <p>Click the button and create new password</p>
        <a class="btn" href="${redirectDomain}/api/resetPasswordSuccess/${token}">Reset password</a>
      </div>
    </body>
  </html>
`;