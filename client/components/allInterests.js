import React from 'react'
import {connect} from 'react-redux'
import {getInterestsFromServer} from '../store/interestReducer'
import {Link, Router} from 'react-router-dom'
import {Grid, Typography, Card} from '@material-ui/core'
import {sizing} from '@material-ui/system'
import InterestCard from './InterestCard'

class AllInterests extends React.Component {
  componentDidMount() {
    this.props.getInterests()
  }

  render() {
    return (
      <div>
        <h1>Interests</h1>

        <Grid
          container
          spacing={1}
          maxwidth="sm"
          className="main all-interests"
        >
          <InterestCard interests={this.props.interests} />
          {/* <Grid container item xs={3} spacing={1}>
          <Typography variant="h3" gutterBottom>
            Categories:
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {this.props.interests.map(interest => (
            <Grid item xs={4} key={interest.id}>
              <Card className="card">{interest.name}</Card>
            </Grid>
          ))}
        </Grid> */}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  interests: state.interests.interests
})

const mapDispatchToProps = dispatch => {
  return {
    getInterests: () => dispatch(getInterestsFromServer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllInterests)
