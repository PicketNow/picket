import React from 'react'
import MapSection from './mapSection'

const GuestRender = props => {
  return (
    <div className="outermost-container">
      <div className="single-event-page-container">
        <div className="event-info-container">
          <div className="event-info-left">
            <img className="event-banner" src={props.event.imageUrl} />
            <h2 id="event-title">{props.event.title}</h2>
            <article className="event-description">
              {props.event.description}
            </article>
            <div className="attendees-container">
              <h3>Attendees ({props.attendees.length})</h3>
              {props.attendees.length ? (
                <div>
                  {props.attendees.map(attendee => (
                    <div key={attendee.id}>
                      <p>{attendee.fullName}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Be the first to RSVP to this event!</p>
              )}
            </div>
          </div>

          <div className="event-info-right">
            <div className="rsvp-button-alt">
              <p id="rsvp-suggest">Log in or sign up to RSVP!</p>
            </div>
            <MapSection coords={props.coords} event={props.event} />
          </div>
        </div>
        <div className="similar-events-container" />
      </div>
    </div>
  )
}

export default GuestRender
