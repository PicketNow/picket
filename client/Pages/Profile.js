import React from 'react'
import {connect} from 'react-redux'
import {Login} from '../components/auth-form'
import {Signup} from '../components/auth-form-su'
import UserHome from '../components/ProfileComponents/user-home'
import Jumbo from '../components/Jumbo'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

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
        <Grid container component="main" styles={{height: '100vh'}}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            style={{
              backgroundImage:
                'url(https://cdn.britannica.com/46/7546-050-1DB8A70E/Martin-Luther-King-Jr-civil-rights-supporters-August-1963.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'grey',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            style={{width: '100%'}}
          >
            <div
              style={{
                margin: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* <Jumbo />
          <br /> <br /> */}
              <Login />
              {/* <a href="/auth/google">Just do it with Google!</a> */}
              <br /> <br /> <br />
              <Signup />
            </div>
          </Grid>
        </Grid>
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
