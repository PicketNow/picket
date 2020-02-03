import React from 'react'
import {getAllEvents} from '../store/event'
import {connect} from 'react-redux'

class AllEvents extends React.Component {
  componentDidMount() {
    this.props.getAllEvents()
  }

  render() {
    let events = this.props.events

    return (
      <div>
        <div className="all-events">
          <h1>Events:</h1>
          {events}
          {/* {events && <SingleEvent events={events} />} */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  getAllEvents: () => dispatch(getAllEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents)
