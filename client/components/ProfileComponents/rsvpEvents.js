import React from 'react'
import {getRsvpEvents} from '../../store/event'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class RsvpEvents extends React.Component {
  componentDidMount() {
    this.props.getRsvpEvents(this.props.userId)
  }

  render() {
    return (
      <div>
        <div className="rsvp-events">
          <h3>Current RSVPs:</h3>
          <ul>
            {this.props.rsvpEvents.map(event => (
              <li key={event.id}>
                <Link to={`/events/${event.id}`}>{event.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  rsvpEvents: state.events.rsvpEvents
})

const mapDispatchToProps = dispatch => ({
  getRsvpEvents: userId => dispatch(getRsvpEvents(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RsvpEvents)
