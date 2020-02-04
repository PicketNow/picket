const router = require('express').Router()
const {Interest} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const interests = await Interest.findAll()
    res.json(interests)
  } catch (err) {
    next(err)
  }
})

module.exports = router
