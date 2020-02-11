const router = require('express').Router()
const Events = require('../db/models/event')
const Rsvp = require('../db/models/Rsvp')
const User = require('../db/models/user')
const Interest = require('../db/models/interest')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allEvents = await Events.findAll()
    res.send(allEvents)
    console.log(allEvents)
  } catch (error) {
    next(error)
  }
})

router.get('/upcoming', async (req, res, next) => {
  const today = new Date()
  try {
    const upcoming = await Events.findAll({
      where: {date: {[Op.gt]: today}},
      order: [['date', 'ASC']]
    })
    res.send(upcoming.slice(0, 6))
  } catch (err) {
    next(err)
  }
})

router.get('/zip/:zip', async (req, res, next) => {
  try {
    const event = await Events.findByZip(req.params.zip)
    res.send(event)
  } catch (error) {
    next(error)
  }
})

router.get('/:eventId', async (req, res, next) => {
  try {
    const event = await Events.findByPk(req.params.eventId)

    res.send(event)
  } catch (error) {
    next(error)
  }
})

router.post('/:eventId', async (req, res, next) => {
  try {
    console.log(req.user)
    const event = await Events.findByPk(req.params.eventId)
    const user = await User.findByPk(req.user.id)
    user.addRsvp(event)
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

router.put('/:eventId', async (req, res, next) => {
  try {
    const rsvp = await Rsvp.findOne({
      where: {userId: req.user.id, eventId: req.params.eventId}
    })
    await rsvp.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.get('/subscribed/:userId', async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: {id: req.params.userId},
      include: [{model: Interest}]
    })
    const interests = user[0].interests.map(int => int.id)
    const subscribed = await Events.findAll({
      where: {interestId: interests}
    })
    console.log(user[0])
    res.send(subscribed)
  } catch (err) {
    next(err)
  }
})

router.get('/category/:eventCategory', async (req, res, next) => {
  try {
    console.log('here')
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
    const rsvpArr = await Rsvp.findByUser(user)
    const events = await Events.findByRsvpArr(rsvpArr)

    res.send(events)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {
      title,
      description,
      stAddress,
      city,
      state,
      zipcode,
      date,
      organizerId,
      interestId
    } = req.body
    const newEvent = await Events.create({
      title,
      description,
      stAddress,
      city,
      state,
      zipcode,
      date,
      organizerId,
      interestId
    })
    console.log(newEvent)
    res.json(newEvent)
  } catch (err) {
    next(err)
  }
})
