import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}))

export default function BottomAppBar({handleClick, isLoggedIn}) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = 'primary-search-account-menu'
  let renderMenu

  // eslint-disable-next-line no-lone-blocks
  {
    isLoggedIn
      ? (renderMenu = (
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
            onClick={renderMenu}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/home"> Profile </Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
              <Link to="/search"> Search </Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
              <Link to="/events"> All Events </Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
              <Link to="/addEvent"> Create Event </Link>
            </MenuItem>
          </Menu>
        ))
      : (renderMenu = (
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/home"> Profile </Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
              <Link to="/search"> Search </Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
              <Link to="/events"> All Events </Link>
            </MenuItem>
          </Menu>
        ))
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className="toolbar">
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Button className="navButton" color="inherit">
            <Link to="/">Home</Link>
          </Button>

          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}

              <Button className="navButton" color="inherit">
                <Link to="/" onClick={handleClick}>
                  Logout
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}

              <Button className="navButton" color="inherit">
                <Link to="/home">Sign In</Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </React.Fragment>
  )
}

BottomAppBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
