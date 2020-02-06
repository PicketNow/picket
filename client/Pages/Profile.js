import React from 'react'
import {connect} from 'react-redux'
import {Login, Signup} from '../components/auth-form'
import UserHome from '../components/user-home'

class Profile extends React.Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <UserHome />
        </div>
      )
    } else {
      return (
        <div>
          <Login />
          <Signup />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  me: () => dispatch()
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
