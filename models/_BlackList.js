const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const _BlackLists = sequelize.define('PortalUsers', {
  PKNO: {
    type: DataTypes.STRING(36),
    primaryKey: true
  },
  email_address: {
    type: DataTypes.STRING(200),
  }, 
  create_datetime: {
    type: DataTypes.DATE,
  }
}, {
  tableName: '_BlackList',
  timestamps: false 
});

module.exports = _BlackLists;