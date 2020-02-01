const User = require('./user')
const Comment = require('./comment')
const Event = require('./events')
const Interest = require('./interests')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
User.belongsToMany(Event, {through: Comment})
Event.belongsToMany(User, {through: Comment})
User.belongsToMany(Event, {through: 'RSVP'})
Event.belongsToMany(User, {through: 'RSVP'})

Interest.hasMany(Event)
Event.belongsTo(Interest)

Interest.belongsToMany(User, {through: 'Subscribe'})
User.belongsToMany(Interest, {through: 'Subscribe'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Comment,
  Event,
  Interest
}
