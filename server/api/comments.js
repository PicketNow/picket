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
    console.log('api first line')
    console.log('api reqqqqqq', req.params.commentId)
    const deletedComment = await Comment.destroy({
      where: {id: req.params.commentId}
    })
    res.send(deletedComment).sendStatus(200)
  } catch (err) {
    next(err)
  }
})

module.exports = router
