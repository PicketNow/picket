import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../store/user'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from './Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
/**
 * COMPONENT
 */
const AuthForm = props => {
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
        Sign in
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
        <Grid
          container
          style={{margin: 2, display: 'flex', alignItems: 'center'}}
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <button className="form-buttons" type="submit">
              <strong>{displayName}</strong>
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <a href="/auth/google">Just do it with Google!</a>
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
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(login(email, password))
      history.push('/')
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
