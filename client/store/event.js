import axios from 'axios'

const ALL_EVENTS = 'ALL_EVENTS'
const FILTER_EVENTS = 'FILTER_EVENTS'
const RSVP_EVENTS = 'RSVP_EVENTS'
const UPCOMING_EVENTS = 'UPCOMING_EVENTS'
const SUBSCRIBED_EVENTS = 'SUBSCRIBED_EVENTS'
const SINGLE_EVENT = 'SINGLE_EVENT'

const viewEvents = events => ({type: ALL_EVENTS, events})
const filterEvents = events => ({type: FILTER_EVENTS, events})
const rsvpEvents = events => ({type: RSVP_EVENTS, events})
const gotUpcomingEvents = upcomingEvents => ({
  type: UPCOMING_EVENTS,
  upcomingEvents
})
const gotSubscribedEvents = subscribedEvents => ({
  type: SUBSCRIBED_EVENTS,
  subscribedEvents
})
const gotEvent = event => ({type: SINGLE_EVENT, event})

export const getAllEvents = () => {
  return async dispatch => {
    try {
      const result = await axios.get('/api/events')
      dispatch(viewEvents(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getUpcomingEvents = () => async dispatch => {
  try {
    let events = await axios.get('/api/events/upcoming')
    dispatch(gotUpcomingEvents(events.data))
  } catch (err) {
    console.error(err)
  }
}

export const getSingleEvent = eventId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/events/${eventId}`)
      dispatch(gotEvent(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getFilteredEvents = eventCategory => {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/events/category/${eventCategory}`)
      dispatch(filterEvents(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getRsvpEvents = () => {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/events/rsvp/${userId}`)
      dispatch(rsvpEvents(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getSubscribedEvents = userId => async dispatch => {
  try {
    let events = await axios.get(`/api/events/subscribed/${userId}`)
    dispatch(gotSubscribedEvents(events.data))
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  events: [],
  singleEvent: {},
  rsvpEvents: [],
  upcomingEvents: [],
  subscribedEvents: []
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EVENTS:
      return {...state, events: action.events}
    case UPCOMING_EVENTS:
      return {...state, upcomingEvents: action.upcomingEvents}
    case SINGLE_EVENT:
      return {...state, singleEvent: action.event}
    case FILTER_EVENTS:
      return {...state, events: action.events}
    case RSVP_EVENTS:
      return {...state, rsvpEvents: action.events}
    case SUBSCRIBED_EVENTS:
      return {...state, subscribedEvents: action.subscribedEvents}
    default:
      return state
  }
}

export default eventsReducer
