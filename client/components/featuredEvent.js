import React from 'react'
import {getUpcomingEvents, getSubscribedEvents} from '../store/event'

import {connect} from 'react-redux'
import {me} from '../store/user'

class FeaturedEvents extends React.Component {
  componentDidMount() {
    this.props.me()
    if (this.props.user.id) {
      this.props.getSubscribedEvents(this.props.user.id)
    } else this.props.getUpcomingEvents()
  }

  render() {
    return (
      <div>
        {this.props.user.id ? (
          <div className="featured-events">
            <h1>Recommended Events</h1>
            <ul>
              {this.props.subscribedEvents.map(event => (
                <li key={event.id}>{event.title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="featured-events">
            <h1>Upcoming Events</h1>
            <ul>
              {this.props.upcomingEvents.map(event => (
                <li key={event.id}>{event.title}</li>
              ))}
            </ul>
            {/* {events && <SingleEvent events={events} />} */}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  upcomingEvents: state.events.upcomingEvents,
  subscribedEvents: state.events.subscribedEvents
})

const mapDispatchToProps = dispatch => ({
  getUpcomingEvents: () => dispatch(getUpcomingEvents()),
  getSubscribedEvents: userId => dispatch(getSubscribedEvents(userId)),
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedEvents)
