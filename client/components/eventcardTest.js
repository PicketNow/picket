import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Moment from 'react-moment'

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
})

export default function FeaturedEvent(props) {
  const classes = useStyles()
  const events = props.events
  console.log(events)
  return (
    <div className="events-container">
      {events && (
        <Grid container spacing={4}>
          {events.map(event => (
            <Grid item xs={12} md={6} key={event.id}>
              <CardActionArea component={Link} to={`/events/${event.id}`}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {event.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        <Moment format="D MMM YYYY" withTitle>
                          {event.date}
                        </Moment>
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {event.description}
                      </Typography>
                      <Link
                        to={`/events/${event.id}`}
                        variant="subtitle1"
                        color="primary"
                      >
                        {' '}
                        See More Details...
                      </Link>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image={event.imageUrl}
                    />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

FeaturedEvent.propTypes = {
  events: PropTypes.array
}
