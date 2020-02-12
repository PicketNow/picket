import React from 'react'
import {getUpcomingEvents, getSubscribedEvents} from '../store/event'
// import EventCard from './EventCard'
import {connect} from 'react-redux'
import {me} from '../store/user'
import EventCard from './eventcardTest'
import {Box, Button, Container, Grid} from '@material-ui/core'

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
        <Container spacing={2}>
          <Grid>
            {this.props.user.id ? (
              <div className="featured-events">
                <Box display="flex" flexDirection="row">
                  <Grid spacing={12}>
                    <h1>Recommended Events</h1>
                  </Grid>
                </Box>
                <div>
                  <EventCard events={this.props.subscribedEvents} />
                </div>
              </div>
            ) : (
              <div className="featured-events">
                <Box display="flex" spacing={10} flexDirection="row">
                  <div>
                    <h1>Upcoming Events</h1>
                  </div>
                </Box>
                <div>
                  <EventCard events={this.props.upcomingEvents} />
                </div>
                {/* {events && <SingleEvent events={events} />} */}
              </div>
            )}
          </Grid>
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
