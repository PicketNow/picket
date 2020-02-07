import React from 'react'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})

const InterestCard = props => {
  const classes = useStyles()
  let interests = props.interests
  return (
    <div className="interest-container">
      {interests && (
        <Grid container spacing={4}>
          {interests.map(interest => (
            <Grid item xs={4} key={interest.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    componenr="img"
                    height="140"
                    image={interest.imageUrl}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {interest.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    href={`/events/category/${interest.id}`}
                    size="small"
                    color="primary"
                  >
                    Go to All {interest.name} Events
                  </Button>
                  {/* <Button size="small" color="primary">
                      Subscribe to this Interest
                    </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default InterestCard
