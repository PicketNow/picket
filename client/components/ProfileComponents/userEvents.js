import React from 'react'
import {getUserEvents} from '../../store/event'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class UserEvents extends React.Component {
  componentDidMount() {
    this.props.getUserEvents(this.props.userId)
  }

  render() {
    return (
      <div>
        <div className="rsvp-events">
          <h3>Events You're Organizing:</h3>
          <ul>
            {this.props.userEvents.events.map(event => (
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
  userEvents: state.events
})

const mapDispatchToProps = dispatch => ({
  getUserEvents: userId => dispatch(getUserEvents(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents)
