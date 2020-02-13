import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Moment from 'react-moment'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f4fcf8',
    height: 85,
    minWidth: '50%'
  },

  details: {
    display: 'flex'
  },
  content: {
    flex: '1 0 auto',
    maxHeight: 85
  },
  cover: {
    width: 85,
    maxHeight: 85
  }
}))

export default function CommentCard(props) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        component="img"
        alt="User Image"
        className={classes.cover}
        image={props.comment.imageUrl}
        title="User Image"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h7" variant="h7">
            {props.comment.words}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.comment.userName}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            <Moment format="D MMM YYYY" withTitle>
              {props.comment.createdAt}
            </Moment>
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}
