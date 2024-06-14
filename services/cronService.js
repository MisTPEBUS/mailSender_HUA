const cron = require('node-cron');
const cronConfig = require('../config/cronConfig');
const {sendMail} = require('../services/nodeMailer');

function startCronJob() {
    cron.schedule(cronConfig.schedule, () => {
      console.log('Running scheduled task...');
      sendMail();
    });
  }
  
  module.exports = {
    startCronJob
  };