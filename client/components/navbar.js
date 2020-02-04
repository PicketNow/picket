import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles'

// const Styled = styled.div`
//   .links: {
//     {
//       color: #c7ea46;
//       &:hover {
//         color: white;
//       }
//   }
//   `

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Navibar = ({handleClick, isLoggedIn}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Picket</Link>
          </Typography>

          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}

              <Button color="inherit">
                <Link to="/home"> Profile </Link>
              </Button>

              <Button color="inherit">
                <Link to="/" onClick={handleClick}>
                  Logout
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}

              <Button color="inherit">
                <Link to="/home">Login</Link>
              </Button>

              <Button color="inherit">
                <Link to="/home">Sign Up</Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

// const Navibar = ({handleClick, isLoggedIn}) => (

//     <Navbar sticky="top">
//       <Navbar.Brand>
//         <Link to="/">Picket</Link>
//       </Navbar.Brand>

//       <Nav>
//         {isLoggedIn ? (
//           <div>
//             {/* The navbar will show these links after you log in */}

//             <Nav.Link>
//               <Link to="/home"> Profile </Link>
//             </Nav.Link>

//             <Nav.Link>
//               <Link to="/" onClick={handleClick}>
//                 Logout
//               </Link>
//             </Nav.Link>
//           </div>
//         ) : (
//           <div>
//             {/* The navbar will show these links before you log in */}

//             <Nav.Link>
//               <Link to="/home">Login</Link>
//             </Nav.Link>

//             <Nav.Link>
//               <Link to="/home">Sign Up</Link>
//             </Nav.Link>
//           </div>
//         )}
//       </Nav>
//     </Navbar>

// )

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
