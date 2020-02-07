import React from 'react'
import {connect} from 'react-redux'
import {getInterestsFromServer} from '../store/interestReducer'
import {Link, Router} from 'react-router-dom'
import {Grid, Typography, Card, CardMedia} from '@material-ui/core'
import {sizing} from '@material-ui/system'

class AllInterests extends React.Component {
  componentDidMount() {
    this.props.getInterests()
  }

  render() {
    return (
      <Grid container spacing={1} maxwidth="sm" className="main all-interests">
        <Grid container item xs={3} spacing={1}>
          <Typography variant="h3" gutterBottom>
            Categories:
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {this.props.interests.map(interest => (
            <Grid item xs={4} key={interest.id}>
              <Card className="card">
                {interest.name}
                <CardMedia
                  component="img"
                  height="200"
                  image={interest.imageUrl}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
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
