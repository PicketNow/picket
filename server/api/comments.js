// const router = require('express').Router()
// const Events = require('../db/models/event')
// const Rsvp = require('../db/models/Rsvp')
// const User = require('../db/models/user')
// const Interest = require('../db/models/interest')
// const Comment = require('../db/models/')

// router.get('/:eventId', async (req, res, next) => {
//   try {
//     const comments = await Comment.findAll({where: {eventId: req.params.eventId}})
//     res.send(comments);
//   } catch (error) {
//     next(error)
//   }
// })

// router.post('/:eventId/:userId', async (req, res, next) => {
//   try {
//     await Comment.create({...req.body, userId: req.user.id})
//     const comment = await Comment.findOne({where: {userId: req.user.id, eventId: req.params.eventId}, include: {mod}})
//     res.send(comment);
//   } catch (error) {
//     next(error)
//   }
// })
