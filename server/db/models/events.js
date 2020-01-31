const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('Event', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  stAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://bit.ly/31brBDL',
    allowNull: false
  },
  organizerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isDate: true
    }
  }
})

module.exports = Event
