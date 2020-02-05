const Sequelize = require('sequelize')
const db = require('../db')

const Rsvp = db.define('rsvp', {
  userId: {
    type: Sequelize.INTEGER
  },
  productId: {
    type: Sequelize.INTEGER
  },
  checkedIn: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Rsvp.findByUser = function(user) {
  return this.findAll({
    where: {
      userId: user
    }
  })
}

module.exports = Rsvp
