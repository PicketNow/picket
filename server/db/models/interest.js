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
    defaultValue:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fastcompany.com%2F90393263%2Fthese-powerful-fonts-are-based-on-protest-movements-from-civil-rights-to-suffrage&psig=AOvVaw3JhBv3gDrENof7n7-HdP-L&ust=1581192896492000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD8yNygwOcCFQAAAAAdAAAAABAD',
    allowNull: false
  }
})

module.exports = Interest
