const {Sequelize} = require('sequelize')
const db = require('../db')

const Comment = db.define('comment', {
  words: {
    type: Sequelize.TEXT
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  eventId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Comment
