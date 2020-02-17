import React from 'react'
import AllInterests from '../components/interestButton.js'
import FeaturedEvents from '../components/featuredEvent.js'
import MainFeaturedPost from '../components/jumbotest'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

class HomePage extends React.Component {
  render() {
    return (
      <Grid>
        <Grid>
          <MainFeaturedPost />
        </Grid>
        <Grid container direction="column">
          <Grid container direction="row" justify="center">
            <Grid container sm={6} xs={12} justify="center">
              <Grid item>
                <Button
                  variant="outlined"
                  color="default"
                  size="large"
                  href="/events"
                >
                  See All Events
                </Button>
              </Grid>
            </Grid>
            <Grid container sm={6} xs={12} justify="center">
              <Grid item>
                <Button
                  variant="outlined"
                  color="default"
                  size="large"
                  href="/search"
                >
                  Filter Events
                </Button>
              </Grid>
            </Grid>
            <br /> <br /> <br /> <br />
          </Grid>

          <Grid>
            <FeaturedEvents />
          </Grid>
          <Grid>
            <AllInterests />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default HomePage
