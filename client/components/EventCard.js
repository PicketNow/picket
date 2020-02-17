import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Card, CardMedia} from '@material-ui/core'

const EventCard = props => {
  let events = props.events
  return (
    <div className="events-container">
      {events && (
        <Grid container spacing={4}>
          {events.map(event => (
            <Grid item xs={4} key={event.id}>
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  height="140"
                  image={event.imageUrl}
                />
                <div key={event.id} className="event-container">
                  <Link to={`/events/${event.id}`}>
                    <div className="event-title">{event.title}</div>
                  </Link>
                  <div className="event-date">
                    {event.date.toLocaleDateString()}
                  </div>
                  {/* <div className="event-city">{event.city}</div> */}
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default EventCard
