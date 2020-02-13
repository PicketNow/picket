import React from 'react'
import MapSection from './mapSection'

import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})

const GuestRender = props => {
  const classes = useStyles()
  return (
    <Grid container className="outermost-container">
      <Grid container className="single-event-page-container">
        <Grid container spacing={4} className="event-info-container">
          <Grid container item xs={12} sm={6} className="event-info-left">
            <Card elevation={0}>
              <CardMedia
                style={{maxWidth: '600px'}}
                component="img"
                className="event-banner"
                image={props.event.imageUrl}
              />
              <CardHeader id="event-title" title={props.event.title} />
              <CardContent>
                <Typography className="event-description">
                  {props.event.description}
                </Typography>
              </CardContent>
              <CardContent className="attendees-container">
                <Typography component="h2">
                  Attendees ({props.attendees.length})
                </Typography>
              </CardContent>
              {props.attendees.length ? (
                <CardContent>
                  {props.attendees.map(attendee => (
                    <Typography component="div" key={attendee.id}>
                      <Typography component="p">{attendee.fullName}</Typography>
                    </Typography>
                  ))}
                </CardContent>
              ) : (
                <CardContent>
                  <Typography component="p">
                    Be the first to RSVP to this event!
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Grid>

          <Grid container item xs={12} sm={6} className="event-info-right">
            <Card elevation={0}>
              <CardContent className="rsvp-button-alt">
                <Typography component="p" id="rsvp-suggest">
                  Log in or sign up to RSVP!
                </Typography>
              </CardContent>
              <MapSection coords={props.coords} event={props.event} />
            </Card>
          </Grid>
        </Grid>
        <div className="similar-events-container" />
      </Grid>
    </Grid>
  )
}

export default GuestRender
