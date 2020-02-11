const User = require('./user')
const Comment = require('./comment')
const Event = require('./event')
const Interest = require('./interest')
const Rsvp = require('./Rsvp')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Event.hasMany(Comment)
Comment.belongsTo(Event)
User.belongsToMany(Event, {as: 'Rsvp', through: Rsvp, foreignKey: 'userId'})
Event.belongsToMany(User, {through: Rsvp})

Event.belongsTo(Interest)
Interest.hasMany(Event)

Interest.belongsToMany(User, {through: 'subscribe'})
User.belongsToMany(Interest, {through: 'subscribe'})

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
  Interest,
  Rsvp
}
