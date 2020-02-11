import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f4fcf8',
    height: 85
  },

  details: {
    display: 'flex'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 85,
    height: 85
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
            Date: {props.comment.createdAt}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}
