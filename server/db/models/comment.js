const {Sequelize} = require('sequelize')
const db = require('../db')
const User = require('./user')

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

Comment.findAllWithUsers = async function(commentArr) {
  for (let i = 0; i < commentArr.length; i++) {
    let elem = commentArr[i]
    let key = elem.userId

    let user = await User.findByPk(key)
    elem.dataValues.userName = user.firstName
    elem.dataValues.imageUrl = user.imageUrl
  }

  return commentArr
}

module.exports = Comment
