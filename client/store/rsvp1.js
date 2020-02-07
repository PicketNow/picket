import axios from 'axios'

const CHECK_IN = 'CHECK_IN'

const checkIn = checkedIn => ({type: CHECK_IN, checkedIn})

export const checkInToEvent = (eventId, userId) => async dispatch => {
  try {
    await axios.put(`/api/events/${eventId}`, checkedIn)
    dispatch(checkIn())
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  checkedIn: false
}

const rsvpReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IN:
      return {...state, checkedIn: true}
    default:
      return state
  }
}

export default rsvpReducer
