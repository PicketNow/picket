import React from 'react'
import {getUpcomingEvents, getSubscribedEvents} from '../store/event'
// import EventCard from './EventCard'
import {connect} from 'react-redux'
import {me} from '../store/user'
import EventCard from './eventcardTest'

class FeaturedEvents extends React.Component {
  async componentDidMount() {
    await this.props.me()
    console.log(this.props)
    if (this.props.user.id) {
      this.props.getSubscribedEvents(this.props.user.id)
    } else this.props.getUpcomingEvents()
  }

  render() {
    console.log(this.props.subscribedEvents)
    return (
      <div>
        {this.props.user.id ? (
          <div className="featured-events">
            <h1>Recommended Events</h1>
            <div>
              <EventCard events={this.props.subscribedEvents} />
            </div>
          </div>
        ) : (
          <div className="featured-events">
            <h1>Upcoming Events</h1>
            <div>
              <EventCard events={this.props.upcomingEvents} />
            </div>
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
