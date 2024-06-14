const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PortalUsers = sequelize.define('PortalUsers', {
  PKNO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  password: {
    type: DataTypes.STRING,
  },
  create_date: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  sex: {
    type: DataTypes.STRING,
  },
  email_address: {
    type: DataTypes.STRING,
  },
  zip_code: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  phone_mobile: {
    type: DataTypes.STRING,
  },
  social_id: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.DATE,
  },
  creditcard_number: {
    type: DataTypes.STRING,
  },
  creditcard_expire_year: {
    type: DataTypes.INTEGER,
  },
  creditcard_expire_month: {
    type: DataTypes.INTEGER,
  },
  creditcard_checkcode: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  epaper_subscribe: {
    type: DataTypes.BOOLEAN,
  },
  user_class_id: {
    type: DataTypes.INTEGER,
  },
  account: {
    type: DataTypes.STRING,
  },
  EMAIL_address1: {
    type: DataTypes.STRING(200),
  },
  ROWSTAMP: {
    type: DataTypes.STRING(20),
  },
  CREATE_TIME: {
    type: DataTypes.DATE,
  },
  CREATE_USER: {
    type: DataTypes.STRING(20),
  },
  UPDATE_TIME: {
    type: DataTypes.DATE,
  },
  UPDATE_USER: {
    type: DataTypes.STRING(20),
  },
  DEV_OS: {
    type: DataTypes.STRING(20),
  },
  DEV_OS_VER: {
    type: DataTypes.STRING(20),
  },
  DEV_UID: {
    type: DataTypes.STRING(100),
  },
  Google_KEY: {
    type: DataTypes.STRING(50),
  },
  FB_KEY: {
    type: DataTypes.STRING(50),
  },
  resetpw_id: {
    type: DataTypes.TEXT,
  },
  resetpw_expire_datetime: {
    type: DataTypes.DATE,
  },
  expire_datetime: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'PortalUsers',
  timestamps: false // 如果你的表没有 createdAt 和 updatedAt 字段，请设置为 false
});

module.exports = PortalUser;