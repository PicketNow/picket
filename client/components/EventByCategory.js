import React from 'react'
import {getFilteredEvents} from '../store/event'
import {connect} from 'react-redux'
//import event card
import {Link} from 'react-router-dom'
import EventCard from './EventCard'
import Jumbo from './Jumbo'
import CategorySearch from '../components/searchComps/categorySearch'

export class EventsByCategory extends React.Component {
  componentDidMount() {
    const eventCategory = this.props.match.params.eventCategory
    this.props.getFilteredEvents(eventCategory)
  }

  render() {
    let events = this.props.events.events
    let firstElem = this.props.events.events[0]

    return (
      <div>
        <Jumbo />
        <br />
        <Link to="/events">
          <button className="button" type="button">
            Return to all events
          </button>
        </Link>
        <h1> All {firstElem && firstElem.interest.name} Events</h1>

        <div>{events && <EventCard events={events} />}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  getFilteredEvents: category => dispatch(getFilteredEvents(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsByCategory)
