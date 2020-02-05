import React from 'react'
import {Link} from 'react-router-dom'

const EventCard = props => {
  let events = props.events

  return (
    <div className="events-container">
      {events &&
        events.map(event => (
          <div key={event.id} className="event-container">
            <Link to={`/events/${event.id}`}>
              <div className="event-title">{event.title}</div>
            </Link>
            <div className="img">
              {/* <img width={300} height={300} src={event.imageUrl} /> */}
            </div>
            <div className="event-date">{event.date}</div>
          </div>
        ))}
    </div>
  )
}

export default EventCard
