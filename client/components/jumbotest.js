import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import TypedReactTagline from './typedjs'

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      'https://www.democracynow.org/images/story/13/34813/full_hd/S_DCWomensMarchPackedStreet.jpg',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}))

export default function MainFeaturedPost(props) {
  const classes = useStyles()
  const {post} = props

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: `url(https://www.democracynow.org/images/story/13/34813/full_hd/S_DCWomensMarchPackedStreet.jpg)`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{display: 'none'}} />}
      <div className={classes.overlay} />
      <br />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
            >
              Picket
            </Typography>
            <Typography variant="h4" color="inherit" paragraph>
              <TypedReactTagline />
            </Typography>

            <Button variant="contained" color="default" href="/home">
              Signup
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object
}
