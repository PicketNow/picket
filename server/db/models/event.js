const Sequelize = require('sequelize')
const db = require('../db')
const Interest = require('./interest')

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
  state: {
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
    type: Sequelize.DATE,
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
    },
    include: [{model: Interest}]
  })
}

Event.findByZip = function(zip) {
  return this.findAll({
    where: {
      zipcode: zip
    }
  })
}

Event.findByRsvpArr = async function(rsvpArr) {
  let array = []

  for (let i = 0; i < rsvpArr.length; i++) {
    let elem = rsvpArr[i]
    let key = elem.eventId

    let item = await Event.findByPk(key)
    array.push(item)
  }
  return array
}

module.exports = Event
