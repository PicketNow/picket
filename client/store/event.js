import axios from 'axios'

const ALL_EVENTS = 'ALL_EVENTS'

const viewEvents = events => ({type: ALL_EVENTS, events})

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

const SINGLE_EVENT = 'SINGLE_EVENT'

const gotEvent = event => ({type: SINGLE_EVENT, event})

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

const initialState = {
  events: [],
  singleEvent: {}
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EVENTS:
      return {...state, events: action.events}
    case SINGLE_EVENT:
      return {...state, singleEvent: action.event}
    default:
      return state
  }
}

export default eventsReducer
