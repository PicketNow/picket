import React from 'react'
import {connect} from 'react-redux'
import {getSingleEvent} from '../store/event'

class SingleEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.eventId)
  }

  render() {
    console.log('in the render of singevent', this.props.event)
    return (
      <div>
        <p>This is the {this.props.event.title} Event Page!</p>
      </div>
    )
  }
}

const mapState = state => ({
  event: state.events.singleEvent
})

const mapDispatch = dispatch => ({
  getEvent: eventId => dispatch(getSingleEvent(eventId))
})

export default connect(mapState, mapDispatch)(SingleEvent)
