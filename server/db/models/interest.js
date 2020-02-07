const Sequelize = require('sequelize')
const db = require('../db')

const Interest = db.define('interest', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://bit.ly/2S6iq4o',

    allowNull: false
  }
})

module.exports = Interest
