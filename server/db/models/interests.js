const Sequelize = require('sequelize')
const db = require('../db')

const Interest = db.define('Interest', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Interest
