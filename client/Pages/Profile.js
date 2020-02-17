import React from 'react'
import {connect} from 'react-redux'
import {Login} from '../components/auth-form'
import {Signup} from '../components/auth-form-su'
import UserHome from '../components/ProfileComponents/user-home'
import Jumbo from '../components/Jumbo'
import Homepage from './Homepage'

class Profile extends React.Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <Homepage />
        </div>
      )
    } else {
      return (
        <div>
          <Jumbo />
          <br /> <br />
          <h3>Login Here:</h3>
          <Login />
          <a href="/auth/google">Just do it with Google!</a>
          <br /> <br /> <br /> <br />
          <h3>No Account? Sign-up Now!</h3>
          <Signup />
          <br /> <br />
          <br /> <br />
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
