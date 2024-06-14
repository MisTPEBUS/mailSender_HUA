const cron = require('node-cron');
const dotenv = require('dotenv');
const { executeQueryAndSendEmail } = require('./services/cronService');
const dbConfig = require('./config/dbConfig');
const emailConfig = require('./config/emailConfig');
const cronConfig = require('./config/cronConfig');
const {sendMail} = require('./services/nodeMailer');
const {sendLineNotify} = require('./services/lineNotify');
dotenv.config({ path: './config.env' });

const message = `[首都客運]會員檢測系統通知:\n` +
`本日更新人數 : 0\n` +
`目前上線人數:  0\n` +
`權限逾時人數:  0`;

// 调用函数发送通知
//sendLineNotify(message);


// 設置定時任務
cron.schedule(cronConfig.schedule, () => {
  const mails = process.env.MAIL_USER.split(',');
  mails.forEach(element => {
    sendMail(element)
    .then(res=>console.log(res))
  .catch(err=>console.error(err));
  });
  
  
});

// 程式出現重大錯誤時
process.on('uncaughtException', err => {
  console.error('Uncaughted Exception！')
  console.error(err);
  process.exit(1);
});

// 未捕捉到的 catch 
process.on('unhandledRejection', (reason, promise) => {
  console.error('未捕捉到的 rejection：', promise, '原因：', reason);

});
