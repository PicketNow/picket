const router = require('express').Router()
const Events = require('../db/models/event')
const User = require('../db/models/user')
const Interest = require('../db/models/interest')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allEvents = await Events.findAll()
    res.send(allEvents)
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
    res.send(subscribed)
  } catch (err) {
    next(err)
  }
})

// router.get('/upcoming', async (req, res, next) => {
//   try{
//     const upcoming = await Event.findAll({

//     })
//     console.log()
//   } catch(err) {
//     next(err)
//   }
// })

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
