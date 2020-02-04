import axios from 'axios'

const ALL_EVENTS = 'ALL_EVENTS'
const FILTER_EVENTS = 'FILTER_EVENTS'
const RSVP_EVENTS = 'RSVP_EVENTS'
const UPCOMING_EVENTS = 'UPCOMING_EVENTS'
const SUBSCRIBED_EVENTS = 'SUBSCRIBED_EVENTS'

const viewEvents = events => ({type: ALL_EVENTS, events})
const filterEvents = events => ({type: FILTER_EVENTS, events})
const rsvpEvents = events => ({type: RSVP_EVENTS, events})
const gotUpcomingEvents = featuredEvents => ({
  type: UPCOMING_EVENTS,
  featuredEvents
})
const gotSubscribedEvents = featuredEvents => ({
  type: SUBSCRIBED_EVENTS,
  featuredEvents
})


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
    
export const getUpcomingEvents = () => async dispatch => {
  try {
    let events = await axios.get('/api/events/upcoming')
    dispatch(gotUpcomingEvents(events.data))
  } catch (err) {
    console.error(err)
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
  rsvpEvents: []
  featuredEvents: []
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EVENTS:
      return {...state, events: action.events}
    case FILTER_EVENTS:
      return {...state, events: action.events}
    case RSVP_EVENTS:
      return {...state, rsvpEvents: action.events}
    case UPCOMING_EVENTS:
      return {...state, featuredEvents: action.featuredEvents}
    case SUBSCRIBED_EVENTS:
      return {...state, featuredEvents: action.featuredEvents}
    default:
      return state
  }
}

export default eventsReducer
