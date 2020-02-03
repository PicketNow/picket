import Axios from 'axios'

const GET_INTERESTS = 'GET_INTERESTS'

const getInterests = interests => ({
  type: GET_INTERESTS,
  interests
})

export const getInterestsFromServer = () => async dispatch => {
  try {
    const res = await Axios.get('/api/interests')
    const action = getInterests(res.data)
    dispatch(action)
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  interests: []
}

const interestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INTERESTS:
      return {...state, interests: action.interests}
    default:
      return state
  }
}

export default interestsReducer
