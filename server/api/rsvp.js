const router = require('express').Router()
const User = require('../db/models/user')
const Rsvp = require('../db/models/Rsvp')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const rsvp = await Rsvp.findAll()
    res.send(rsvp)
  } catch (error) {
    next(error)
  }
})

router.get('/:eventId', async (req, res, next) => {
  try {
    const rsvp = await Rsvp.findAll({where: {eventId: req.params.eventId}})
    const userids = []
    for (let i = 0; i < rsvp.length; i++) {
      userids.push(rsvp[i].userId)
    }
    const users = await User.findAll({where: {id: userids}})
    res.send(users)
  } catch (error) {
    console.log(error)
    next(error)
  }
})
