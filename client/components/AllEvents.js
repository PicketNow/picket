import React from 'react'
import {getAllEvents} from '../store/event'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import EventCard from './eventcardTest'
import Jumbo from './Jumbo'

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
        <div className="all-events">
          <h1>All Events:</h1>
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
