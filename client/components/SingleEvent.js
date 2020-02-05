import React from 'react'
import {connect} from 'react-redux'
import {getSingleEvent} from '../store/event'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import {mapsKey} from '../../secrets'

class SingleEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.eventId)
  }

  handleClick() {
    this.props.rsvpToEvent()
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
              <button
                className="rsvp-button"
                type="button"
                onClick={this.handleClick}
              >
                RSVP
              </button>
              <article>
                <p>{this.props.event.stAddress}</p>
                <p>
                  {this.props.event.city} {this.props.event.zipcode}
                </p>
              </article>
              <LoadScript id="script-loader" googleMapsApiKey={mapsKey}>
                <GoogleMap
                  id="example-map"
                  mapContainerStyle={{
                    height: '250px',
                    width: '250px'
                  }}
                  zoom={14}
                  center={{
                    lat: 40.7308,
                    lng: -73.9973
                  }}
                >
                  <Marker
                    position={{
                      lat: 40.7308,
                      lng: -73.9973
                    }}
                  />
                </GoogleMap>
              </LoadScript>
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
