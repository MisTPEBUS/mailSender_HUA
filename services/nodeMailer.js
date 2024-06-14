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
  mailOptions.html =`
  <html xmlns:st1 xmlns:o>
  <head>
      <title>首都客運-會員EMAIL通知</title>
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
          .header h1 {
              margin: 0;
              color: white;
              font-size: xx-large;
              font-weight: bold; 
           
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
            font-size:large;
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
          <div class="header" style="    background: rgba(21, 110, 218, 0.9); font-family: 'SimSun', '宋体', serif;">
              <h1>國道客運售票網</h1>
          </div>
        
          <div class="notification">
              本通知函為系統自動寄出，請勿直接回覆
          </div>
          <div class="content">
              親愛的顧客您好！<br><br>
              感謝您成為首都客運會員。由於您長時間未登入或操作，<br><br>
              請您收到此封信，於下次購票前進行重新驗證：<br><br>
              ．會員信箱：${email}<br><br>
            
              如欲更新您的個人資料、密碼或查詢訂單資料，請於驗證後至【會員專區】修改及查詢。<br><br>
              國道客運關心您，祝您旅途愉快！
          </div>
          <div class="content" style="text-align:end">
             <div  >
                <h1> 首都客運股份有限公司 　　敬啟</h1><p>
                <h1> 臺北汽車客運股份有限公司 敬啟</h1><br>
               </div>
          </div>
           <div class="footer">
              <img src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/6005bd29-3f95-4395-86c5-0cd4f20b3282.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=ptC2mOG4%2Fy6oqUinavNO8vx%2BHRy6%2Brcmop0a8FDBkQPHOiAb%2Bg7N0JqMP5FiHzkAJvrySEbJF7QgWyG7jACwkmG4wb06WKGuMfuI9VmRF8DbSyHf6fP0WOrVaJqbsexlePu36lh6JcLIGeaIuFDuLcrVfGBt9tMmh18Pp7OG4oQ5cqQkJDR1KUhWtyOAIb47mF4XV4HRWpSuBe8ZIAqH4eJMPLu04ATxP0LEXkihsbvhiTL9LYVkK18jBESThTNTP8dSsmkGhDmjObspmDtdT%2BfZi39H%2BSO%2FHK3LjDW05sz3WwhSDTZAxtyiK8CiRcti8FHRUo3PRdLLOsgm8IOHSw%3D%3D" width="280px" alt="首都客運 Logo">
              <br>
              客服時間 : 周一至周五AM9:00~AM12:00;PM 13:00~PM18:00(國定例假日除外)<br>
              客服電話 : (03)-833-8800<br>
          </div> 
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
