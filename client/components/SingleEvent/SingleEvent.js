import React from 'react'
import {connect} from 'react-redux'
import {
  getSingleEvent,
  getRsvpEvents,
  rsvpToEvent,
  unrsvpToEvent,
  removeEventFromServer
} from '../../store/event'
import {me} from '../../store/user'
import {getAttendees, findCheckIn, findRsvp} from '../../store/rsvp'
import UserRender from './user'
import GuestRender from './guest'
import Jumbo from '../Jumbo'
import CommentBoard from './commentBoard'

import axios from 'axios'

class SingleEvent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      coords: {}
    }

    this.isRSVPed = this.isRSVPed.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleCheckIn = this.handleCheckIn.bind(this)
    this.getLat = this.getLat.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  async componentDidMount() {
    await this.props.findRsvp(this.props.match.params.eventId)
    await this.props.me()
    await this.props.getEvent(this.props.match.params.eventId)
    if (this.props.user.id) {
      await this.props.getRsvpEvents(this.props.user.id)
    }
    await this.props.getAttendees(this.props.match.params.eventId)
    await this.getLat()
  }

  handleClick() {
    let rsvp = this.isRSVPed()
    const eventId = this.props.match.params.eventId
    const userId = this.props.user.id
    if (!rsvp) {
      this.props.rsvpToEvent(eventId, userId)
    } else {
      this.props.unrsvpToEvent(eventId, userId)
    }
  }

  handleCheckIn() {
    this.props.findCheckIn(this.props.match.params.eventId)
  }

  handleDelete() {
    this.props.removeEventFromServer(this.props.match.params.eventId)
    this.props.history.push('/events')
  }

  isOrganizer() {
    if (this.props.user.id === this.props.event.organizerId) return true
    else return false
  }

  isRSVPed() {
    let rsvp = false
    if (this.props.rsvpEvents.length) {
      this.props.rsvpEvents.forEach(event => {
        if (event.id === this.props.event.id) rsvp = true
      })
    }
    return rsvp
  }

  async getLat() {
    const coordsBack = await axios.get(
      `/api/google-api/${this.props.match.params.eventId}`
    )

    this.setState({
      coords: coordsBack.data
    })
  }

  render() {
    console.log('SINGLE EVENT', this.props)
    if (this.props.user.id) {
      return (
        <React.Fragment>
          <Jumbo />
          <UserRender
            isRSVPed={this.isRSVPed}
            user={this.props.user}
            event={this.props.event}
            attendees={this.props.attendees}
            handleClick={this.handleClick}
            handleCheckIn={this.handleCheckin}
            coords={this.state.coords}
            handleDelete={this.handleDelete}
            isOrganizer={this.isOrganizer}
          />
          <CommentBoard
            userId={this.props.user.id}
            eventId={this.props.match.params.eventId}
            user={this.props.user}
          />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Jumbo />
          <GuestRender
            event={this.props.event}
            attendees={this.props.attendees}
            coords={this.state.coords}
          />
          {/* <CommentBoard /> */}
        </React.Fragment>
      )
    }
  }
}

const mapState = state => ({
  event: state.events.singleEvent,
  rsvpEvents: state.events.rsvpEvents,
  user: state.user,
  attendees: state.rsvp.attendees,
  rsvp: state.rsvp.rsvped,
  checkedIn: state.rsvp.checkedIn
})

const mapDispatch = dispatch => ({
  getEvent: eventId => dispatch(getSingleEvent(eventId)),
  rsvpToEvent: (eventId, userId) => dispatch(rsvpToEvent(eventId, userId)),
  unrsvpToEvent: (eventId, userId) => dispatch(unrsvpToEvent(eventId, userId)),
  getRsvpEvents: userId => dispatch(getRsvpEvents(userId)),
  me: () => dispatch(me()),
  getAttendees: eventId => dispatch(getAttendees(eventId)),
  findCheckIn: eventId => dispatch(findCheckIn(eventId)),
  findRsvp: eventId => dispatch(findRsvp(eventId)),
  removeEventFromServer: eventId => dispatch(removeEventFromServer(eventId))
})

export default connect(mapState, mapDispatch)(SingleEvent)
