const {quryDatabase} = require('../models/PortalUsers');
const { sendEmail } = require('./emailService');
const logger = require('../utils/logger');

async function executeQueryAndSendEmail(){
    try{
        const result     = await quryDatabase();
        await sendEmail(result);
       
    }
    catch(err){
        console.error('Error in executeQueryAndSendEmail', err);
    
    }
}

module.exports={executeQueryAndSendEmail};