module.exports = ({name,email,message}) => {
  return `
    <html>
  <head>
    <style>
      body {
        font-family: Arial,sans-serif;
        color: #323232;
        font-size: 16px !important;
      }
      h1 {
        text-align: center;
        margin-bottom: 20px;
      }
      .name {
        color: #701FDB;
        margin-bottom: 15px;
      }
      .message {
        border-radius: 4px;
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
        border: 1px solid #a8a8a8
      }
      .email {
        display: block;
        margin-bottom: 15px;
      }
    </style>
  </head>
  <body>
    <h1>Portfolio</h1>
    <div class="message">
      <h2 class="name">${name}</h2>
      <i class="email">${email}</i>
      <div>${message}</div>
    </div>
  </body>
</html>
  `
};