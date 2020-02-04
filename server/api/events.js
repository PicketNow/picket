const router = require('express').Router()
const Events = require('../db/models/event')
const Rsvp = require('../db/models/Rsvp')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allEvents = await Events.findAll()
    res.send(allEvents)
  } catch (error) {
    next(error)
  }
})

router.get('category/:eventCategory', async (req, res, next) => {
  try {
    const category = req.params.eventCategory
    const categoryEvents = await Events.findByInterest(category)
    res.send(categoryEvents)
  } catch (error) {
    next(error)
  }
})

router.get('/rsvp/:userId', async (req, res, next) => {
  try {
    const user = req.params.userId
    const events = await Rsvp.findByUser(user)
    //now query for
    res.send(categoryEvents)
  } catch (error) {
    next(error)
  }
})
