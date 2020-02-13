import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import {CardContent, CardMedia, Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Moment from 'react-moment'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f4fcf8',
    // height: 85,
    width: '100%'
  },

  details: {
    display: 'flex'
  },
  content: {
    flex: 1
    // flex: '1 0 auto',
  },
  cover: {
    width: 50,
    maxHeight: 50
  }
}))

export default function CommentCard(props) {
  const classes = useStyles()
  const theme = useTheme()
  console.log(props, 'here we are in the props')

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
          <Typography component="h3" variant="h7">
            {props.comment.userName}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <Moment format="D MMM YYYY" withTitle>
              {props.comment.createdAt}
            </Moment>
          </Typography>

          <Typography component="body2" variant="body7" color="textSecondary">
            {props.comment.words}
          </Typography>
          <div>
            <Button
              color="primary"
              onClick={props.deleteComment(props.comment.id)}
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
