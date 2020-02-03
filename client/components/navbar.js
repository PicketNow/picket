import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #5dbb63;
  }
  .navbar-brand {
    font-size: 175%;
  }
  .navbar-nav {
    display: flex;
    flex-flow: row nowrap;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #c7ea46;
    &:hover {
      color: white;
    }
  }
`

const Navibar = ({handleClick, isLoggedIn}) => (
  <Styles>
    <Navbar sticky="top">
      <Navbar.Brand>
        <Link to="/">Picket</Link>
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Nav.Item>
                <Nav.Link>
                  <Link to="/home"> Home </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/login" onClick={handleClick}>
                    Logout
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Nav.Item>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/signup">Sign Up</Link>
                </Nav.Link>
              </Nav.Item>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navibar)

/**
 * PROP TYPES
 */
Navibar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
