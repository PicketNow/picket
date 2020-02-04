const router = require('express').Router()
const Events = require('../db/models/event')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allEvents = await Events.findAll()
    res.send(allEvents)
  } catch (error) {
    next(error)
  }
})

router.get('/:eventId', async (req, res, next) => {
  try {
    const event = await Events.findByPk(req.params.eventId)
    console.log(event)
    res.send(event)
  } catch (error) {
    next(error)
  }
})
