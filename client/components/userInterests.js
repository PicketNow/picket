import React from 'react'
import {getUserInterests} from '../store/interestReducer'

import {connect} from 'react-redux'

class UserInterests extends React.Component {
  componentDidMount() {
    this.props.getUserInterests(this.props.userId)
  }

  render() {
    return (
      <div>
        <div className="featured-events">
          <h1>Your Interests:</h1>
          <ul>
            {this.props.userInterests.map(event => (
              <li key={event.id}>{event.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  userInterests: state.interests.userInterests
})

const mapDispatchToProps = dispatch => ({
  getUserInterests: userId => dispatch(getUserInterests(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInterests)
