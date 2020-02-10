const router = require('express').Router()
const {Interest, User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const interests = await Interest.findAll()
    res.json(interests)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: {id: req.params.userId},
      include: [{model: Interest}]
    })
    const interests = user[0].interests.map(int => int.name)
    res.json(interests)
  } catch (err) {
    next(err)
  }
})

module.exports = router
