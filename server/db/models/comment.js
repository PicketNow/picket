const {Sequelize, DataTypes} = require('sequelize')
const db = require('../db')

const Comment = db.define('comment', {
  text: {
    type: Sequelize.TEXT
  },
  // timestamps: true,
  // createdAt: true,
  // updatedAt: false,
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
})

module.exports = Comment
