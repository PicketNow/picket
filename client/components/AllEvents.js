import React from 'react'
import {getAllEvents} from '../store/event'
import {connect} from 'react-redux'

class AllEvents extends React.Component {
  componentDidMount() {
    console.log('this.props', this.props)
    this.props.getAllEvents()
    console.log(this.props, 'hellooooo')
  }

  render() {
    //let events = this.props.events
    console.log(this.props, 'helllllllllllo')

    return (
      <div>
        <div className="all-events">
          <h1>Events:</h1>
          <ul>
            {this.props.events.map(event => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>

          {/* {events && <SingleEvent events={events} />} */}
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
