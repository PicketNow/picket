import React from 'react'
import {getUpcomingEvents, getSubscribedEvents} from '../store/event'
// import EventCard from './EventCard'
import {connect} from 'react-redux'
import {me} from '../store/user'
import EventCard from './eventcardTest'
import {Box, Button, Container, Grid} from '@material-ui/core'
import Typography from './Typography'

class FeaturedEvents extends React.Component {
  async componentDidMount() {
    await this.props.me()

    if (this.props.user.id) {
      this.props.getSubscribedEvents(this.props.user.id)
    } else this.props.getUpcomingEvents()
  }

  render() {
    return (
      <div>
        <Container marginBottom={4} spacing={2}>
          {this.props.user.id ? (
            <div className="featured-events">
              <Typography
                variant="h4"
                marked="center"
                align="center"
                component="h2"
              >
                Recommended Events
              </Typography>
              <h3 />

              <div>
                <EventCard
                  lastPage="featuredEvent"
                  events={this.props.subscribedEvents}
                />
              </div>
            </div>
          ) : (
            <div className="featured-events">
              <Typography
                variant="h4"
                marked="center"
                align="center"
                component="h2"
              >
                Upcoming Events
              </Typography>
              <h3 />
              <div>
                <EventCard
                  lastPage="featuredEvent"
                  events={this.props.upcomingEvents}
                />
              </div>
              {/* {events && <SingleEvent events={events} />} */}
            </div>
          )}
        </Container>
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
