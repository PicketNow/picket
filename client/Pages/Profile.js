import React from 'react'
import {connect} from 'react-redux'
import {Login} from '../components/auth-form'
import {Signup} from '../components/auth-form-su'
import UserHome from '../components/ProfileComponents/user-home'

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
