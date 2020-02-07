import React from 'react'
import {connect} from 'react-redux'
import {
  getSingleEvent,
  getRsvpEvents,
  rsvpToEvent,
  unrsvpToEvent
} from '../store/event'
import {me} from '../store/user'
import {getAttendees, findCheckIn} from '../store/rsvp'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

class SingleEvent extends React.Component {
  constructor(props) {
    super(props)
    this.isRSVPed = this.isRSVPed.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleCheckIn = this.handleCheckIn.bind(this)
  }

  componentDidMount() {
    this.props.me()
    this.props.getRsvpEvents(this.props.user.id)
    this.props.getEvent(this.props.match.params.eventId)
    this.props.getAttendees(this.props.match.params.eventId)
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

  isRSVPed() {
    let rsvp = false
    if (this.props.rsvpEvents.length) {
      this.props.rsvpEvents.forEach(event => {
        if (event.id === this.props.event.id) rsvp = true
      })
    }
    return rsvp
  }

  render() {
    return (
      <div className="outermost-container">
        <div className="single-event-page-container">
          <div className="event-info-container">
            <div className="event-info-left">
              <img className="event-banner" src={this.props.event.imageUrl} />
              <h2 id="event-title">{this.props.event.title}</h2>
              <article className="event-description">
                {this.props.event.description}
              </article>
              <div className="attendees-container" />
            </div>

            <div className="event-info-right">
              {this.props.user.id ? (
                <div id="rsvp-button-container">
                  {this.isRSVPed() ? (
                    <button
                      className="rsvp-button"
                      type="button"
                      onClick={this.handleClick}
                    >
                      Un-RSVP
                    </button>
                  ) : (
                    <button
                      className="rsvp-button"
                      type="button"
                      onClick={this.handleClick}
                    >
                      RSVP
                    </button>
                  )}
                </div>
              ) : (
                <div id="rsvp-button-alt">Log in or sign up to RSVP!</div>
              )}
              {this.isRSVPed() ? (
                <button
                  className="check-in-button"
                  type="button"
                  onClick={this.handleCheckIn}
                >
                  Check In
                </button>
              ) : null}
              <article className="event-location">
                <div>{this.props.event.stAddress}</div>
                <div>
                  {this.props.event.city}, {this.props.event.zipcode}
                </div>
              </article>
              <LoadScript
                id="script-loader"
                googleMapsApiKey="AIzaSyD0Uq3vXNaKwkpZLzowIbDIt7PLbnmCmqw"
              >
                <GoogleMap
                  id="google-map"
                  mapContainerStyle={{
                    height: '250px',
                    width: '250px'
                  }}
                  zoom={14}
                  center={{
                    lat: 40.7308,
                    lng: -73.9973
                  }}
                >
                  <Marker
                    position={{
                      lat: 40.7308,
                      lng: -73.9973
                    }}
                  />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          <div className="similar-events-container" />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  event: state.events.singleEvent,
  rsvpEvents: state.events.rsvpEvents,
  user: state.user,
  attendees: state.rsvp.attendees
})

const mapDispatch = dispatch => ({
  getEvent: eventId => dispatch(getSingleEvent(eventId)),
  rsvpToEvent: (eventId, userId) => dispatch(rsvpToEvent(eventId, userId)),
  unrsvpToEvent: (eventId, userId) => dispatch(unrsvpToEvent(eventId, userId)),
  getRsvpEvents: userId => dispatch(getRsvpEvents(userId)),
  me: () => dispatch(me()),
  getAttendees: eventId => dispatch(getAttendees(eventId)),
  findCheckIn: eventId => dispatch(findCheckIn(eventId))
})

export default connect(mapState, mapDispatch)(SingleEvent)
