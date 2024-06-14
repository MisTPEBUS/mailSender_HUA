const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'capital-bus.com.tw',
  port: 25,  // SMTP port
  secure: false,  // true for 465, false for other ports
  auth: {
    user: 'sodu_service@capital-bus.com.tw',  // your email address
    pass: 'cPsS9620',  // your email password
  },
  tls: {
    rejectUnauthorized: false  // do not fail on invalid certs
  }
});

const mailOptions = {
  from: 'sodu_service@capital-bus.com.tw',
  to: 'winer909@gmail.com',
  subject: '[首都客運]會員EMAIL通知測試',
  
          };

const sendMail = (email) => {
  mailOptions.to=email;
  mailOptions.html =`<!DOCTYPE html>
  <html xmlns:st1 xmlns:o>
  <head>
      <title>首都客運-加入會員通知函</title>
      <meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
      <meta http-equiv="Content-Type" content="text/html; charset=big5">
      <style>
          body {
              margin: 0;
              padding: 0;
              font-family: '微軟正黑體', '新細明體', Arial, sans-serif;
              background-color: #f4f4f4;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
              margin-bottom: 20px;
          }
          .header h2 {
              margin: 0;
              color: #333;
          }
          .notification {
              color: red;
              text-align: center;
              margin-bottom: 20px;
          }
          .content {
              font-size: 14px;
              color: #333;
              line-height: 1.6;
          }
          .content a {
              color: #1a73e8;
              text-decoration: none;
          }
          .content a:hover {
              text-decoration: underline;
          }
          .footer {
              text-align: center;
              font-size: 12px;
              color: #777;
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h2>首都客運</h2>
          </div>
          <div class="notification">
              本通知函為系統自動寄出，請勿直接回覆
          </div>
          <div class="content">
              您好！<br><br>
              謝謝您申請成為首都客運會員，當您收到本驗證信函後，<br><br>
              請進行信箱驗證以正式啟用您的會員帳戶：<br><br>
              ．聯絡信箱：${email}<br><br>
              ．若您無法按下驗證連結，請直接複製以下網址貼到流覽器網址列：<br><br>
              <a href='https://www.capitalbusgroup.com.tw/CTBUS_PORTAL/Services/CTP0601API_Q03.aspx?DATA=qyVp38OwkJBkcoPAr4s6O4R4w91E/+/V41xR6qLqCcx1MHKctwk/XQ=='>請點我進行登入驗證</a><br><br>
              如欲更新您的個人資料、密碼或查詢訂單資料，請於驗證後至【會員專區】修改及查詢。<br><br>
          </div>
          <!-- <div class="footer">
              <img src="https://imgs.utiki.com.tw/Data/CTBUS/Mail/Template/images/logo.gif" width="280px" alt="首都客運 Logo">
              <br>
              客服時間 : 周一至周五AM9:00~AM12:00;PM 13:00~PM18:00(國定例假日除外)
          </div> -->
      </div>
  </body>
  </html>
  `;
 
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info.response);
      }
    });
  });
};

module.exports = { sendMail };
