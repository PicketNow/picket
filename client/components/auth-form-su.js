import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from './Typography'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
/**
 * COMPONENT
 */
const AuthFormSu = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div
      style={{
        margin: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar style={{margin: 1}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h4" marked="center" align="center" component="h4">
        Sign up
      </Typography>
      <form
        style={{width: '100%', marginTop: 1}}
        onSubmit={handleSubmit}
        name={name}
      >
        <Grid
          container
          style={{margin: 2, display: 'flex', alignItems: 'center'}}
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <label htmlFor="firstName">
              <medium>First Name:</medium>
            </label>
            <input name="firstName" type="firstName" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="lastName">
              <medium>Last Name:</medium>
            </label>
            <input name="lastName" type="lastName" />
          </Grid>
        </Grid>
        <Grid
          container
          style={{margin: 2, display: 'flex', alignItems: 'center'}}
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <label htmlFor="email">
              <medium>Email</medium>
            </label>
            <input name="email" type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="password">
              <medium>Password</medium>
            </label>
            <input name="password" type="password" />
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <button className="form-buttons" type="submit">
              <strong>{displayName}</strong>
            </button>
          </Grid>
        </Grid>
        {error && error.response && <Grid> {error.response.data} </Grid>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   }
// }

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      dispatch(auth(email, password, firstName, lastName, formName))
    }
  }
}

export const Signup = connect(mapSignup, mapDispatch)(AuthFormSu)

/**
 * PROP TYPES
 */
AuthFormSu.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
