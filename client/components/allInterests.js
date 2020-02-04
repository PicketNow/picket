import React from 'react'
import {connect} from 'react-redux'
import {getInterestsFromServer} from '../store/interestReducer'
import {Link, Router} from 'react-router-dom'
import {Grid, Typography, Card} from '@material-ui/core'

class AllInterests extends React.Component {
  componentDidMount() {
    this.props.getInterests()
  }

  render() {
    return (
      <Grid container spacing={4} className="main all-interests">
        <Typography variant="h3" gutterBottom>
          Categories:
        </Typography>
        {this.props.interests.map(interest => (
          <Grid item xs={4} key={interest.id}>
            <Card className="card">{interest.name}</Card>
          </Grid>
        ))}
      </Grid>
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
