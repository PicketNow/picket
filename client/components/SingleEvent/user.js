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
import Button from '@material-ui/core/IconButton'

const UserRender = props => {
  console.log('SINGLE EVENT USER', props.user, props.event)
  return (
    <Grid container className="outermost-container">
      <Grid container className="single-event-page-container">
        <Grid container spacing={4} className="event-info-container">
          <Grid container item xs={12} sm={6} className="event-info-left">
            <Card elevation={0}>
              <CardMedia
                component="img"
                className="event-banner"
                image={props.event.imageUrl}
                style={{maxWidth: '600px'}}
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

                {props.attendees.length ? (
                  <Typography component="div">
                    {props.attendees.map(attendee => (
                      <Typography key={attendee.id} component="div">
                        {attendee.fullName}
                      </Typography>
                    ))}
                  </Typography>
                ) : (
                  <CardContent>
                    <Typography component="p">
                      Be the first to RSVP to this event!
                    </Typography>
                  </CardContent>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid container item xs={12} sm={6} className="event-info-right">
            <Card elevation={0}>
              <CardActionArea id="rsvp-button-container">
                {props.isRSVPed() ? (
                  <Button
                    style={{fontSize: '1em'}}
                    className="rsvp-button"
                    type="button"
                    onClick={props.handleClick}
                  >
                    Un-RSVP
                  </Button>
                ) : (
                  <Button
                    style={{fontSize: '2em'}}
                    className="rsvp-button"
                    type="button"
                    onClick={props.handleClick}
                  >
                    RSVP
                  </Button>
                )}
              </CardActionArea>
              {props.isRSVPed() ? (
                <Button
                  style={{fontSize: '1em'}}
                  className="check-in-button"
                  type="button"
                  onClick={props.handleCheckIn}
                >
                  Check In
                </Button>
              ) : null}
              {props.user.id === props.event.organizerId ? (
                <React.Fragment>
                  <Button
                    style={{fontSize: '1em'}}
                    className="delete-button"
                    type="button"
                    onClick={props.handleDelete}
                  >
                    Delete This Event
                  </Button>
                  <Button
                    style={{fontSize: '1em'}}
                    className="delete-button"
                    type="button"
                    onClick={props.handleUpdate}
                  >
                    Update
                  </Button>
                </React.Fragment>
              ) : null}
              <MapSection coords={props.coords} event={props.event} />
            </Card>
          </Grid>
        </Grid>

        <div className="similar-events-container" />
      </Grid>
    </Grid>
  )
}

export default UserRender
