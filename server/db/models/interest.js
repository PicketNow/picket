const Sequelize = require('sequelize')
const db = require('../db')

const Interest = db.define('interest', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://ibb.co/Bj8CsWY',
    allowNull: false
  }
})

module.exports = Interest
