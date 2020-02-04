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
      <div className="outermost-container">
        <div className="single-event-page-container">
          <div className="event-info-container">
            <div className="event-info-left">
              <img className="event-banner" src={this.props.event.imageUrl} />
              <h2>{this.props.event.title}</h2>
              <article className="event-description">
                {this.props.event.description}
              </article>
              <div className="attendees-container" />
            </div>

            <div className="event-info-right">
              <button className="rsvp-button" type="button">
                RSVP
              </button>
              <article>
                <p>{this.props.event.stAddress}</p>
                <p>
                  {this.props.event.city} {this.props.event.zipcode}
                </p>
              </article>
              <img src="" alt="This is a map with a location" />
            </div>
          </div>

          <div className="similar-events-container" />
        </div>
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
