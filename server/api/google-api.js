const router = require('express').Router()
const Event = require('../db/models/event')

//const {GOOGLE_MAP_KEY} = require('../../secrets')
const axios = require('axios')

const formatUrl = async eventId => {
  try {
    const event = await Event.findByPk(eventId)
    const prefix =
      'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='
    const address = event.stAddress.split(' ').join('%20')
    const city = event.city.split(' ').join('%20')
    const input = [address, city, event.state].join('%20')
    const infix = '&inputtype=textquery&fields=geometry&key='
    const reqUrl = `${prefix}${input}${infix}${'AIzaSyDC_OaMqwcEmvt84gfJKVLlUNsbMTrgP1w'}`
    console.log(reqUrl, 'requrllllllllll')
    return reqUrl
  } catch (error) {
    console.log(error)
  }
}

router.get('/:eventId', async (req, res, next) => {
  try {
    const config = {headers: {'Access-Control-Allow-Origin': '*'}}
    const reqUrl = await formatUrl(req.params.eventId)
    const {data} = await axios.get(reqUrl, config)
    res.send(data.candidates[0].geometry.location)
  } catch (error) {
    next(error)
  }
})

module.exports = router
