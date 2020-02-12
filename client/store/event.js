/* eslint-disable complexity */
import axios from 'axios'
import {getAttendees} from './rsvp'
import socket from '../socket'

const ALL_EVENTS = 'ALL_EVENTS'
const FILTER_EVENTS = 'FILTER_EVENTS'
const RSVP_EVENTS = 'RSVP_EVENTS'
const UPCOMING_EVENTS = 'UPCOMING_EVENTS'
const SUBSCRIBED_EVENTS = 'SUBSCRIBED_EVENTS'
const SINGLE_EVENT = 'SINGLE_EVENT'
const ADD_NEW_EVENT = 'ADD_NEW_EVENT'
const SEARCH_EVENTS = 'SEARCH_EVENTS'
const EVENT_COMMENTS = 'EVENT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'

const viewEvents = events => ({type: ALL_EVENTS, events})
const filterEvents = events => ({type: FILTER_EVENTS, events})

const gotEventComments = comments => ({
  type: EVENT_COMMENTS,
  comments
})

export const addNewComment = comment => ({
  type: ADD_COMMENT,
  comment
})

const gotSearchEvents = searchEvents => ({
  type: SEARCH_EVENTS,
  searchEvents
})
const gotRsvpEvents = rsvpEvents => ({type: RSVP_EVENTS, rsvpEvents})
const gotUpcomingEvents = upcomingEvents => ({
  type: UPCOMING_EVENTS,
  upcomingEvents
})
const gotSubscribedEvents = subscribedEvents => ({
  type: SUBSCRIBED_EVENTS,
  subscribedEvents
})
const addNewEvent = event => ({
  type: ADD_NEW_EVENT,
  event
})
const gotEvent = event => ({type: SINGLE_EVENT, event})

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

export const getUpcomingEvents = () => async dispatch => {
  try {
    let events = await axios.get('/api/events/upcoming')
    dispatch(gotUpcomingEvents(events.data))
  } catch (err) {
    console.error(err)
  }
}

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

export const getEventComments = eventId => {
  return async dispatch => {
    try {
      const comments = await axios.get(`/api/comments/${eventId}`)
      dispatch(gotEventComments(comments.data))
      // socket.emit('new-message', comments.data)
    } catch (err) {
      console.error(err)
    }
  }
}

export const getCategoryEvents = eventCategory => {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/events/category/${eventCategory}`)
      dispatch(filterEvents(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getEventsByZip = zipcode => async dispatch => {
  try {
    const events = await axios.get(`/api/events/zip/${zipcode}`)
    dispatch(gotSearchEvents(events.data))
  } catch (err) {
    console.error(err)
  }
}

export const getEventsByCategory = eventCategory => {
  return async dispatch => {
    try {
      const events = await axios.get(`/api/events/category/${eventCategory}`)
      dispatch(gotSearchEvents(events.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getRsvpEvents = userId => async dispatch => {
  try {
    const result = await axios.get(`/api/events/rsvp/${userId}`)
    dispatch(gotRsvpEvents(result.data))
  } catch (err) {
    console.error(err)
  }
}

export const getSubscribedEvents = userId => async dispatch => {
  try {
    let events = await axios.get(`/api/events/subscribed/${userId}`)
    dispatch(gotSubscribedEvents(events.data))
  } catch (err) {
    console.error(err)
  }
}

export const rsvpToEvent = (eventId, userId) => async dispatch => {
  try {
    await axios.post(`/api/events/${eventId}`)
    const {data} = await axios.get(`/api/events/rsvp/${userId}`)
    dispatch(gotRsvpEvents(data))
    dispatch(getAttendees(eventId))
  } catch (error) {
    console.log(error)
  }
}

export const unrsvpToEvent = (eventId, userId) => async dispatch => {
  try {
    await axios.put(`/api/events/${eventId}`)
    const {data} = await axios.get(`/api/events/rsvp/${userId}`)
    dispatch(gotRsvpEvents(data))
    dispatch(getAttendees(eventId))
  } catch (error) {
    console.log(error)
  }
}

export const submitEvent = event => async dispatch => {
  try {
    const res = await axios.post('/api/events', event)
    dispatch(addNewEvent(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const commentOnEvent = comment => async dispatch => {
  try {
    const result = await axios.post('/api/comments', comment)
    dispatch(addNewComment(result))
    socket.emit('new-message', result)
  } catch (err) {
    console.log(err)
  }
}

const initialState = {
  events: [],
  singleEvent: {},
  rsvpEvents: [],
  upcomingEvents: [],
  subscribedEvents: [],
  searchEvents: [],
  eventComments: []
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EVENTS:
      return {...state, events: action.events}
    case UPCOMING_EVENTS:
      return {...state, upcomingEvents: action.upcomingEvents}
    case SEARCH_EVENTS:
      return {...state, searchEvents: action.searchEvents}
    case SINGLE_EVENT:
      return {...state, singleEvent: action.event}
    case FILTER_EVENTS:
      return {...state, events: action.events}
    case RSVP_EVENTS:
      return {...state, rsvpEvents: action.rsvpEvents}
    case SUBSCRIBED_EVENTS:
      return {...state, subscribedEvents: action.subscribedEvents}
    case ADD_NEW_EVENT:
      return {...state, events: [...state.events, action.event]}
    case EVENT_COMMENTS:
      return {...state, eventComments: action.comments}
    case ADD_COMMENT:
      return {...state, eventComments: [...state.eventComments, action.comment]}
    default:
      return state
  }
}

export default eventsReducer
