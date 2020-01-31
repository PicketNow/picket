const {Sequelize, DataTypes} = require('sequelize')
const db = require('../db')

const Comment = (db.define = db.define('Comment', {
  text: {
    type: Sequelize.TEXT
  },
  timestamps: true,
  createdAt: true,
  updatedAt: false,
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
}))

module.exports = Comment
