const router = require('express').Router()
const {Comment} = require('../db/models')

router.get('/:eventId', async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      where: {eventId: req.params.eventId}
    })
    res.json(comments)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body)
    console.log('APISDKFJDSLKFJDS:LF', newComment)
    res.json(newComment)
  } catch (err) {
    next(err)
  }
})

module.exports = router
