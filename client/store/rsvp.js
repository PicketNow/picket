import axios from 'axios'

const LOAD_ATTENDEES = 'LOAD_ATTENDEES'
const CHECK_IN = 'CHECK_IN'

const checkIn = checkedIn => ({
  type: CHECK_IN,
  checkedIn
})
const loadAttendees = attendees => ({type: LOAD_ATTENDEES, attendees})

const initialState = {
  attendees: [],
  checkedIn: false
}

export const findCheckIn = eventId => async dispatch => {
  try {
    console.log('IN CHECKIN TRY', eventId)
    await axios.put(`/api/rsvp/${eventId}`)
    dispatch(checkIn(true))
  } catch (error) {
    console.error(error)
  }
}

export const getAttendees = eventId => async dispatch => {
  try {
    console.log('in the attendees thunk')
    const {data} = await axios.get(`/api/rsvp/${eventId}`)
    console.log('data from attendees thunk: ', data)
    dispatch(loadAttendees(data))
  } catch (error) {
    console.log(error)
  }
}

const rsvpReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ATTENDEES:
      return {...state, attendees: action.attendees}
    case CHECK_IN:
      return {...state, checkedIn: action.checkedIn}
    default:
      return state
  }
}

export default rsvpReducer
