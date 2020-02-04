import axios from 'axios'

const ALL_EVENTS = 'ALL_EVENTS'
const FILTER_EVENTS = 'FILTER_EVENTS'

const viewEvents = events => ({type: ALL_EVENTS, events})
const filterEvents = events => ({type: FILTER_EVENTS, events})

export const getAllEvents = () => {
  return async dispatch => {
    try {
      //console.log('here in the thunk')
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
      console.log('here in the filter thunk')
      const result = await axios.get(`/api/events/category/${eventCategory}`)
      console.log('here in the filter thunk2')
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
