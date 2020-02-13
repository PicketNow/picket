import React from 'react'
import {getAllEvents} from '../store/event'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import EventCard from './eventcardTest'
import Jumbo from './Jumbo'
import Typography from './Typography'

class AllEvents extends React.Component {
  // if(isLoggedIn)
  componentDidMount() {
    this.props.getAllEvents()
  }

  render() {
    console.log(this.props.events)
    const events = this.props.events
    return (
      <div>
        <Jumbo />

        <Typography variant="h4" marked="center" align="center" component="h2">
          All Events
        </Typography>
        <h3 />
        <div className="all-events">
          {events && <EventCard events={events} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events.events
})

const mapDispatchToProps = dispatch => ({
  getAllEvents: () => dispatch(getAllEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents)
