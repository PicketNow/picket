import Axios from 'axios'

const GET_INTERESTS = 'GET_INTERESTS'
const USER_INTERESTS = 'USER_INTERESTS'

const getInterests = interests => ({
  type: GET_INTERESTS,
  interests
})

const gotUserInterests = interests => ({
  type: USER_INTERESTS,
  interests
})

export const subscribeToInterest = (interestId, userId) => async dispatch => {
  try {
    console.log('IN THUNK')
    await Axios.post(`/api/interests/${interestId}`)
    const res = await Axios.get(`/api/interests/${userId}`)
    const action = gotUserInterests(res.data)
    dispatch(action)
  } catch (err) {
    console.error(err)
  }
}

export const unsubscribeFromInterest = (
  interestId,
  userId
) => async dispatch => {
  try {
    console.log('IN UNSUBSCRIBE')
    await Axios.put(`/api/interests/${interestId}`)
    const res = await Axios.get(`/api/interests/${userId}`)
    const action = gotUserInterests(res.data)
    dispatch(action)
  } catch (err) {
    console.error(err)
  }
}

export const getInterestsFromServer = () => async dispatch => {
  try {
    const res = await Axios.get('/api/interests')
    const action = getInterests(res.data)
    dispatch(action)
  } catch (err) {
    console.error(err)
  }
}

export const getUserInterests = userId => async dispatch => {
  try {
    const res = await Axios.get(`/api/interests/${userId}`)
    const action = gotUserInterests(res.data)
    dispatch(action)
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  interests: [],
  userInterests: []
}

const interestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INTERESTS:
      return {...state, interests: action.interests}
    case USER_INTERESTS:
      return {...state, userInterests: action.interests}
    default:
      return state
  }
}

export default interestsReducer
