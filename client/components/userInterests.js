import React from 'react'
import {getUserInterests} from '../store/interestReducer'

import {connect} from 'react-redux'

class UserInterests extends React.Component {
  componentDidMount() {
    this.props.getUserInterests(this.props.userId)
    console.log('userInterests', this.props)
  }

  render() {
    return (
      <div>
        <div className="user-interests">
          <h1>Your Interests:</h1>
          <ul>
            {this.props.userInterests.map(interest => (
              <li key={interest}>{interest}</li>
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
