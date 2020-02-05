import React from 'react'
import {getAllEvents} from '../store/event'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import EventCard from './EventCard'

class AllEvents extends React.Component {
  // if(isLoggedIn)
  componentDidMount() {
    this.props.getAllEvents()
  }

  render() {
    const events = this.props.events
    return (
      <div>
        <div className="all-events">
          <h1>Events:</h1>
          {/* <ul>
            {this.props.events.map(event => (
              <div key={event.id}>
                <Link to={`/events/${event.id}`}>
                  <li>{event.title}</li>
                </Link>
              </div>
            ))}
          </ul> */}
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
