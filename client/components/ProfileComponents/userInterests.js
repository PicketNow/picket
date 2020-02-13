import React from 'react'
import {getUserInterests} from '../../store/interestReducer'

import {connect} from 'react-redux'

class UserInterests extends React.Component {
  componentDidMount() {
    this.props.getUserInterests(this.props.userId)
  }

  render() {
    console.log('props in render', this.props)
    return (
      <div>
        <div className="user-interests">
          <h2>Interests:</h2>

          {this.props.userInterests.map(interest => (
            <div key={interest}>{interest}</div>
          ))}
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
