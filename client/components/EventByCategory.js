import React from 'react'
import {getFilteredEvents} from '../store/event'
import {connect} from 'react-redux'
//import event card
import {Link} from 'react-router-dom'

export class EventsByCategory extends React.Component {
  componentDidMount() {
    console.log(this.props, 'this.propssssssss')
    const eventCategory = this.props.match.params.eventCategory
    this.props.getFilteredEvents(eventCategory)
    console.log(this.props.events.events[0], 'this.propssssssss events')
  }

  render() {
    let events = this.props.events.events
    let firstElem = this.props.events.events[0]
    console.log('interesttttttttt', firstElem)
    return (
      <div>
        <h1> All {firstElem && firstElem.interest.name} Events</h1>
        <Link to="/events">
          <button className="button" type="button">
            Return to all events
          </button>
        </Link>

        <ul>{events.map(event => <li key={event.id}>{event.title}</li>)}</ul>
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
