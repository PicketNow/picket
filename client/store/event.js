import axios from 'axios'

const ALL_EVENTS = 'ALL_EVENTS'
const FILTER_EVENTS = 'FILTER_EVENTS'
const RSVP_EVENTS = 'RSVP_EVENTS'

const viewEvents = events => ({type: ALL_EVENTS, events})
const filterEvents = events => ({type: FILTER_EVENTS, events})
const rsvpEvents = events => ({type: RSVP_EVENTS, events})

export const getAllEvents = () => {
  return async dispatch => {
    try {
      console.log('here in the thunk')
      const result = await axios.get('/api/events')
      dispatch(viewEvents(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getFilteredEvents = () => {
  return async dispatch => {
    try {
      console.log('here in the thunk')
      const result = await axios.get('/api/category/:eventCategory')
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

const initialState = {
  events: [],
  rsvpEvents: []
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EVENTS:
      return {...state, events: action.events}
    case FILTER_EVENTS:
      return {...state, events: action.events}
    case RSVP_EVENTS:
      return {...state, rsvpEvents: action.events}
    default:
      return state
  }
}

export default eventsReducer
