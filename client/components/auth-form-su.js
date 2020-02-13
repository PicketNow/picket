import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import Grid from '@material-ui/core/Grid'

/**
 * COMPONENT
 */
const AuthFormSu = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <Grid>
      <form onSubmit={handleSubmit} name={name}>
        <Grid>
          <Grid>
            <label htmlFor="firstName">
              <small>First Name:</small>
            </label>
          </Grid>
          <Grid>
            <input name="firstName" type="firstName" />
          </Grid>
        </Grid>
        <br />
        <Grid>
          <Grid>
            <label htmlFor="lastName">
              <small>Last Name:</small>
            </label>
          </Grid>
          <Grid>
            <input name="lastName" type="lastName" />
          </Grid>
        </Grid>
        <br />
        <Grid>
          <Grid>
            <label htmlFor="email">
              <small>Email</small>
            </label>
          </Grid>
          <Grid>
            <input name="email" type="text" />
          </Grid>
        </Grid>
        <br />
        <Grid>
          <Grid>
            <label htmlFor="password">
              <small>Password</small>
            </label>
          </Grid>
          <Grid>
            <input name="password" type="password" />
          </Grid>
        </Grid>
        <br />
        <Grid>
          <Grid>
            <button className="form-buttons" type="submit">
              <strong>{displayName}</strong>
            </button>
          </Grid>
        </Grid>
        {error && error.response && <Grid> {error.response.data} </Grid>}
      </form>
      {/* <a href="/auth/google">{displayName} with Google</a> */}
    </Grid>
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
