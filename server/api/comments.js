const router = require('express').Router()
const {Comment} = require('../db/models')

router.get('/:eventId', async (req, res, next) => {
  try {
    const commentArr = await Comment.findAll({
      where: {eventId: req.params.eventId}
    })

    const comments = await Comment.findAllWithUsers(commentArr)
    res.json(comments)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body)
    res.json(newComment)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body)
    res.json(newComment)
  } catch (err) {
    next(err)
  }
})

router.delete('/:commentId', async (req, res, next) => {
  try {
    await Comment.delete(req.params.commentId)
    res.status(200).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
