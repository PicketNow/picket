import axios from 'axios'

const ALL_EVENTS = 'ALL_EVENTS'

const viewEvents = events => ({type: ALL_EVENTS, events})

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

const manageEvents = (state = [], action) => {
  switch (action.type) {
    case ALL_EVENTS:
      return action.events
    default:
      return state
  }
}

export default manageEvents
