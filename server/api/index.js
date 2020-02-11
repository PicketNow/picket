const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/events', require('./events'))
router.use('/comments', require('./comments'))
router.use('/interests', require('./interests'))
router.use('/rsvp', require('./rsvp'))
router.use('/google-api', require('./google-api'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
