const axios = require('axios');

const lineNotifyToken = 'ZH2oxnzxBFGBMCTuDnIrWUePLpCtMwzxPDLpoqTHMnp'; // 替换为你的Line Notify访问令牌

const sendLineNotify = async (message) => {
  const url = 'https://notify-api.line.me/api/notify';
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${lineNotifyToken}`
  };

  try {
    const response = await axios.post(url, `message=${message}`, { headers });
    console.log('通知发送成功:', response.data);
  } catch (error) {
    console.error('通知发送失败:', error);
  }
};



module.exports = {sendLineNotify}