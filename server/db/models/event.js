const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
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

Event.findByInterest = function(interest) {
  return this.findAll({
    where: {
      interestId: interest
    }
  })
}

Event.findByZip = function(zip) {
  return this.findAll({
    where: {
      zipcode: zip
    }
  })
}

Event.findByRsvpArr = function(events) {
  let array = []
  for (let i = 0; i < events.length; i++) {
    array.push(Event.findByPK(events[i]))
  }
  return array
}

module.exports = Event
