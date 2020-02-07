import axios from 'axios'

const LOAD_ATTENDEES = 'LOAD_ATTENDEES'

const loadAttendees = attendees => ({type: LOAD_ATTENDEES, attendees})

const initialState = {
  attendees: []
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
    default:
      return state
  }
}

export default rsvpReducer
