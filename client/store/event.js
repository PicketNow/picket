import axios from 'axios'

const ALL_EVENTS = 'ALL_EVENTS'
const FILTER_EVENTS = 'FILTER_EVENTS'

const viewEvents = events => ({type: ALL_EVENTS, events})
const filterEvents = events => ({type: FILTER_EVENTS, events})

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

const initialState = {
  events: []
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EVENTS:
      return {...state, events: action.events}
    case FILTER_EVENTS:
      return {...state, events: action.events}
    default:
      return state
  }
}

export default eventsReducer
